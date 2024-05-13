//form imports
import { Grid, TextField, InputAdornment, Button, CardActions, CardContent, Zoom } from "@mui/material";
import { grey } from "@mui/material/colors";



const Homecontent = ({checkresult,checkmsg,isError,isLoading,error,formik,cookies,load,theme}) => {


    return (
        <>
            <Grid sx={{display:"none"}}>
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