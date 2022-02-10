import React, {Fragment} from 'react';
import {Grid} from "../components/Layout/Grid";
import {Card, TinyCard} from "../components/UI/Cards";
import {TransparentButton} from "../components/UI/Buttons";
import {SmallLabel} from "../components/UI/Labels";
import CategoryLabel from "../components/Layout/CategoryLabel";
import {useParams} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import {ItemCardContainer} from "../components/UI/Containers";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../store/CartSlice";

const Details = () => {
    const {items} = useSelector((state) => state.productsSlice);
    const dispatch = useDispatch();
    let {itemId} = useParams();
    let location = useLocation();
    const path = location.pathname.trim().replace(/[/\\\d]/gi, "");

    const [FilteredItems] = items.filter((item) => item.routeName === path);
    const item = FilteredItems.items.filter((item) => item.id === +itemId);

    const addToCartHandler = () => {
        const [itemToAdd] = item;
        dispatch(addItemToCart(itemToAdd));
    }
    const cards = item.map((i) =>
        <Fragment key={i.id}>
            <Card image={i.imageUrl} height="500">
            </Card>
            <Card height="200">
                <ItemCardContainer>
                    <SmallLabel>price : $/ {i.price}</SmallLabel>
                    <SmallLabel>name : {i.name}</SmallLabel>
                    <SmallLabel>this is the best </SmallLabel>
                </ItemCardContainer>
                <TinyCard color="transparent">
                    <TransparentButton onClick={addToCartHandler}>
                        add to cart
                    </TransparentButton>
                </TinyCard>
            </Card>
        </Fragment>)
    return (
        <>
            <CategoryLabel categoryName={path}/>
            <Grid size={400} gap={10} rows={"auto"}>
                {cards}
            </Grid>
        </>
    );
};

export default Details;
