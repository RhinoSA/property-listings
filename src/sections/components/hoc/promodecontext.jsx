import React from "react";

export const ProModeContext = React.createContext({
  heading: "Todo List",
  todoItems: [
    { id: 1, action: "Buy flowers", done: false },
    { id: 2, action: "Clean the house", done: true },
    { id: 3, action: "Mow the lawn", done: false },
    { id: 4, action: "Wash the car", done: false }
  ],
  proMode: false,
  toggleProMode: () => {}
});
