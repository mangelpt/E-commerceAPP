import React from 'react';
import {CollapsibleContainer, CollapsibleContentContainer} from "../UI/Containers";
import {IconCart} from "../../assets/Icons";
import {GenericLabel} from "../UI/Labels";
import ShoppingCardMini from "./ShoppingCardMini";
import {TransparentButton} from "../UI/Buttons";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {toggleCart} from "../../store/CartUIslice";

const CollapsedComponent = ({button, children}) => {
    const {items,totalQuantity} = useSelector((state) => state.CartSlice);
    console.log(totalQuantity)
    const dispatch = useDispatch();
    const toggleState = useSelector((state) => state.CartUiSlice.cartIsVisible);
    const cartItems = items.map((item) =>
        <ShoppingCardMini
            key={item.id}
            price={item.price}
            name={item.name}
            image={item.imageUrl}
            quantity={item.quantity}
        />
    );
    return (
        <>
            <CollapsibleContainer onClick={() => dispatch(toggleCart())}>
                <IconCart/>
                <GenericLabel color="#000">{totalQuantity}</GenericLabel>
            </CollapsibleContainer>
            <CollapsibleContentContainer collapsed={toggleState}>
                {cartItems}
                <Link to="checkout">
                    <TransparentButton>
                        go to checkout
                    </TransparentButton>
                </Link>

            </CollapsibleContentContainer>
        </>
    );
};

export default CollapsedComponent;
