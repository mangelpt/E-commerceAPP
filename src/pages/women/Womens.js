import React from 'react';
import CategoryLabel from "../../components/Layout/CategoryLabel";
import CardItem from "../../components/Layout/CardItem";
import {Grid} from "../../components/Layout/Grid";
import {useSelector} from "react-redux";
import {Sppiner} from "../../components/UI/Spinner";

const Women = () => {
    const {items} = useSelector((state) => state.productsSlice);

    let womenItems;
    if (items.length <= 0) {
        womenItems = <Sppiner>loading...</Sppiner>
    } else {
        womenItems = items[3].items.map((item) =>
            <CardItem
                id={item.id}
                key={item.id}
                image={item.imageUrl}
                price={item.price}
                name={item.name}
                category="womens"
            />
        )
    }

    return (
        <>
            <CategoryLabel categoryName={"WOMENS"}/>
            <Grid size={250} gap={10} rows={"auto"}>
                {womenItems}
            </Grid>
        </>

    );
};

export default Women;
