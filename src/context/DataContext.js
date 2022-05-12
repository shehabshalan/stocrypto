/* eslint-disable */
import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const dummyData = [
    {
      asset_name: "Bitcoin",
      asset_quantity: 0.03,
      asset_price: 28903,
      asset_value: 1400,
      profit_loss: 120,
    },
    {
      asset_name: "Ethereum",
      asset_quantity: 2,
      asset_price: 2300,
      asset_value: 1400,
      profit_loss: 120,
    },
    {
      asset_name: "Litecoin",
      asset_quantity: 120,
      asset_price: 40,
      asset_value: 1400,
      profit_loss: 120,
    },
  ];
  const [coins, setCoins] = useState(null);
  const [totalSpent, setTotalSpent] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [pricePerAsset, setPricePerAsset] = useState(0);
  const [assetName, setAssetName] = useState("");
  const [userData, setUserData] = useState(dummyData);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTotalSpent((quantity * pricePerAsset).toFixed(2));
  }, [quantity, pricePerAsset]);
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCoins(
          data.map((coin) => ({
            label: coin.name,
            price: coin.current_price,
          }))
        );
        console.log(coins);
      });
    //  eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUserData = {
      asset_name: assetName,
      asset_quantity: quantity,
      asset_price: pricePerAsset,
      asset_value: totalSpent,
      profit_loss: (totalSpent - pricePerAsset * quantity).toFixed(2),
    };
    setUserData([...userData, newUserData]);
    console.log(userData);

    setOpen(false);
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
        setAssetName,
        handleSubmit,
        userData,
        open,
        setOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
