
import { createContext, useContext } from "react";

interface StepperContextType {
  currentStep: number;
  goNext: () => void;
  goBack: () => void;
}

export const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
};
