import React from "react";
import { CarouselOrganism, NavbarOrganism } from "../../components";

const Home = ()=> {
    return(
        <>
            <NavbarOrganism/>
            <CarouselOrganism/>
            <h1 className="container">Beranda</h1>
        </>
    );
}

export default Home;