import React from 'react';
import CategoryLabel from "../../components/Layout/CategoryLabel";
import CardItem from "../../components/Layout/CardItem";
import {Grid} from "../../components/Layout/Grid";
import {useSelector} from "react-redux";

const Sneakers = () => {
    const {items} = useSelector((state) => state.productsSlice);
    const SneakersItems = items[1].items.map((item) =>
        <CardItem
            id={item.id}
            key={item.id}
            image={item.imageUrl}
            price={item.price}
            name={item.name}
            category="sneakers"
        />
    )
    return (
        <>
            <CategoryLabel categoryName={"SNEAKERS"}/>
            <Grid size={250} gap={10} rows={"auto"}>
                {SneakersItems}
            </Grid>
        </>

    );
};

export default Sneakers;
