import React, {useState} from 'react';
import {CollapsibleContainer, CollapsibleContentContainer} from "../UI/Containers";
import {IconCart} from "../../assets/Icons";
import {GenericLabel} from "../UI/Labels";
import ShoppingCardMini from "./ShoppingCardMini";
import {TransparentButton} from "../UI/Buttons";
import {Link} from "react-router-dom";


const CollapsedComponent = ({button, children}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <>
            <CollapsibleContainer onClick={() => setIsCollapsed(!isCollapsed)}>
                <IconCart/>
                <GenericLabel>10</GenericLabel>
            </CollapsibleContainer>
            <CollapsibleContentContainer collapsed={isCollapsed}>
                <ShoppingCardMini
                    price={20}
                    name={"test"}
                    image="https://picsum.photos/200/300"
                    quantity={20}
                />
                <ShoppingCardMini
                    price={20}
                    name={"test"}
                    image="https://picsum.photos/200/300"
                    quantity={20}
                />
                <ShoppingCardMini
                    price={20}
                    name={"test"}
                    image="https://picsum.photos/200/300"
                    quantity={20}
                />

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
