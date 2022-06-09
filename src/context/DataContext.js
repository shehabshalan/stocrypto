/* eslint-disable */
import { createContext, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase-config";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const userCoinsCollectionRef = collection(db, "userCoins");
  // get user from local storage

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userid")) || null
  );
  const q = query(userCoinsCollectionRef, where("userId", "==", user));

  const [coins, setCoins] = useState(null);
  const [totalSpent, setTotalSpent] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [pricePerAsset, setPricePerAsset] = useState(0);
  const [assetName, setAssetName] = useState("");
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [assetKey, setAssetKey] = useState("");

  useEffect(() => {
    try {
      const unsub = onSnapshot(q, (snapshot) => {
        let ucoins = [];
        snapshot.forEach((doc) => {
          ucoins.push({ ...doc.data(), id: doc.id });
        });
        setUserData(ucoins);
        console.log(ucoins);
      });
      return () => unsub();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setTotalSpent((quantity * pricePerAsset).toFixed(2));
  }, [quantity, pricePerAsset]);

  // gets all coins for add asset function
  const GET_COINS_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    fetch(GET_COINS_URL)
      .then((res) => res.json())
      .then((data) => {
        setCoins(
          data.map((coin) => ({
            label: coin.name,
            price: coin.current_price,
            key: coin.id,
          }))
        );
      });

    //  eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUserData = {
      asset_name: assetName,
      asset_quantity: parseFloat(quantity),
      purchase_price_per_asset: pricePerAsset,
      asset_value: parseFloat(totalSpent),
      asset_key: assetKey,
      profit_loss: parseFloat(0),
      userId: auth.currentUser.uid,
    };

    setAddLoading(true);
    try {
      await addDoc(userCoinsCollectionRef, newUserData);
      setTotalSpent(0);
      setQuantity(0);
      setPricePerAsset(0);
      setOpen(false);
      setAddLoading(false);
      setSuccess(true);
    } catch (err) {
      console.log(err.message);
      setAddLoading(false);
      setError(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      const coinDoc = doc(db, "userCoins", id);
      await deleteDoc(coinDoc);
      setSuccess(true);
    } catch (err) {
      console.log(err.message);
      setError(true);
    }
  };

  return (
    <DataContext.Provider
      value={{
        coins,
        totalSpent,
        setTotalSpent,
        quantity,
        setQuantity,
        pricePerAsset,
        setPricePerAsset,
        assetKey,
        setAssetKey,
        setAssetName,
        handleSubmit,
        userData,
        open,
        setOpen,
        addLoading,
        success,
        error,
        setError,
        setSuccess,
        handleDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
