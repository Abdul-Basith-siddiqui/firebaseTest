import React from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

const FileUpload = () => {
  const [file, setFile] = React.useState(null);

  const uploadFile = async () => {
    if (!file) return;
    const fileRef = ref(storage, `productPics/${file.name}`);
    try {
      await uploadBytes(fileRef, file);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>upload file</button>
    </div>
  );
};

export default FileUpload;
