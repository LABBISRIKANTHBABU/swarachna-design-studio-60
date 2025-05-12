
declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface PaymentOptions {
  amount: number; // in paise (1 rupee = 100 paise)
  currency: string;
  name: string;
  description: string;
  orderId: string;
  customerInfo: {
    name: string;
    email: string;
    phone?: string;
  };
  handleSuccess: (payment_id: string, order_id: string) => void;
  handleFailure: (error: any) => void;
}

export const initializeRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const makePayment = async (options: PaymentOptions) => {
  const res = await initializeRazorpay();
  
  if (!res) {
    alert("Razorpay SDK failed to load. Please check your internet connection.");
    return;
  }

  const paymentOptions = {
    key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
    amount: options.amount,
    currency: options.currency,
    name: options.name,
    description: options.description,
    order_id: options.orderId,
    handler: function (response: any) {
      options.handleSuccess(
        response.razorpay_payment_id,
        response.razorpay_order_id
      );
    },
    prefill: {
      name: options.customerInfo.name,
      email: options.customerInfo.email,
      contact: options.customerInfo.phone || "",
    },
    notes: {
      address: "Swarachna Office",
    },
    theme: {
      color: "#800020", // Burgundy to match your theme
    },
  };

  try {
    const paymentObject = new window.Razorpay(paymentOptions);
    paymentObject.open();
  } catch (error) {
    options.handleFailure(error);
  }
};
