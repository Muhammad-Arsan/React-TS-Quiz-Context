import React, { useState, createContext } from "react";

export type selectCategory = {
  amount: number | null;
  category: string | null;
  difficulty: string | null;
};

type amountContextType = {
  amount: selectCategory | null;
  setAmount: React.Dispatch<React.SetStateAction<selectCategory | null>>;
};

type categoryContextType = {
  category: selectCategory | null;
  setCategory: React.Dispatch<React.SetStateAction<selectCategory | null>>;
};

type difficultyContextType = {
  difficulty: selectCategory | null;
  setDifficulty: React.Dispatch<React.SetStateAction<selectCategory | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext(
  {} as amountContextType | categoryContextType | difficultyContextType
);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [amount, setAmount] = useState<selectCategory | null>(null);
  const [category, setCategory] = useState<selectCategory | null>(null);
  const [difficulty, setDifficulty] = useState<selectCategory | null>(null);
  return (
    <UserContext.Provider
      value={{
        amount,
        setAmount,
        category,
        setCategory,
        difficulty,
        setDifficulty,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
