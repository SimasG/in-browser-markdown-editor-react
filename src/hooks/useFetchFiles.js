import { db } from "../firebase-config";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

// CRUD -> R
function useFetchFiles() {
  const [files] = useCollectionData(collection(db, "files"));

  return files;
}

export default useFetchFiles;
