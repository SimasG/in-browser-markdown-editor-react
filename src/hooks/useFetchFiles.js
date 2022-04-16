import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

// CRUD -> R
function useFetchFiles(uid) {
  const [files, setFiles] = useState();

  useEffect(() => {
    if (!uid) return;
    const ref = collection(db, "users", uid, "files");
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push(doc.data());
      });
      setFiles(array);
    });

    return () => unsubscribe();
  }, [uid]);

  return files;
}
export default useFetchFiles;
