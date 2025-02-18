import { createContext, useState, useMemo, useContext, useEffect } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflowY = "unset";
      document.body.style.overflowX = "hidden";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }
  }, [isMobileMenuOpen]);

  const contextValue = useMemo(() => {
    return {
      isMobileMenuOpen,
      toggleMobileMenu,
    };
  }, [isMobileMenuOpen]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
