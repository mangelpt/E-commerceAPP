import React from 'react';
import {MiniCartContainer} from "../UI/Containers";
import {Card} from "../UI/Cards";
import {GenericLabel} from "../UI/Labels";
import {ArrowLeft, ArrowRight, CloseButton} from "../../assets/Icons";

const CheckoutCard = ({image, name, quantity, price}) => {
    return (
        <MiniCartContainer>
            <Card image={image} height={150} width={20}/>
            <GenericLabel>{name}</GenericLabel>
            <GenericLabel>
                <GenericLabel>
                    <ArrowLeft/>
                </GenericLabel>
                {quantity}
                <GenericLabel>
                    <ArrowRight/>
                </GenericLabel>
            </GenericLabel>
            <GenericLabel>${price}</GenericLabel>
            <GenericLabel>
                <CloseButton/>
            </GenericLabel>
        </MiniCartContainer>
    );
};

export default CheckoutCard;
