"use client";

import { Button } from "@/components/ui/button";
import { Rating } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import { useParams } from "next/navigation";
import ProductContext from "@/contexts/DbProdcutsContext";

import { useCart } from "@/contexts/CartContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Recomended from "@/components/Recomended";

export default function ItemInfo() {
  const productId = useParams<{ productId: string }>();

  useEffect(() => {
    const parsedParam = parseInt(productId.productId);
    if (parsedParam < 1 || parsedParam > 13) {
      window.location.href = "/";
    }
  });

  const { products } = useContext(ProductContext);

  const product = products.find(
    (product) => product.id === productId.productId
  );
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);
  const [Con, setCon] = useState<number>(1);

  if (!product) {
    return console.log("product not found");
  }

  const AddCon = () => {
    if (Con < 10) {
      setCon(Con + 1);
    }
  };
  const RmCon = () => {
    if (Con > 1) {
      setCon(Con - 1);
    } else {
      setCon(1);
    }
  };

  const handleClick = async () => {
    const userId = localStorage.getItem("userName");
    const token = localStorage.getItem("token");
    if (!userId || !token) {
      return alert("Please Login First");
    }

    addToCart(userId, product, Con, token);

    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Item Added To Cart
        </Alert>
      </Snackbar>

      <div className="flex flex-wrap items-center justify-center my-[3vh] gap-4 animate-fad">
        <img
          src={product.backgroundLink}
          className="w-[40rem] h-[40rem]"
          alt="Sneaker"
        ></img>

        {/* -------------------------------------------------------------------------------------------------------------          */}

        <div className="w-[40rem] h-[40rem] flex flex-col items-start justify-around  p-[4vh]">
          <Rating name="read-only" value={5} readOnly />
          <p className="text-5xl font-bold">{product.name}</p>
          <p className="font-bold text-xl text-green-600">
            ${product.price}{" "}
            <span className="text-[13px] text-gray-500 line-through">
              {" "}
              ${product.price * 2}{" "}
            </span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center font-bold justify-around w-[150px] h-[5vh] border-black border">
              <button onClick={RmCon}>-</button>
              <div>{Con}</div>
              <button onClick={AddCon}>+</button>
            </div>
            <Button
              className="w-[150px] h-[5vh] rounded-none"
              onClick={handleClick}
            >
              ADD TO CART
            </Button>
          </div>
          <div className="flex flex-col items-start text-[12px] justify-around">
            <p className="font-bold cursor-pointer">
              ASK A QUESTION ABOUT THIS PRODUCT
            </p>
            <p>MANUFACTURER : {product.manufacturer}</p>
            <p>QUANTITY : {product.currentStock}</p>
          </div>

          <p>{product.description}</p>
          <h1 className="font-bold text-2xl">REVIEWS :</h1>
          <Divider className="w-full" />
          <p>There are yet no reviews for this product.</p>
        </div>
        {/* -------------------------------------------------------------------------------------------------------------          */}

        <Recomended />
      </div>
    </div>
  );
}
