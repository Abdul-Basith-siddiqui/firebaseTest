import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./component/Auth";
import { db } from "./config/firebase";
import { auth } from "./config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import Update from "./component/update";
import Delete from "./component/Delete";
import FileUpload from "./component/FileUpload";

function App() {
  //states
  const [Data, setData] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
  });
  const [avaliable, setAvaliable] = useState(true);
  //functions
  const productDetails = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const collectionName = collection(db, "items");
  console.log(Data);

  const getData = async () => {
    try {
      const data = await getDocs(collectionName);
      const requiredData = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

      setData(requiredData);
      console.log(requiredData);
      console.log(Data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(Data);

  const addProduct = async () => {
    try {
      await addDoc(collectionName, {
        Name: product.name,
        price: Number(product.price),
        Avaliable: avaliable,
        userId: auth?.currentUser?.uid,
      });
      getData();
    } catch (error) {
      console.error(error);
    }
    setProduct({
      name: "",
      price: 0,
    });
  };

  return (
    <div className="App">
      <Auth />
      <div>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={productDetails}
          placeholder="nameOfProduct"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={productDetails}
          placeholder="priceOfProduct"
        />

        <input
          type="checkbox"
          checked={avaliable}
          onChange={(e) => setAvaliable(e.target.checked)}
        />
        <span>product Avaliable ?</span>
        <button type="submit" onClick={addProduct}>
          add product
        </button>
      </div>

      <div> {product.price}</div>
      {Data.map((eachData, index) => {
        return (
          <div key={index}>
            <h1 style={{ color: eachData.Avaliable ? "green" : "red" }}>
              {eachData.Name}
            </h1>
            <h3>{eachData.price}</h3>
            <Delete eachData={eachData} getData={getData} />
            <Update eachData={eachData} getData={getData} />
            <FileUpload />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
