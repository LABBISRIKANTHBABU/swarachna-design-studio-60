
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Check, Mail, Phone } from "lucide-react";

const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const phoneRegisterSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
});

const otpSchema = z.object({
  otp: z.string().length(6, { message: "Please enter the 6-digit OTP" }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;
type PhoneRegisterFormValues = z.infer<typeof phoneRegisterSchema>;
type OtpFormValues = z.infer<typeof otpSchema>;

const Register: React.FC = () => {
  const { register, loginWithGoogle, sendPhoneOtp, verifyPhoneOtp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [registerMethod, setRegisterMethod] = useState<'email' | 'phone'>('email');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [verificationId, setVerificationId] = useState<string>("");
  const [registrationData, setRegistrationData] = useState<{
    email?: string;
    phone?: string;
    name: string;
    password?: string;
  }>({ name: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create a ref for the invisible reCAPTCHA
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  
  // Reset reCAPTCHA when component unmounts
  useEffect(() => {
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    };
  }, []);
  
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  
  const phoneForm = useForm<PhoneRegisterFormValues>({
    resolver: zodResolver(phoneRegisterSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });
  
  const otpForm = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });
  
  const onGoogleRegister = async () => {
    try {
      setIsSubmitting(true);
      await loginWithGoogle();
      toast({
        title: "Registration successful",
        description: "Welcome to Swarachna!",
      });
      navigate('/');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An error occurred during Google registration",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setIsSubmitting(true);
      await register(data.email, data.password, data.name);
      toast({
        title: "Registration successful",
        description: "Welcome to Swarachna!",
      });
      navigate('/');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An error occurred during registration",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const onPhoneSubmit = async (data: PhoneRegisterFormValues) => {
    try {
      setIsSubmitting(true);
      // Send OTP to phone number
      const verId = await sendPhoneOtp(data.phone);
      setVerificationId(verId);
      setShowOtpInput(true);
      setRegisterMethod('phone');
      setRegistrationData({
        name: data.name,
        phone: data.phone,
      });
      
      toast({
        title: "OTP sent",
        description: `A verification code has been sent to ${data.phone}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An error occurred during registration",
      });
      
      // Re-create reCAPTCHA container if needed
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const onOtpSubmit = async (data: OtpFormValues) => {
    try {
      setIsSubmitting(true);
      await verifyPhoneOtp(verificationId, data.otp);
      
      // For phone registration, we'd typically store additional user data in a database
      // But in this demo we'll just show a success message
      toast({
        title: "Registration successful",
        description: "Welcome to Swarachna!",
      });
      navigate('/');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Verification failed",
        description: error instanceof Error ? error.message : "An error occurred during verification",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForms = () => {
    setShowOtpInput(false);
    form.reset();
    phoneForm.reset();
    otpForm.reset();
    setRegistrationData({ name: "" });
  };
  
  return (
    <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
      {/* Invisible reCAPTCHA container */}
      <div id="recaptcha-container" ref={recaptchaContainerRef}></div>
      
      <div className="container max-w-md">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center font-playfair">
              <span className="gold-text font-extrabold" style={{ textShadow: '0 1px 1px rgba(0,0,0,0.05)', WebkitTextStroke: '0.5px rgba(184, 134, 11, 0.5)' }}>Create Account</span>
            </CardTitle>
            <CardDescription className="text-center">
              {!showOtpInput ? 
                "Enter your details to create your account" : 
                `Enter the verification code sent to your ${registerMethod === 'email' ? 'email' : 'phone'}`
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showOtpInput ? (
              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="email" onClick={() => setRegisterMethod('email')}>Email</TabsTrigger>
                  <TabsTrigger value="phone" onClick={() => setRegisterMethod('phone')}>Phone</TabsTrigger>
                </TabsList>
                
                <TabsContent value="email" className="space-y-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2 h-12"
                    onClick={onGoogleRegister}
                    disabled={isSubmitting}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-5 w-5">
                      <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                      <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                      <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                      <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
                    </svg>
                    Register with Google
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or register with</span>
                    </div>
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="mail@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Registering..." : "Register"}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
                
                <TabsContent value="phone" className="space-y-4">
                  <Form {...phoneForm}>
                    <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-4">
                      <FormField
                        control={phoneForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={phoneForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                                  +91
                                </span>
                                <Input placeholder="9876543210" className="rounded-l-none" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending OTP..." : "Send OTP"}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="space-y-4">
                <div className="text-center mb-4">
                  {registerMethod === 'email' ? (
                    <Mail className="mx-auto h-10 w-10 text-swarachna-burgundy mb-2" />
                  ) : (
                    <Phone className="mx-auto h-10 w-10 text-swarachna-burgundy mb-2" />
                  )}
                  <p className="text-sm text-gray-500">
                    {registerMethod === 'email' 
                      ? `We've sent a code to ${registrationData.email}` 
                      : `We've sent a code to +91 ${registrationData.phone}`}
                  </p>
                </div>
                
                <Form {...otpForm}>
                  <form onSubmit={otpForm.handleSubmit(onOtpSubmit)} className="space-y-4">
                    <FormField
                      control={otpForm.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Verification Code</FormLabel>
                          <FormControl>
                            <InputOTP maxLength={6} {...field}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex flex-col space-y-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Verifying..." : "Verify & Create Account"}
                      </Button>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        className="text-sm"
                        onClick={resetForms}
                      >
                        Use different method
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-swarachna-burgundy hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
