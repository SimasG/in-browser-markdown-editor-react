import { useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const useGetUsers = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    }
  });

  return user;
};

export default useGetUsers;
