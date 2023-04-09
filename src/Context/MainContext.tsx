import React from "react";

interface ContextState {
  isLoggedIn: boolean;
  username: string;
}

interface ContextProps {
  state: ContextState;
  updateIsLoggedIn: (isLoggedIn: boolean) => void;
  updateUsername: (username: string) => void;
}

// Create the context
const MainContext = React.createContext<ContextProps>({
  state: { isLoggedIn: false, username: "" },
  updateIsLoggedIn: () => {},
  updateUsername: () => {},
});

// Define the context provider component
function MainContextProvider(props: React.PropsWithChildren<{}>) {
  // Set the initial state for the context
  const [state, setState] = React.useState<ContextState>({
    isLoggedIn: false,
    username: "Miladin",
  });

  // Define the methods that can be used to update the context
  const updateIsLoggedIn = (isLoggedIn: boolean) => {
    setState((prevState) => ({ ...prevState, isLoggedIn }));
  };

  const updateUsername = (username: string) => {
    setState((prevState) => ({ ...prevState, username }));
  };

  // Return the provider with the context value set
  return (
    <MainContext.Provider
      value={{
        state,
        updateIsLoggedIn,
        updateUsername,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

export { MainContext, MainContextProvider };