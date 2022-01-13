import React from 'react';
import CheckoutLabel from "../components/Layout/CheckoutLabel";
import CheckoutCard from "../components/Layout/CheckoutCard";

const Checkout = () => {
    return (
        <>
           <CheckoutLabel/>
            <CheckoutCard name={"test"} price={200} quantity={12} image='https://picsum.photos/200/300'/>
            <CheckoutCard name={"test"} price={200} quantity={12} image='https://picsum.photos/200/300'/>
            <CheckoutCard name={"test"} price={200} quantity={12} image='https://picsum.photos/200/300'/>
        </>
    );
};

export default Checkout;
