import React from 'react';
import {MiniCartContainer} from "../UI/Containers";
import {Card} from "../UI/Cards";
import {GenericLabel} from "../UI/Labels";

const CheckoutCard = ({image, name, quantity, price}) => {
    return (
        <MiniCartContainer>
            <Card image={image} height={150} width={20}/>
            <GenericLabel>{name}</GenericLabel>
            <GenericLabel>{quantity}</GenericLabel>
            <GenericLabel>${price}</GenericLabel>
            <GenericLabel>x</GenericLabel>
        </MiniCartContainer>
    );
};

export default CheckoutCard;
