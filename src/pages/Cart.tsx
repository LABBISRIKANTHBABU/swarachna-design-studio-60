
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import CheckoutForm from '@/components/CheckoutForm';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "Please login to continue with checkout",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }
    
    setShowCheckoutForm(true);
  };
  
  const handlePaymentSuccess = () => {
    clearCart();
    setShowCheckoutForm(false);
    navigate('/');
  };
  
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
          <span className="gold-text">Your Cart</span>
        </h1>
        
        {items.length === 0 ? (
          <Card className="mb-8">
            <CardContent className="pt-6 text-center">
              <p className="mb-6">Your cart is empty</p>
              <Link to="/gallery">
                <Button className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white">
                  Browse Gallery
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardContent className="pt-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center py-4 border-b last:border-0">
                      <div className="w-20 h-20 mr-4">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">Service ID: {item.serviceId}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline" 
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-destructive"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Total Items</span>
                      <span>{items.length}</span>
                    </div>
                    <div className="flex justify-between font-medium text-lg pt-2 border-t">
                      <span>Total</span>
                      <span>{total > 0 ? `₹${total.toFixed(2)}` : 'Request Quote'}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  {showCheckoutForm ? (
                    <CheckoutForm 
                      items={items} 
                      total={total > 0 ? total : 0} 
                      onSuccess={handlePaymentSuccess} 
                    />
                  ) : (
                    <>
                      <Button 
                        className="w-full bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white"
                        onClick={handleCheckout}
                      >
                        Checkout <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
                    </>
                  )}
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
