import { Box, Divider, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import MYtimeline from "./resoumetimeline"
import { Slide } from "@mui/material";
import { useState, useEffect } from "react";
const Resoume = () => {

    const [load, setload] = useState(false);
    useEffect(() => {
        setload(true);      //Mount
        return () => {
            setload(false); //unMount
        }
    }, []);
    return (
        <>
            <Helmet>
                <title> PANNLE | 4</title>
            </Helmet>
            <Box sx={{ p: 3 }}>
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 1, "&::before,&::after": { borderColor: "black" } }}><Slide direction="down" in={load} style={{ transitionDelay: load ? '1000ms' : '0ms' }}><Typography>4</Typography></Slide></Divider>
            </Box>
            <MYtimeline />
        </>

    )
}
export default Resoume;