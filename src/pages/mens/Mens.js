import React from 'react';
import CategoryLabel from "../../components/Layout/CategoryLabel";
import {SHOP_DATA} from "../../Constants";
import CardItem from "../../components/Layout/ItemsCard";
import {Grid} from "../../components/Layout/Grid";

const Mens = () => {
    const items = SHOP_DATA[4].items.map((item) =>
        <CardItem
            id={item.id}
            key={item.id}
            image={item.imageUrl}
            price={item.price}
            name={item.name}
            category="mens"
        />
    )
    return (
        <>
            <CategoryLabel categoryName={"MENS"}/>
            <Grid size={250} gap={10} rows={"auto"}>
                {items}
            </Grid>
        </>

    );
};

export default Mens;
