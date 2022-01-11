import React from 'react';
import CategoryLabel from "../../components/Layout/CategoryLabel";
import {SHOP_DATA} from "../../Constants";
import CardItem from "../../components/Layout/ItemsCard";
import {Grid} from "../../components/Layout/Grid";

const Jackets = () => {
    const items = SHOP_DATA[2].items.map((item) =>
        <CardItem
            id={item.id}
            key={item.id}
            image={item.imageUrl}
            price={item.price}
            name={item.name}
            category="jackets"
        />

    )
    return (
        <>
            <CategoryLabel categoryName={"JACKETS"}/>
            <Grid size={250} gap={10} rows={"auto"}>
                {items}
            </Grid>
        </>

    );
};

export default Jackets;
