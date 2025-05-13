
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StepperContext } from "./StepperContext";
import { toast } from "@/components/ui/use-toast";

interface StepProps {
  children: ReactNode;
  isActive: boolean;
}

const Step = ({ children, isActive }: StepProps) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key="step"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface StepperProps {
  steps: ReactNode[];
  onComplete?: () => void;
  onStepChange?: (step: number) => void;
  validateStep?: (step: number) => Promise<boolean> | boolean;
}

const Stepper = ({ steps, onComplete, onStepChange, validateStep }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToStep = async (index: number) => {
    if (index === currentStep) return;
    
    // If moving forward, validate current step
    if (index > currentStep && validateStep) {
      try {
        const isValid = await validateStep(currentStep);
        if (!isValid) {
          toast({
            title: "Validation Failed",
            description: "Please complete the current step before proceeding.",
            variant: "destructive",
          });
          return;
        }
      } catch (error) {
        console.error("Step validation error:", error);
        return;
      }
    }
    
    setCurrentStep(index);
    onStepChange?.(index);
  };

  const goNext = async () => {
    // Validate current step before proceeding
    if (validateStep) {
      try {
        const isValid = await validateStep(currentStep);
        if (!isValid) {
          toast({
            title: "Validation Failed",
            description: "Please complete the current step before proceeding.",
            variant: "destructive",
          });
          return;
        }
      } catch (error) {
        console.error("Step validation error:", error);
        return;
      }
    }
    
    const next = currentStep + 1;
    if (next < steps.length) {
      setCurrentStep(next);
      onStepChange?.(next);
    } else {
      onComplete?.();
    }
  };

  const goBack = () => {
    const prev = currentStep - 1;
    if (prev >= 0) {
      setCurrentStep(prev);
      onStepChange?.(prev);
    }
  };

  return (
    <StepperContext.Provider value={{ currentStep, goNext, goBack }}>
      <div role="list" aria-label="Step Progress" className="stepper">
        <div className="step-indicators">
          {steps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to step ${i + 1}`}
              aria-current={i === currentStep}
              className={`step-dot ${i === currentStep ? "active" : ""}`}
              onClick={() => goToStep(i)}
            >
              {i < currentStep ? "✓" : i + 1}
            </button>
          ))}
        </div>

        <div className="step-content">
          {steps.map((step, i) => (
            <Step key={i} isActive={i === currentStep}>
              {step}
            </Step>
          ))}
        </div>

        <div className="step-nav">
          <button 
            onClick={goBack} 
            disabled={currentStep === 0}
            className="px-4 py-2 bg-swarachna-burgundy/80 text-white rounded-lg disabled:opacity-50"
          >
            Back
          </button>
          <button 
            onClick={goNext}
            className="px-4 py-2 bg-swarachna-burgundy text-white rounded-lg"
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </StepperContext.Provider>
  );
};

export default Stepper;
