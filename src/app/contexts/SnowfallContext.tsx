"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SnowfallContextFields {
  isSnowing: boolean;
  toggleSnow: () => void;
}

const SnowfallContext = createContext<SnowfallContextFields | undefined>(undefined);

export const SnowfallProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSnowing, setIsSnowing] = useState<boolean>(() => {
    // Retrieve the initial state from localStorage
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("isSnowing");
      return savedState === "true"; // Convert string to boolean
    }
    return false; // Default to false if no saved state
  });

  const toggleSnow = () => {
    setIsSnowing((prev) => {
      const newState = !prev;
      localStorage.setItem("isSnowing", newState.toString()); // Save the new state to localStorage
      return newState;
    });
  };

  useEffect(() => {
    // Sync the state with localStorage on mount
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("isSnowing");
      if (savedState !== null) {
        setIsSnowing(savedState === "true");
      }
    }
  }, []);

  return (
    <SnowfallContext.Provider value={{ isSnowing, toggleSnow }}>
      {children}
    </SnowfallContext.Provider>
  );
};

export const useSnowfall = (): SnowfallContextFields => {
  const context = useContext(SnowfallContext);
  if (!context) {
    throw new Error("useSnowfall must be used within a SnowfallProvider");
  }
  return context;
};