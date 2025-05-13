
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, Camera, File, X } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';

const UploadDesign: React.FC = () => {
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [serviceType, setServiceType] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [notes, setNotes] = useState('');
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      setFiles(prev => [...prev, ...newFiles]);
      
      // Create previews
      newFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviews(prev => [...prev, e.target?.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    
    if (droppedFiles) {
      const newFiles = Array.from(droppedFiles);
      setFiles(prev => [...prev, ...newFiles]);
      
      // Create previews
      newFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviews(prev => [...prev, e.target?.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };
  
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleTakePhoto = () => {
    // Try to access device camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => {
          // If permission granted, open file input which should trigger camera on mobile
          if (fileInputRef.current) {
            fileInputRef.current.setAttribute("capture", "environment");
            fileInputRef.current.click();
          }
        })
        .catch(err => {
          toast({
            title: "Camera access denied",
            description: "Please allow camera access to take photos",
            variant: "destructive"
          });
          console.error("Error accessing camera:", err);
        });
    } else {
      // Fallback for devices without camera API
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one design file",
        variant: "destructive"
      });
      return;
    }
    
    if (!serviceType) {
      toast({
        title: "Service type required",
        description: "Please select a service type",
        variant: "destructive"
      });
      return;
    }
    
    if (!contactInfo) {
      toast({
        title: "Contact information required",
        description: "Please provide your contact information",
        variant: "destructive"
      });
      return;
    }
    
    // Normally you'd submit the form to a server here
    toast({
      title: "Design submitted successfully!",
      description: "We'll review your design and get back to you soon.",
    });
    
    // Reset the form
    setFiles([]);
    setPreviews([]);
    setServiceType('');
    setContactInfo('');
    setNotes('');
  };
  
  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center mb-6 text-swarachna-burgundy hover:text-swarachna-gold transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
          <span className="gold-text">Upload Your Design</span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-2">
                  What service do you need?
                </label>
                <select 
                  id="service-type" 
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full border border-swarachna-gold/20 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-swarachna-gold"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="logo-design">Logo & Brand Design</option>
                  <option value="marketing-materials">Marketing Materials</option>
                  <option value="packaging-labels">Packaging & Labels</option>
                  <option value="apparel-printing">Apparel Printing</option>
                  <option value="event-display">Event & Display</option>
                  <option value="corporate-stationery">Corporate Stationery</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="contact-info" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Contact Information (Email or Phone)
                </label>
                <input 
                  type="text" 
                  id="contact-info"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full border border-swarachna-gold/20 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-swarachna-gold"
                  placeholder="Enter your email or phone number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea 
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border border-swarachna-gold/20 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-swarachna-gold"
                  placeholder="Tell us more about your requirements"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2 transition-all w-full justify-center"
              >
                Submit Design
              </Button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2">
            <div 
              className="border-2 border-dashed border-swarachna-gold/30 rounded-lg p-8 text-center hover:border-swarachna-gold/60 transition-colors bg-swarachna-cream/20"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                onChange={handleFileChange} 
                className="hidden" 
                id="file-upload"
                ref={fileInputRef}
              />
              
              {previews.length === 0 ? (
                <>
                  <Upload size={48} className="mx-auto text-swarachna-burgundy/60 mb-4" />
                  <h3 className="text-xl font-bold text-swarachna-burgundy mb-2">Upload Your Design Files</h3>
                  <p className="text-gray-600 mb-6">Drag and drop files here, or click to browse</p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <label htmlFor="file-upload">
                      <Button 
                        type="button"
                        variant="outline"
                        className="bg-transparent border-2 border-swarachna-gold text-swarachna-burgundy rounded-lg font-medium hover:bg-swarachna-gold/10 transition-all flex items-center gap-2 w-full sm:w-auto"
                      >
                        <File size={18} />
                        Browse Files
                      </Button>
                    </label>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      className="bg-transparent border-2 border-swarachna-gold text-swarachna-burgundy rounded-lg font-medium hover:bg-swarachna-gold/10 transition-all flex items-center gap-2 w-full sm:w-auto"
                      onClick={handleTakePhoto}
                    >
                      <Camera size={18} />
                      Take Photo
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    Supported formats: JPG, PNG, PDF, AI, PSD, EPS (Max 20MB)
                  </p>
                </>
              ) : (
                <div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {previews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={preview} 
                          alt={`Preview ${index}`} 
                          className="w-full h-32 object-cover rounded-lg" 
                        />
                        <button 
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                    
                    <label htmlFor="file-upload" className="flex items-center justify-center w-full h-32 border-2 border-dashed border-swarachna-gold/30 rounded-lg cursor-pointer hover:border-swarachna-gold/60 transition-colors">
                      <div className="text-center">
                        <Upload size={24} className="mx-auto text-swarachna-burgundy/60 mb-2" />
                        <span className="text-sm text-swarachna-burgundy">Add More</span>
                      </div>
                    </label>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      type="button"
                      variant="outline"
                      className="bg-transparent border-2 border-swarachna-gold text-swarachna-burgundy rounded-lg font-medium hover:bg-swarachna-gold/10 transition-all flex items-center gap-2"
                      onClick={handleTakePhoto}
                    >
                      <Camera size={18} />
                      Take Photo
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6 bg-swarachna-cream/30 p-6 rounded-lg border border-swarachna-gold/20">
              <h3 className="text-xl font-bold text-swarachna-burgundy mb-4 font-playfair">Tips for Better Results</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-swarachna-gold mr-2">•</span>
                  <span>Upload high-resolution files for the best print quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-swarachna-gold mr-2">•</span>
                  <span>Vector files (AI, EPS) work best for logos and graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-swarachna-gold mr-2">•</span>
                  <span>Include any specific color codes or fonts in your notes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-swarachna-gold mr-2">•</span>
                  <span>Add references or inspirations to help us understand your vision</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-swarachna-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-swarachna-burgundy opacity-5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default UploadDesign;
