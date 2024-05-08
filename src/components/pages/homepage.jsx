import { Divider, Slide } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Part1 } from "../../layuot/particels";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Homecontent from "./Homecontent";

const Homepage = () => {


    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    const [load, setload] = useState(false);
    useEffect(() => {
        setload(true);      //Mount
        return () => {
            setload(false); //unMount
        }
    }, []);

    return (

        <div class="connectwalletbg">
            <Helmet>
                <title>PANNEL | INJECTBROKERLINKS</title>
            </Helmet>
            <Box sx={{ p: 3, height: "10vh" }}>
                <Particles id="tsparticles" options={Part1} init={particlesInit} loaded={particlesLoaded} />
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 1, "&::before,&::after": { borderColor: "black" } }}><Slide direction="down" in={load} style={{ transitionDelay: load ? '1000ms' : '0ms' }}><Typography >INJECT BROKER LINKS</Typography></Slide></Divider>
            </Box>
            <Box sx={{ height: "90vh"}}>
                <Homecontent />
            </Box >
        </div>
    )
}
export default Homepage;

