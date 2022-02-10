import React from 'react';
import CategoryLabel from "../../components/Layout/CategoryLabel";
import CardItem from "../../components/Layout/CardItem";
import {Grid} from "../../components/Layout/Grid";
import {useSelector} from "react-redux";

const Jackets = () => {
    const {items} = useSelector((state) => state.productsSlice);
    console.log(items)
    const jackets_items = items[2].items.map((item) =>
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
                {jackets_items}
            </Grid>
        </>

    );
};

export default Jackets;
