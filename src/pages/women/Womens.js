import React from 'react';
import CategoryLabel from "../../components/Layout/CategoryLabel";
import {SHOP_DATA} from "../../Constants";
import CardItem from "../../components/Layout/ItemsCard";
import {Grid} from "../../components/Layout/Grid";

const Women = () => {
    const items = SHOP_DATA[3].items.map((item) =>
        <CardItem
            key={item.id}
            image={item.imageUrl}
            price={item.price}
            details={item.name}/>
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
