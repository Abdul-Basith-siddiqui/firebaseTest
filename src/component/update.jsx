import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Update = ({ getData, eachData }) => {
  const [updatedDetails, setUpdatedDetails] = useState("");
  const updateProduct = async (id) => {
    const updateID = doc(db, "items", id);
    try {
      if (updatedDetails === "") {
        return;
      }
      await updateDoc(updateID, { Name: updatedDetails });
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <input onChange={(e) => setUpdatedDetails(e.target.value)} />
      <button type="submit" onClick={() => updateProduct(eachData.id)}>
        update Details
      </button>
    </div>
  );
};

export default Update;
