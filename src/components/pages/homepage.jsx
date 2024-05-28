import { Box, Button } from "@mui/material";
import { Divider, Slide } from "@mui/material";
import { Typography } from "@mui/material";
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
import { Notadmin } from "./notadmin";
import { Wellcomepage } from "./wellcomepage";
import { Loadingpage } from "./loadingpage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {

    const [registerBrokerLink, { isLoading, isError, error }] = useRegisterBrokerLinkMutation();
    const [ListUsers, { isLoading: isLoadlist }] = useListUsersMutation();
    const [PostToken, { isLoading: isLoadtoken }] = usePostTokenMutation()

    const [checkresult, setcheckresult] = useState();
    const [checkmsg, setcheckmsg] = useState();

    const { address, isConnected, isDisconnected } = useAccount()
    const { signMessage, status, data } = useSignMessage()
    const [cookies, setCookie, removecookie] = useCookies(['token']);
    const theme = useTheme();
    const [listData, setlistData] = useState()
    const [statusList, setstatusList] = useState()
    const [resultList, setresultList] = useState()
    const [sign, setSign] = useState(false)
    const [click, setClick] = useState()
    const [list, setList] = useState("all")

    //form assets
    const inputstrings = {
        link1: '',
        link2: '',
        link3: '',
        link4: '',
    }

    //handle formik
    const formik = useFormik({
        initialValues: inputstrings,
        onSubmit: (values) => {
            handleSubmit({ uid: click, token: cookies.token, link1: values.link1, link2: values.link2, link3: values.link3, link4: values.link4 });
        },
        validationSchema: userSchema,
    });

    //handle submit form
    const handleSubmit = async (formData) => {
        try {
            const response = await registerBrokerLink(formData);
            console.log(response.data);
            setcheckresult(response.data.result)
            setcheckmsg(response.data.message)
            formik.resetForm()
            if (response.data.result === true) {
                toast.success(response.data.message)
            } else {
                toast.error(`Registration of at least one link is required !`)
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleBackall = () => {
        setList("all")
    }


    const [load, setload] = useState(false);
    useEffect(() => {
        setload(true);      //Mount
        return () => {
            setload(false); //unMount
        }
    }, []);



    //authenticate & listusers on form
    useEffect(() => {

        const auth = async () => {

            if (isConnected && sign === false && !cookies.token) {
                try {
                    signMessage({ message: 'Safeboxes' })
                    setSign(true)
                }
                catch (error) {
                    console.log(error)
                }
            }
            if (isDisconnected) {
                setSign(false)
                removecookie(['token'], { path: '/' })
            }
            if (isConnected && sign === true && !cookies.token) {
                const authenticate = await PostToken({ address: address, signature: data })
                console.log(authenticate)
                setCookie('token', authenticate.data.token, { path: '/' })
            }

            if (cookies.token || click === "") {
                const listusers = await ListUsers({ token: cookies.token, list: list, sort: "asc" })
                console.log(listusers)
                setstatusList(listusers.data.message)
                setresultList(listusers.data.result)
                //create data form

                function createData(name, code, population, size, index) {
                    return { name, code, population, size, index };
                }

                const rows = Object.keys(listusers.data).map((key) => listusers.data[key]).map((uid, index) => createData(index + 1, uid.uid, uid.uid, <Button onClick={() => { setClick(uid.uid) }} variant="contained" key={index}>Next</Button>))
                setlistData(rows)
                console.log(rows.length)
                if (rows.length < 1) {
                    toast.error("Empty List")
                }
            }

        }
        auth()

    }, [data, address, PostToken, cookies.token, setCookie, status, ListUsers, signMessage, isConnected, sign, isDisconnected, removecookie, click, list])

    //handle options
    const handleLink1 = () => {
        setList("id&!link1")
    }
    const handleLink2 = () => {
        setList("id&!link2")
    }
    const handleLink3 = () => {
        setList("id&!link3")
    }
    const handleLink4 = () => {
        setList("id&!link4")
    }
    return (

        <div style={{ height: "100dvh" }} class={theme.palette.mode === "light" ? "connectwalletbg" : "connectwalletbg_dark"}>
            <ToastContainer />
            <Helmet>
                <title>PANNEL | INJECTBROKERLINKS</title>
            </Helmet>

            <Box sx={{ p: 4, height: "10vh" }}>
                <Divider variant="middle" textAlign="right" sx={{ mt: 2, mb: 1, "&::before,&::after": { borderColor: "black" } }}><Slide direction="down" in={load} style={{ transitionDelay: load ? '1000ms' : '0ms' }}><Typography >INJECT BROKER LINKS</Typography></Slide></Divider>
            </Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <w3m-button />
                </Box>
                {cookies.token && listData && !click && !resultList && !statusList ? <ColumnGroupingTable handleLink1={handleLink1} handleLink2={handleLink2} handleLink3={handleLink3} handleLink4={handleLink4} listData={listData} cookies={cookies.token} /> : cookies.token && statusList === "Not admin" && resultList === false ? <Notadmin /> : isLoadlist || isLoadtoken || isLoading ? <Loadingpage /> : !click || isDisconnected ? <Wellcomepage /> : <Homecontent theme={theme} load={load} address={address} cookies={cookies.token} checkresult={checkresult} checkmsg={checkmsg} isError={isError} isLoading={isLoading} error={error} formik={formik} uid={click} setuid={setClick} />}
                {cookies.token && listData && !click && !resultList && !statusList ? <Button sx={list === "all" ? { display: "none" } : null} variant="contained" onClick={handleBackall}>All Users</Button> : null}
            </Box >
        </div>
    )
}
export default Homepage;

/*
particles
                <Particles id="tsparticles" options={Part1} init={particlesInit} loaded={particlesLoaded} />
*/