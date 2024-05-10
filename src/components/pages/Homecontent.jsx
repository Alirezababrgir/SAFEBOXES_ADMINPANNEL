import { Box, Fab } from "@mui/material";
import { useSignMessage } from 'wagmi'
import { usePostTokenMutation, useRegisterBrokerLinkMutation } from "../../api/apiSlice";//api hook

import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
//forem imports
import { Grid, TextField, InputAdornment, Button, CardActions, CardContent, Zoom } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import { useFormik } from 'formik';
import { userSchema } from "./validation/FormSchema";


const Homecontent = () => {

    const [PostToken] = usePostTokenMutation()
    const { address } = useAccount()
    const { signMessage, status, data } = useSignMessage()
    const [cookies, setCookie] = useCookies(['token']);

    const [registerBrokerLink, { isLoading, isError, error }] = useRegisterBrokerLinkMutation();
    const [checkresult, setcheckresult] = useState();
    const [checkmsg, setcheckmsg] = useState();


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

    const theme = useTheme();

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
        if (cookies.token === undefined && status === "success") {
            const auth = async () => {
                const authenticate = await PostToken({ address: address, signature: data })
                console.log(authenticate)
                setCookie('token', authenticate.data.token, { path: '/' })
            }
            auth()

        }
    }, [data, address, PostToken, cookies.token, setCookie, status])

    return (
        <>
            <Box sx={{ p: 2 }}>
                <w3m-button />
                {cookies.token ? <Fab sx={{ mt: 2, fontSize: "10px" }} variant="extended" size="small" color="primary" disabled>{address}</Fab> : address === undefined ? <Fab sx={{ mt: 2 }} size="small" variant="extended" color="primary" onClick={Handlesignature} disabled>Authenticate</Fab> : <Fab sx={{ mt: 2 }} size="small" variant="extended" color="primary" onClick={Handlesignature}>Authenticate</Fab>}
            </Box>
            <Grid >
                <Zoom direction="down" in={load} style={{ transitionDelay: load ? '1500ms' : '0ms' }}>
                    <Grid xs={12} lg={12} sx={{ display: "flex", p: 4, flexWrap: "nowrap", justifyContent: "center", alignItems: "center" }}>
                        <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ backgroundColor: theme.palette.mode === "light" ? "#999" : grey[800], padding: "0.2rem", borderRadius: "0.5rem" }}>
                            <CardContent>
                                <Grid container>
                                    <Grid
                                        xs={12}
                                        sx={{ direction: "ltr" }}
                                    >
                                        <Grid container >
                                            <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label="Enter the first link"
                                                    name={"link1"}
                                                    helperText={formik.touched.link1 ? formik.errors.link1 : null}
                                                    error={Boolean(formik.touched.link1 && formik.errors.link1)}
                                                    value={formik.values?.link1}
                                                    onChange={formik.handleChange}
                                                    variant="outlined"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment postion="end">
                                                                1
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                            <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label="Enter the secound link"
                                                    name={"link2"}
                                                    helperText={formik.touched.link2 ? formik.errors.link2 : null}
                                                    error={Boolean(formik.touched.link2 && formik.errors.link2)}
                                                    value={formik.values?.link2}
                                                    onChange={formik.handleChange}
                                                    variant="outlined"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment postion="end">
                                                                2
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                            <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label="Enter the third link"
                                                    name={"link3"}
                                                    helperText={formik.touched.link3 ? formik.errors.link3 : null}
                                                    error={Boolean(formik.touched.link3 && formik.errors.link3)}
                                                    value={formik.values?.link3}
                                                    onChange={formik.handleChange}
                                                    variant="outlined"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment postion="end">
                                                                3
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                            <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label="Enter the fourth link"
                                                    name={"link4"}
                                                    helperText={formik.touched.link4 ? formik.errors.link4 : null}
                                                    error={Boolean(formik.touched.link4 && formik.errors.link4)}
                                                    value={formik.values?.link4}
                                                    onChange={formik.handleChange}
                                                    variant="outlined"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment postion="end">
                                                                4
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions
                                sx={{
                                    alignItems: "end",
                                    flexDirection: "column",
                                }}
                            >
                                <Button
                                    type="submit"
                                    color="info"
                                    variant="contained"
                                    sx={{ mt: 2 }}
                                    fullWidth
                                    disabled={!cookies.token}
                                >
                                    {isLoading ? <span>sending...</span> : isError ? <span>{error.message}</span> : checkresult === false || checkresult === true ? <span>{checkmsg} !</span> : <span>confirm</span>}
                                </Button>
                            </CardActions>
                        </form>
                    </Grid>
                </Zoom>
            </Grid>
        </>
    )
}
export default Homecontent;