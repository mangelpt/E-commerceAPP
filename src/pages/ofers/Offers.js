import CardItem from "../../components/Layout/CardItem";
import CategoryLabel from "../../components/Layout/CategoryLabel";
import {Grid} from "../../components/Layout/Grid";
import React from "react";
import {useSelector} from "react-redux";

const Offers = () => {
    const {items} = useSelector((state) => state.productsSlice);
    const offerItems = items[5].items.map((item) =>
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
                {offerItems}
            </Grid>
        </>

    );
};

export default Offers;
