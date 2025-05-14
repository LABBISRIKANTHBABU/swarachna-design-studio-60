
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  UserCredential,
  PhoneAuthProvider,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from '@/config/firebase';

// Define user type
type User = {
  id: string;
  email: string | null;
  name?: string;
  phone?: string;
};

// Define auth context type
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  sendPhoneOtp: (phoneNumber: string) => Promise<string>;
  verifyPhoneOtp: (verificationId: string, otp: string) => Promise<void>;
  register: (email: string, password: string, name?: string, phone?: string) => Promise<void>;
  logout: () => void;
};

// Create auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userData: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName || undefined,
          phone: firebaseUser.phoneNumber || undefined,
        };
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  };

  const sendPhoneOtp = async (phoneNumber: string): Promise<string> => {
    try {
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`;
      
      const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      });

      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifier);
      return confirmationResult.verificationId;
    } catch (error) {
      console.error("Phone OTP error:", error);
      throw error;
    }
  };

  const verifyPhoneOtp = async (verificationId: string, otp: string) => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithPopup(auth, new PhoneAuthProvider());
    } catch (error) {
      console.error("OTP verification error:", error);
      throw error;
    }
  };
  
  const register = async (email: string, password: string, name?: string, phone?: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Additional user data like name and phone would be stored in a database in a real app
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };
  
  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('cart');
      })
      .catch(error => {
        console.error("Logout error:", error);
      });
  };
  
  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      loginWithGoogle,
      sendPhoneOtp,
      verifyPhoneOtp,
      register, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
