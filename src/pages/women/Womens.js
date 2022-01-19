import React from 'react';
import CategoryLabel from "../../components/Layout/CategoryLabel";
import {SHOP_DATA} from "../../Constants";
import CardItem from "../../components/Layout/CardItem";
import {Grid} from "../../components/Layout/Grid";

const Women = () => {
    const items = SHOP_DATA[3].items.map((item) =>
        <CardItem
            id={item.id}
            key={item.id}
            image={item.imageUrl}
            price={item.price}
            name={item.name}
            category="womens"
        />
    )
    return (
        <>
            <CategoryLabel categoryName={"WOMENS"}/>
            <Grid size={250} gap={10} rows={"auto"}>
                {items}
            </Grid>
        </>

    );
};

export default Women;
