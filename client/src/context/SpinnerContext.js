"use client";
import { createContext, useContext, useReducer } from "react";

export const SpinnerContext = createContext();

export const SpinnerContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    isLoading: false,
  };

  const spinReducer = (state, action) => {
    switch (action.type) {
      case "LOAD":
        return {
          isLoading: true,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(spinReducer, INITIAL_STATE);

  return (
    <SpinnerContext.Provider value={{ data: state, dispatch }}>
      {children}
    </SpinnerContext.Provider>
  );
};
