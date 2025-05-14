
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
    // Format the items in a more readable HTML table format
    const formattedItems = orderData.items.map(item => {
      return `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.title}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.serviceId}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.quantity}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.price ? `₹${item.price.toFixed(2)}` : 'Quote Required'}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.price ? `₹${(item.price * item.quantity).toFixed(2)}` : 'Quote Required'}</td>
        </tr>
      `;
    }).join('');

    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #800020;">
          <h1 style="color: #800020; margin: 0;">Swarachna - New Order</h1>
        </div>
        
        <div style="padding: 20px 0;">
          <h2 style="color: #333;">Order Information</h2>
          <p><strong>Order ID:</strong> ${orderData.orderId}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Total Amount:</strong> ${orderData.total > 0 ? `₹${orderData.total.toFixed(2)}` : 'Quote Required'}</p>
        </div>
        
        <div style="padding: 20px 0; border-top: 1px solid #e0e0e0;">
          <h2 style="color: #333;">Customer Information</h2>
          <p><strong>Name:</strong> ${orderData.customerInfo.name}</p>
          <p><strong>Email:</strong> ${orderData.customerInfo.email}</p>
          <p><strong>Phone:</strong> ${orderData.customerInfo.phone || 'Not provided'}</p>
        </div>
        
        <div style="padding: 20px 0; border-top: 1px solid #e0e0e0;">
          <h2 style="color: #333;">Order Items</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
              <tr style="background-color: #f2f2f2;">
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Item</th>
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Service ID</th>
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Quantity</th>
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Unit Price</th>
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              ${formattedItems}
            </tbody>
          </table>
        </div>
        
        <div style="padding: 20px 0; border-top: 1px solid #e0e0e0; text-align: center; color: #666;">
          <p>Thank you for using Swarachna services!</p>
        </div>
      </div>
    `;

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
          to_email: "swarachnaa@gmail.com", // Owner's email
          from_name: orderData.customerInfo.name,
          from_email: orderData.customerInfo.email,
          order_id: orderData.orderId,
          html_content: emailBody,
          subject: `New Order #${orderData.orderId} from ${orderData.customerInfo.name}`,
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
    // Create a well-structured HTML email
    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #800020;">
          <h1 style="color: #800020; margin: 0;">Swarachna - Contact Form Submission</h1>
        </div>
        
        <div style="padding: 20px 0;">
          <h2 style="color: #333;">Contact Information</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleTimeString()}</p>
        </div>
        
        <div style="padding: 20px 0; border-top: 1px solid #e0e0e0;">
          <h2 style="color: #333;">Message</h2>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            <p>${contactData.message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
        
        <div style="padding: 20px 0; border-top: 1px solid #e0e0e0; text-align: center; color: #666;">
          <p>This is an automated message from your website contact form.</p>
        </div>
      </div>
    `;

    // Send email using EmailJS
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
          html_content: emailBody,
          subject: `New Contact Form Submission from ${contactData.name}`,
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
