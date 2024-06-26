//form imports
import { Grid, TextField, Button, CardActions, CardContent, Zoom, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useGetBrokerIdsMutation } from "../../api/apiSlice";
import { Loadingpage } from "./loadingpage";
import { ToastContainer, toast } from "react-toastify";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Homecontent = ({ checkresult, isError, isLoading, error, formik, load, theme, setuid, uid, cookies }) => {

    const [GetBrokerIds, { isLoading: loadingInfo }] = useGetBrokerIdsMutation();
    const [cxid, setcxid] = useState()
    const [refid, setrefid] = useState()
    const [link1, setlink1] = useState()
    const [link2, setlink2] = useState()
    const [link3, setlink3] = useState()
    const [link4, setlink4] = useState()

    const handleBack = () => {
        setuid("")

    }

    //get-broker-ids
    useEffect(() => {
        const getInfo = async () => {

            try {
                const getbrokerids = await GetBrokerIds({ token: cookies, uid: uid })
                console.log(getbrokerids.data)
                setrefid(getbrokerids.data.ra_ecm)
                setcxid(getbrokerids.data.cx_id)
                setlink1(getbrokerids.data.link1)
                setlink2(getbrokerids.data.link2)
                setlink3(getbrokerids.data.link3)
                setlink4(getbrokerids.data.link4)

            } catch (error) {
                console.log(error)
            }
        }
        getInfo()
    }, [GetBrokerIds, cookies, uid])

    console.log(uid)
    return (
        <>
            {loadingInfo ? <Loadingpage /> : <Grid sx={{ marginTop: "80px" }}>
                <Zoom direction="down" in={load} style={{ transitionDelay: load ? '1500ms' : '0ms' }}>
                    <Grid xs={12} lg={12} sx={{ display: "flex", p: 4, flexWrap: "nowrap", justifyContent: "center", alignItems: "center" }}>
                        <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ backgroundColor: theme.palette.mode === "light" ? grey[100] : grey[800], padding: "0.2rem", borderRadius: "0.5rem" }}>
                            <CardContent>
                                <Grid container>
                                    <Grid sx={{ mb: 2 }} container>
                                        <Grid xs={6} md={6}>
                                            {cxid ? <Typography variant="h4" color={theme.palette.mode === "light" ? grey[900] : grey[100]} >
                                                <CopyToClipboard text={`${cxid}`}>
                                                    <Button variant="contained" size="small">{`${cxid}`}</Button>
                                                </CopyToClipboard>
                                            </Typography> : <Typography color={theme.palette.mode === "light" ? grey[900] : grey[100]} variant="h4">
                                                {`CXID:empty`}
                                            </Typography>}
                                        </Grid>
                                        <Grid xs={6} md={6}>
                                            {cxid ? <Typography variant="h4" color={theme.palette.mode === "light" ? grey[900] : grey[100]} >
                                                <CopyToClipboard text={`${refid}`}>
                                                    <Button variant="contained" size="small"> {`${refid}`}</Button>
                                                </CopyToClipboard>
                                            </Typography> : <Typography color={theme.palette.mode === "light" ? grey[900] : grey[100]} variant="h4">
                                                {`REFID:empty`}
                                            </Typography>}
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        xs={12}
                                        sx={{ direction: "rtl" }}
                                    >
                                        <Grid container >
                                            <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label={link1 ? link1 : "Enter the first link"}
                                                    name={"link1"}
                                                    helperText={formik.touched.link1 ? formik.errors.link1 : null}
                                                    error={Boolean(formik.touched.link1 && formik.errors.link1)}
                                                    value={formik.values?.link1}
                                                    onChange={formik.handleChange}
                                                    variant="outlined"

                                                />
                                            </Grid>
                                            <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label={link2 ? link2 : "Enter the secound link"}
                                                    name={"link2"}
                                                    helperText={formik.touched.link2 ? formik.errors.link2 : null}
                                                    error={Boolean(formik.touched.link2 && formik.errors.link2)}
                                                    value={formik.values?.link2}
                                                    onChange={formik.handleChange}
                                                    variant="outlined"

                                                />
                                            </Grid>
                                            <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label={link3 ? link3 : "Enter the third link"}
                                                    name={"link3"}
                                                    helperText={formik.touched.link3 ? formik.errors.link3 : null}
                                                    error={Boolean(formik.touched.link3 && formik.errors.link3)}
                                                    value={formik.values?.link3}
                                                    onChange={formik.handleChange}
                                                    variant="outlined"

                                                />
                                            </Grid>
                                            <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    color="primary"
                                                    label={link4 ? link4 : "Enter the fourth link"}
                                                    name={"link4"}
                                                    helperText={formik.touched.link4 ? formik.errors.link4 : null}
                                                    error={Boolean(formik.touched.link4 && formik.errors.link4)}
                                                    value={formik.values?.link4}
                                                    onChange={formik.handleChange}
                                                    variant="outlined"

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
                                <Grid container>
                                    <Grid xs={12} md={12}>
                                        <Button
                                            type="submit"
                                            color="info"
                                            variant="contained"
                                            sx={{ mt: 2 }}
                                            fullWidth
                                        >
                                            {isLoading ? <span>sending...</span> : isError ? <span>{error.message}</span> : <span>confirm</span>}
                                        </Button>
                                    </Grid>
                                    <Grid xs={12} md={12}>
                                        <Button
                                            onClick={handleBack}
                                            type="reset"
                                            color="error"
                                            variant="contained"
                                            sx={{ mt: 2 }}
                                            fullWidth
                                        >
                                            {checkresult === true ? <span>back</span> : <span>cancel</span>}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </form>
                    </Grid>
                </Zoom>
            </Grid>}
        </>
    )
}
export default Homecontent;