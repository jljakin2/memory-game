import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function LoadingStateProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  function startLoading() {
    setIsLoading(true);
  }

  function endLoading() {
    setIsLoading(false);
  }

  return (
    <LocalStateProvider value={{ isLoading, startLoading, endLoading }}>
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useLoading() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { LoadingStateProvider, useLoading };
