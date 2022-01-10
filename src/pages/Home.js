import React from 'react';
import {Grid} from "../components/Layout/Grid";
import {Card, TinyCard} from "../components/UI/Cards";
import {LargeLabel, MediumLabel} from "../components/UI/Labels";
import {Link} from "react-router-dom";
import {CATEGORY1, CATEGORY2} from "../Constants";

const Home = () => {
    const Categories1 = CATEGORY1.map((category) =>
        <Link to={category.name} key={category.id}>
            <Card image={category.image}>
                <TinyCard>
                    <LargeLabel>{category.name}</LargeLabel>
                    <MediumLabel>{category.text}</MediumLabel>
                </TinyCard>
            </Card>
        </Link>);
    const Categories2 = CATEGORY2.map((category) =>
        <Link to={category.name} key={category.id}>
            <Card image={category.image}>
                <TinyCard>
                    <LargeLabel>{category.name}</LargeLabel>
                    <MediumLabel>{category.text}</MediumLabel>
                </TinyCard>
            </Card>
        </Link>);
    return (
        <>
            <Grid size={350} gap={10} rows={"auto"}>
                {Categories1}
            </Grid>
            <Grid size={350} gap={10} rows={"auto"}>
                {Categories2}
            </Grid>
        </>

    );
};

export default Home;
