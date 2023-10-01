import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/action-creators";

const Cart = () => {
  const cartSelector = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartSelector);
  useEffect(() => {}, []);
  return (
    <div className="mt-[100px] w-[1200px] m-auto">
      <div></div>
      <div></div>
    </div>
  );
};

export default Cart;
