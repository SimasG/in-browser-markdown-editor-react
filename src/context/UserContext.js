import { createContext } from "react";
import useGetUsers from "../hooks/useGetUsers";
// import { auth } from "../firebase-config";
// import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const user = useGetUsers();

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
