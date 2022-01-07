import React from 'react';
import {Grid} from "../components/Layout/Grid";
import {Card, TinyCard} from "../components/UI/Cards";
import {LargeLabel, MediumLabel} from "../components/UI/Labels";


const Home = () => {
    return (
        <>
            <Grid size={350} gap={10} rows={"auto"}>
                <Card>
                    <TinyCard>
                        <LargeLabel>HATS</LargeLabel>
                        <MediumLabel>shop now</MediumLabel>
                    </TinyCard>
                </Card>
                <Card>
                    <TinyCard>
                        <LargeLabel>JACKETS</LargeLabel>
                        <MediumLabel>shop now</MediumLabel>
                    </TinyCard>
                </Card>
                <Card>
                    <TinyCard>
                        <LargeLabel>SNEAKERS</LargeLabel>
                        <MediumLabel>shop now</MediumLabel>
                    </TinyCard>
                </Card>
            </Grid>
            <Grid size={350} gap={10} rows={"auto"}>
                <Card>
                    <TinyCard>
                        <LargeLabel>womens</LargeLabel>
                        <MediumLabel>shop now</MediumLabel>
                    </TinyCard>
                </Card>
                <Card>
                    <TinyCard>
                        <LargeLabel>mens</LargeLabel>
                        <MediumLabel>shop now</MediumLabel>
                    </TinyCard>
                </Card>
            </Grid>
        </>

    );
};

export default Home;
