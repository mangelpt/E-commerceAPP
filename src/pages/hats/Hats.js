import React from 'react';
import CategoryLabel from "../../components/Layout/CategoryLabel";
import {Grid} from "../../components/Layout/Grid";
import CardItem from "../../components/Layout/CardItem";
import {useSelector} from "react-redux";
import {Sppiner} from "../../components/UI/Spinner";

const Hats = () => {
    const {items} = useSelector((state) => state.productsSlice);
    let hatItems;
    if (items.length <= 0) {
        hatItems = <Sppiner>loading..</Sppiner>
    } else {
        hatItems = items[0].items.map((item) =>
            <CardItem
                id={item.id}
                key={item.id}
                image={item.imageUrl}
                price={item.price}
                name={item.name}
                category="hats"
            />)
    }

    return (
        <>
            <CategoryLabel categoryName={"HATS"}/>
            <Grid size={250} gap={10} rows={"auto"}>
                {hatItems}
            </Grid>
        </>

    );
};

export default Hats;
