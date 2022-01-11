import {SHOP_DATA} from "../../Constants";
import CardItem from "../../components/Layout/ItemsCard";
import CategoryLabel from "../../components/Layout/CategoryLabel";
import {Grid} from "../../components/Layout/Grid";
import React from "react";

const Offers = () => {
    const items = SHOP_DATA[5].items.map((item) =>
        <CardItem
            id={item.id}
            key={item.id}
            image={item.imageUrl}
            price={item.price}
            name={item.name}
            category="offers"
        />
    )
    return (
        <>
            <CategoryLabel categoryName={"OFFERS"}/>
            <Grid size={250} gap={10} rows={"auto"}>
                {items}
            </Grid>
        </>

    );
};

export default Offers;
