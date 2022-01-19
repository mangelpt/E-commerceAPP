import React from 'react';
import CheckoutLabel from "../components/Layout/CheckoutLabel";
import CheckoutCard from "../components/Layout/CheckoutCard";
import {useSelector} from "react-redux";

const Checkout = () => {
    const {items} = useSelector((state) => state.CartSlice);
    const cartItems = items.map((item) =>
        <CheckoutCard key={item.id} {...item}/>
    );
    return (
        <>
            <CheckoutLabel/>
            {cartItems}
        </>
    );
};

export default Checkout;
