// ErrorContext.js
import { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const [blogLoading, setBlogLoading] = useState(true);
  const toggleErrorTrue = () => {
    setIsError(false);
  };

  const toggleBlogLoadingTrue = () => {
    setBlogLoading(true);
  };

  const toggleBlogLoadingFalse = () => {
    setBlogLoading(false);
  };

  const toggleError = () => {
    // Toggle the visibility of the block
    setIsError(true);
  };

  return (
    <ErrorContext.Provider
      value={{
        isError,
        blogLoading,
        toggleError,
        toggleErrorTrue,
        toggleBlogLoadingTrue,
        toggleBlogLoadingFalse,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  return useContext(ErrorContext);
};
