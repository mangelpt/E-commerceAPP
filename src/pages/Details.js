import React, {Fragment} from 'react';
import {Grid} from "../components/Layout/Grid";
import {Card, TinyCard} from "../components/UI/Cards";
import {TransparentButton} from "../components/UI/Buttons";
import {SmallLabel} from "../components/UI/Labels";
import CategoryLabel from "../components/Layout/CategoryLabel";
import {useParams} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import {SHOP_DATA} from "../Constants";
import {ItemCardContainer} from "../components/UI/Containers";

const Details = () => {
    let {itemId} = useParams();
    let location = useLocation();
    const path = location.pathname.trim().replace(/[/\\\d]/gi, "");
    const [FilteredItems] = SHOP_DATA.filter((item) => item.routeName === path);
    const item = FilteredItems.items.filter((item) => item.id === +itemId);
    const cards = item.map((i) => <Fragment key={i.id}>
        <Card image={i.imageUrl} height="500">
        </Card>
        <Card height="200">
            <ItemCardContainer>
                <SmallLabel>price : $/ {i.price}</SmallLabel>
                <SmallLabel>name : {i.name}</SmallLabel>
                <SmallLabel>this is the best </SmallLabel>
            </ItemCardContainer>
            <TinyCard color="transparent">
                <TransparentButton>
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
