import React from 'react';
import {MiniCartContainer} from "../UI/Containers";
import {Card} from "../UI/Cards";
import {GenericLabel} from "../UI/Labels";
import {ArrowLeft, ArrowRight, CloseButton} from "../../assets/Icons";
import {useDispatch} from "react-redux";
import {addItemToCart, removeItemToCart, removeDirectToCart} from "../../store/CartSlice";

const CheckoutCard = (props) => {
    const dispatch = useDispatch();
    return (
        <MiniCartContainer>
            <Card image={props.imageUrl} height={150} width={20}/>
            <GenericLabel>{props.name}</GenericLabel>
            <GenericLabel>
                <GenericLabel onClick={() => dispatch(removeItemToCart(props.id))}>
                    <ArrowLeft/>
                </GenericLabel>
                {props.quantity}
                <GenericLabel onClick={() => dispatch(addItemToCart(props))}>
                    <ArrowRight/>
                </GenericLabel>
            </GenericLabel>
            <GenericLabel>${props.totalPrice}</GenericLabel>
            <GenericLabel onClick={() => dispatch(removeDirectToCart(props.id))}>
                <CloseButton/>
            </GenericLabel>
        </MiniCartContainer>
    );
};

export default CheckoutCard;
