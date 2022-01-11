import React from 'react';
import {Card} from "../UI/Cards";
import {ItemCardContainer, ItemDetailsContainer} from "../UI/Containers";
import {GenericLabel, SmallLabel} from "../UI/Labels";

const CardItem = ({details, price, image, height}) => {
    return (
        <ItemCardContainer>
            <Card image={image} height={height}/>
            <ItemDetailsContainer>
                <SmallLabel>{details}</SmallLabel>
                <GenericLabel> ${price}</GenericLabel>
            </ItemDetailsContainer>
        </ItemCardContainer>
    );
};

export default CardItem;
