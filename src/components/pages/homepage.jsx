import { Box, Fab } from "@mui/material";
import { Divider, Slide } from "@mui/material";
import { Typography } from "@mui/material";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Part1 } from "../../layuot/particels";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Homecontent from "./Homecontent";
import { useFormik } from 'formik';
import { userSchema } from "./validation/FormSchema";
import { useRegisterBrokerLinkMutation, usePostTokenMutation, useListUsersMutation } from "../../api/apiSlice";//api hook
import { useSignMessage } from 'wagmi'
import { useAccount } from "wagmi";
import { useCookies } from "react-cookie";
import ColumnGroupingTable from "./table";
import { useTheme } from "@emotion/react";

const Homepage = () => {

    const [registerBrokerLink, { isLoading, isError, error }] = useRegisterBrokerLinkMutation();
    const [ListUsers] = useListUsersMutation();

    const [checkresult, setcheckresult] = useState();
    const [checkmsg, setcheckmsg] = useState();

    const [PostToken] = usePostTokenMutation()
    const { address } = useAccount()
    const { signMessage, status, data } = useSignMessage()
    const [cookies, setCookie] = useCookies(['token']);
    const theme = useTheme();

    //form assets
    const inputstrings = {
        link1: '',
        link2: '',
        link3: '',
        link4: '',
    }

    const formik = useFormik({
        initialValues: inputstrings,
        onSubmit: (values) => {
            handleSubmit({ token: cookies.token, link1: values.link1, link2: values.link2, link3: values.link3, link4: values.link4 });
        },
        validationSchema: userSchema
    });
    const handleSubmit = async (formData) => {
        try {
            const response = await registerBrokerLink(formData);
            console.log(response.data);
            setcheckresult(response.data.result)
            setcheckmsg(response.data.message)
        } catch (error) {
            console.error(error);
        }
    };
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


    const Handlesignature = async () => {
        try {
            signMessage({ message: 'Safeboxes' })
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const auth = async () => {
            if (cookies.token === undefined && status === "success") {
                const authenticate = await PostToken({ address: address, signature: data })
                console.log(authenticate)
                setCookie('token', authenticate.data.token, { path: '/' })
            }

            if (cookies.token) {
                const listusers = await ListUsers({ token: cookies.token, list: "all", sort: "asc" })
                console.log(listusers.data)
            }

        }
        auth()

    }, [data, address, PostToken, cookies.token, setCookie, status, ListUsers])

    return (

        <div style={{ height: "100dvh" }} class={theme.palette.mode === "light" ? "connectwalletbg" : "connectwalletbg_dark"}>
            <Helmet>
                <title>PANNEL | INJECTBROKERLINKS</title>
            </Helmet>
            <Box sx={{ p: 3, height: "10vh" }}>
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 1, "&::before,&::after": { borderColor: "black" } }}><Slide direction="down" in={load} style={{ transitionDelay: load ? '1000ms' : '0ms' }}><Typography >INJECT BROKER LINKS</Typography></Slide></Divider>
            </Box>
            <Box sx={{ px: 4 }}>
                {cookies.token ? <Fab sx={{ mt: 2, fontSize: "10px" }} variant="extended" size="small" color="primary" disabled>{address}</Fab> : address === undefined ? <Fab sx={{ mt: 2 }} size="small" variant="extended" color="primary" onClick={Handlesignature} disabled>Authenticate</Fab> : <Fab sx={{ mt: 2 }} size="small" variant="extended" color="primary" onClick={Handlesignature}>Authenticate</Fab>}
                <ColumnGroupingTable />
                <Homecontent theme={theme} load={load} Handlesignature={Handlesignature} address={address} cookies={cookies} checkresult={checkresult} checkmsg={checkmsg} isError={isError} isLoading={isLoading} error={error} formik={formik} />
            </Box >
        </div>
    )
}
export default Homepage;

/*
particles
                <Particles id="tsparticles" options={Part1} init={particlesInit} loaded={particlesLoaded} />
*/