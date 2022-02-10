import React, {useEffect, useState} from 'react';
import {Grid} from "../components/Layout/Grid";
import {Card, TinyCard} from "../components/UI/Cards";
import {LargeLabel, MediumLabel} from "../components/UI/Labels";
import {Link} from "react-router-dom";
import {categoriesUrl} from "../Constants";
import {useFetch} from "../hooks/useFetch";
import {Sppiner} from "../components/UI/Spinner";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [, , sendRequest] = useFetch();
    useEffect(() => {
        const getData = async () => {
            const data = await sendRequest({url: categoriesUrl});
            setCategories(data);
        }
        getData().then();
    }, [sendRequest])

    let categories1;
    let categories2;

    if (categories <= 0) {
        categories1 = <Sppiner> &lt; Loading... &gt; </Sppiner>
    } else {
        categories1 = categories[0].map((category) =>
            <Link to={category.name} key={category.id}>
                <Card image={category.image}>
                    <TinyCard>
                        <LargeLabel>{category.name}</LargeLabel>
                        <MediumLabel>{category.text}</MediumLabel>
                    </TinyCard>
                </Card>
            </Link>);
    }

    if (categories <= 0) {
        categories2 = <Sppiner> please wait </Sppiner>
    } else {
        categories2 = categories[1].map((category) =>
            <Link to={category.name} key={category.id}>
                <Card image={category.image}>
                    <TinyCard>
                        <LargeLabel>{category.name}</LargeLabel>
                        <MediumLabel>{category.text}</MediumLabel>
                    </TinyCard>
                </Card>
            </Link>);
    }

    return (
        <>
            <Grid size={350} gap={10} rows={"auto"}>
                {categories1}
            </Grid>
            <Grid size={350} gap={10} rows={"auto"}>
                {categories2}
            </Grid>
        </>
    );
};

export default Home;
