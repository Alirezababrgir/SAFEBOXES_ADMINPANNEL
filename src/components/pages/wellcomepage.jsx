import { ArrowUpward } from "@mui/icons-material"
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Part1 } from "../../layuot/particels";

export const Wellcomepage = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
        <Particles id="tsparticles" options={Part1} init={particlesInit} loaded={particlesLoaded} />
            <div class="header-content">
                <ArrowUpward style={{marginTop:"25px",fontSize:"40px"}} />
                <p className="p"> Go To The Panel, First Authenticate By Pressing The ConnectWallet Button</p>
            </div>
            <div class="body-content">
                <h3>About This</h3>
                <p>This page is made only so that Safe Boxes creators can analyze Safe Boxes to improve the performance of the system and give more returns to you, the investors. <br/><br/> Good luck!</p>
            </div>
        </>
    )
}