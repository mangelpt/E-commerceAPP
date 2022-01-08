import React from 'react';
import {Grid} from "../components/Layout/Grid";
import {Card, TinyCard} from "../components/UI/Cards";
import {LargeLabel, MediumLabel} from "../components/UI/Labels";


const Home = () => {
    return (
        <>
            <Grid size={350} gap={10} rows={"auto"}>
                <Card image='https://i.ibb.co/cvpntL1/hats.png' >
                    <TinyCard>
                        <LargeLabel>HATS</LargeLabel>
                        <MediumLabel>shop now</MediumLabel>
                    </TinyCard>
                </Card>
                <Card image='https://i.ibb.co/px2tCc3/jackets.png'>
                    <TinyCard>
                        <LargeLabel>JACKETS</LargeLabel>
                        <MediumLabel>shop now</MediumLabel>
                    </TinyCard>
                </Card>
                <Card image='https://i.ibb.co/0jqHpnp/sneakers.png'>
                    <TinyCard>
                        <LargeLabel>SNEAKERS</LargeLabel>
                        <MediumLabel>shop now</MediumLabel>
                    </TinyCard>
                </Card>
            </Grid>
            <Grid size={350} gap={10} rows={"auto"}>
                <Card image='https://i.ibb.co/GCCdy8t/womens.png' height={260} >
                    <TinyCard>
                        <LargeLabel>womens</LargeLabel>
                        <MediumLabel>shop now</MediumLabel>
                    </TinyCard>
                </Card>
                <Card image='https://i.ibb.co/R70vBrQ/men.png' height={260}>
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
