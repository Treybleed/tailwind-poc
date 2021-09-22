import React, { Fragment} from "react";
import SlickSlider from "../components/hero-slider";
import Grid from "../components/layout/grid";
import GridColumn from "../components/layout/grid-column";

const BagelBear = () => { 
    return ( 
        <Fragment>
            <header className="border-b-2 border-black flex flex-row justify-between items-center">
                <a href="/" rel="index">
                    <img alt="Bagel Bear Logo" src="https://via.placeholder.com/60" />
                </a>
            </header>
            <div className="px-6 py-12 bg-yellow-400 flex flex-col align-center justify-center text-center">
                <h1 className="text-base md:text-2xl tracking-wide font-displayBold uppercase">Welcome to Bagel Bear Co.</h1>
                <small className="mb-3">(we make bagels.)</small>
                <a href="#" className="border-black border-2 self-center px-4 py-2">Read More</a>
            </div>
            <SlickSlider />
            <main>
                <Grid colCount="3">
                    <GridColumn colSpan="1">
                        <h1>hello</h1>
                    </GridColumn>
                    <GridColumn colSpan="2">
                        <Grid colCount="4">

                        </Grid>
                    </GridColumn>
                </Grid>
            </main>
        </Fragment>
    )
}

export default BagelBear;