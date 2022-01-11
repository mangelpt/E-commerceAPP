import {SHOP_DATA} from "../../Constants";
import CardItem from "../../components/Layout/ItemsCard";
import CategoryLabel from "../../components/Layout/CategoryLabel";
import {Grid} from "../../components/Layout/Grid";
import React from "react";

const Offers = () => {
    const items = SHOP_DATA[5].items.map((item) =>
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

export default Offers;
