
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { makePayment } from '@/utils/razorpay';
import { sendOrderEmail } from '@/utils/emailNotification';
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof formSchema>;

interface CartItem {
  id: string;
  title: string;
  image: string;
  price?: number;
  serviceId: string;
  quantity: number;
}

interface CheckoutFormProps {
  items: CartItem[];
  total: number;
  onSuccess: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ items, total, onSuccess }) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    if (items.length === 0) {
      toast({
        title: "Empty cart",
        description: "Your cart is empty. Please add items before checkout.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      // In a real implementation, you would create an order on your backend
      // For now, we'll generate a simple order ID
      const orderId = `order_${Date.now()}`;
      const amount = total > 0 ? Math.round(total * 100) : 100; // Convert to paise with minimum of ₹1

      makePayment({
        amount: amount,
        currency: "INR",
        name: "Swarachna",
        description: `Payment for ${items.length} item(s)`,
        orderId: orderId,
        customerInfo: {
          name: data.name,
          email: data.email,
          phone: data.phone,
        },
        handleSuccess: async (payment_id, order_id) => {
          // Send email notification with order details
          const emailResult = await sendOrderEmail({
            items,
            total: total > 0 ? total : 0,
            customerInfo: {
              name: data.name,
              email: data.email,
              phone: data.phone,
            },
            orderId: payment_id,
          });

          if (emailResult.success) {
            toast({
              title: "Payment successful!",
              description: `Your order has been placed. Order ID: ${payment_id}`,
            });
            onSuccess();
          } else {
            toast({
              title: "Payment successful!",
              description: "Your order was placed, but there was an issue sending the confirmation email.",
            });
            onSuccess();
          }
          setIsProcessing(false);
        },
        handleFailure: (error) => {
          console.error("Payment failed:", error);
          toast({
            title: "Payment failed",
            description: "There was an issue processing your payment. Please try again.",
            variant: "destructive",
          });
          setIsProcessing(false);
        },
      });
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout error",
        description: "There was an issue processing your request. Please try again.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
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
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : `Pay ${total > 0 ? `₹${total.toFixed(2)}` : "Now"}`}
        </Button>
      </form>
    </Form>
  );
};

export default CheckoutForm;
