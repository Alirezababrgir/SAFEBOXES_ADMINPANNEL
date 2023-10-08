import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import Typed from 'react-typed';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Part1 } from "../../particels/particels";

const Homepage = () => {


    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (

        <>
            <Box sx={{ p: 2 }}>
                <Particles id="tsparticles" options={Part1} init={particlesInit} loaded={particlesLoaded} />
                <Typography sx={{ color: "#2196f3" }}>صفحه اول</Typography>
                <Divider variant="middle" sx={{ mt: 2, mb: 4 }} color={blue[500]} />
            </Box>
            <Box sx={{ backgroundColor: "silver", height: "55%", width: "90%", borderRadius: "0.5rem", margin: " 0 auto", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <FingerprintIcon color={"primary"} sx={{ height: "100px", width: "100px", mb: 4 }} />
                <Typed
                    strings={[':) سلام من  عیرضا ببرگیر هستم']}
                    typeSpeed={40}
                />
                <br />
                <Typed
                    strings={[
                        ' توسعه دهنده فول استک وب ',
                        ' توسعه دهنده قراردادهای هوشمند ',
                        '   و عاشق لینوکس هستم']}
                    startDelay={3000}
                    showCursor={false}
                    typeSpeed={50}
                    backSpeed={50}
                    loop >
                </Typed>
            </Box>
        </>


    )
}
export default Homepage;