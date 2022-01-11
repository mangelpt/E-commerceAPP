import React from 'react';
import CategoryLabel from "../../components/Layout/CategoryLabel";
import {Grid} from "../../components/Layout/Grid";
import {SHOP_DATA} from "../../Constants";
import CardItem from "../../components/Layout/ItemsCard";

const Hats = () => {
    const items = SHOP_DATA[0].items.map((item) =>
        <CardItem
            key={item.id}
            image={item.imageUrl}
            price={item.price}
            details={item.name}/>
    )
    return (
        <>
            <CategoryLabel categoryName={"HATS"}/>
            <Grid size={250} gap={10} rows={"auto"}>
                {items}
            </Grid>
        </>

    );
};

export default Hats;
