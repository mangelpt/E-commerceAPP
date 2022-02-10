import React from 'react';
import CategoryLabel from "../../components/Layout/CategoryLabel";
import CardItem from "../../components/Layout/CardItem";
import {Grid} from "../../components/Layout/Grid";
import {useSelector} from "react-redux";

const Mens = () => {
    const {items} = useSelector((state) => state.productsSlice);
    const mensItems = items[4].items.map((item) =>
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
                {mensItems}
            </Grid>
        </>

    );
};

export default Mens;
