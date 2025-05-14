
export async function sendOrderEmail(orderData: {
  items: Array<{
    id: string;
    title: string;
    serviceId: string;
    quantity: number;
    price?: number;
  }>;
  total: number;
  customerInfo: {
    name: string;
    email: string;
    phone?: string;
  };
  orderId: string;
}) {
  try {
    // In a real implementation, this would connect to your backend
    // For now, we'll use EmailJS as a simple solution
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "YOUR_EMAILJS_SERVICE_ID", // Replace with your EmailJS service ID
        template_id: "YOUR_EMAILJS_TEMPLATE_ID", // Replace with your EmailJS template ID
        user_id: "YOUR_EMAILJS_PUBLIC_KEY", // Replace with your EmailJS public key
        template_params: {
          to_email: "swarachnaa@gmail.com", // Updated recipient email
          from_name: orderData.customerInfo.name,
          from_email: orderData.customerInfo.email,
          order_id: orderData.orderId,
          items: JSON.stringify(orderData.items),
          total_amount: orderData.total.toFixed(2),
          customer_phone: orderData.customerInfo.phone || "Not provided",
          message: `New order received from ${orderData.customerInfo.name}`,
        },
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email notification:", error);
    return { 
      success: false, 
      error: "Failed to send email notification" 
    };
  }
}

export async function sendContactEmail(contactData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  try {
    // Send email using EmailJS or another service
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "YOUR_EMAILJS_SERVICE_ID", // Replace with your EmailJS service ID
        template_id: "YOUR_EMAILJS_TEMPLATE_ID", // Replace with your EmailJS template ID
        user_id: "YOUR_EMAILJS_PUBLIC_KEY", // Replace with your EmailJS public key
        template_params: {
          to_email: "swarachnaa@gmail.com",
          from_name: contactData.name,
          from_email: contactData.email,
          message: contactData.message,
          phone: contactData.phone || "Not provided",
          subject: "New Contact Form Submission",
        },
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error("Failed to send contact email");
    }
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { 
      success: false, 
      error: "Failed to send contact email" 
    };
  }
}
