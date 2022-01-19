import React from 'react';
import {Card} from "../UI/Cards";
import {ItemCardContainer, ItemDetailsContainer} from "../UI/Containers";
import {GenericLabel, SmallLabel} from "../UI/Labels";
import {TransparentButton} from "../UI/Buttons";
import {useNavigate} from "react-router-dom";

const CardItem = ({id, name, price, image, height}) => {
    let navigate = useNavigate()
    const detailsHandler = () => {
        navigate(`${id}`)
    }
    return (
        <ItemCardContainer onClick={detailsHandler}>
            <Card image={image} height={height}>
                <TransparentButton>
                    <SmallLabel>
                        see details
                    </SmallLabel>
                </TransparentButton>
            </Card>
            <ItemDetailsContainer>
                <SmallLabel>{name}</SmallLabel>
                <GenericLabel> ${price}</GenericLabel>
            </ItemDetailsContainer>
        </ItemCardContainer>
    );
};

export default CardItem;
