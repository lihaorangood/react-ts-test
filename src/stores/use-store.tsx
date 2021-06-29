import React from 'react';
import TodoStore from "./todo";
export const storesContext = React.createContext({
    TodoStore: new TodoStore(),
});
export const useStores = () => React.useContext(storesContext);
