import React from 'react';
import {Grid} from "../components/Layout/Grid";
import {Card, TinyCard} from "../components/UI/Cards";
import {LargeLabel, MediumLabel} from "../components/UI/Labels";
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <>
            <Grid size={350} gap={10} rows={"auto"}>
                <Link to="hats">
                    <Card image='https://i.ibb.co/cvpntL1/hats.png'>
                        <TinyCard>
                            <LargeLabel>HATS</LargeLabel>
                            <MediumLabel>shop now</MediumLabel>
                        </TinyCard>
                    </Card>
                </Link>
                <Link to="jackets">
                    <Card image='https://i.ibb.co/px2tCc3/jackets.png'>
                        <TinyCard>
                            <LargeLabel>JACKETS</LargeLabel>
                            <MediumLabel>shop now</MediumLabel>
                        </TinyCard>
                    </Card>
                </Link>

                <Link to="sneakers">
                    <Card image='https://i.ibb.co/0jqHpnp/sneakers.png'>
                        <TinyCard>
                            <LargeLabel>SNEAKERS</LargeLabel>
                            <MediumLabel>shop now</MediumLabel>
                        </TinyCard>
                    </Card>
                </Link>

            </Grid>
            <Grid size={350} gap={10} rows={"auto"}>
                <Link to="women">
                    <Card image='https://i.ibb.co/GCCdy8t/womens.png' height={260}>
                        <TinyCard>
                            <LargeLabel>womens</LargeLabel>
                            <MediumLabel>shop now</MediumLabel>
                        </TinyCard>
                    </Card>
                </Link>
                <Link to="mens">
                    <Card image='https://i.ibb.co/R70vBrQ/men.png' height={260}>
                        <TinyCard>
                            <LargeLabel>mens</LargeLabel>
                            <MediumLabel>shop now</MediumLabel>
                        </TinyCard>
                    </Card>
                </Link>

            </Grid>
        </>

    );
};

export default Home;
