import React from 'react';
import {CategoryContainer} from "../UI/Containers";
import {GenericLabel} from "../UI/Labels";

const CheckoutLabel = () => {
    return (
        <CategoryContainer>
            <GenericLabel>Product</GenericLabel>
            <GenericLabel>Description</GenericLabel>
            <GenericLabel>quantity</GenericLabel>
            <GenericLabel>Price</GenericLabel>
            <GenericLabel>Remove</GenericLabel>
        </CategoryContainer>
    );
};

export default CheckoutLabel;
