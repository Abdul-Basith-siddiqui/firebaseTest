import React from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

const Delete = ({ eachData, getData }) => {
  const deleteProduct = async (id) => {
    const deleteID = doc(db, "items", id);
    try {
      await deleteDoc(deleteID);
      getData();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <button onClick={() => deleteProduct(eachData.id)}>Delete product</button>
    </div>
  );
};

export default Delete;
