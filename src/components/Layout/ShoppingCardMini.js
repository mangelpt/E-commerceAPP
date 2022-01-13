import React from 'react';
import {MiniCartContainer} from "../UI/Containers";
import {Card} from "../UI/Cards";
import {GenericLabel, SmallLabel} from "../UI/Labels";

const ShoppingCardMini = ({image, quantity, price, name}) => {
    return (
        <MiniCartContainer width='30%'>
            <Card image={image} height={80} width={20}/>
            <GenericLabel>
                <SmallLabel>{name}</SmallLabel>
                <SmallLabel>{quantity}x{price}</SmallLabel>
            </GenericLabel>
        </MiniCartContainer>
    );
};

export default ShoppingCardMini;
