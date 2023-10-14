import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Divider, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import TabsDrawer from './tabs/TabsDrawer';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/material';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useMediaQuery} from '@mui/material';
import Theme from '../../layuot/theme';
import { useEffect } from 'react';

const Sidebardrawer = ({ handleChange, handlechangetoggle, setdraweropen }) => {

    const mdup = useMediaQuery(Theme.breakpoints.up("md"));
    useEffect(() => {
        if (mdup) {
            setdraweropen(false);
        }
    }, [mdup]);

    return (
        <Grid id="Gr" item md={3} sx={{ backgroundColor: "gray.main", padding: "0.5rem", height: "1000px", borderRight: `4px solid #777`, overflow: "auto" }} color={grey[100]}>
            <Box sx={{ display: { xs: "block", md: "none" }, m: 0.2 }}>
                <Fab onClick={handlechangetoggle} variant="circular" color='primary' size="small" aria-label='sidebar'>
                    <KeyboardDoubleArrowLeftRoundedIcon />
                </Fab>
            </Box>
            <Avatar sx={{ width: "110px", height: "110px", margin: "0 auto", outline: " double 3.5px #03a9f4" }} variant="circular" src='https://toplearn.com/img/user/250x259/2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C9.jpg' />
            <Divider variant="middle" sx={{ mt: 2, mb: 1, color: "white" }} color={grey[600]} />
            <Typography variant="subtitle2" sx={{ textAlign: "center" }} color={grey[500]}>توسعه دهنده فول استک وب</Typography>
            <Divider variant="middle" sx={{ mt: 1, mb: 1, color: "white" }} color={grey[600]} />
            <TabsDrawer handleChange={handleChange} />
            <Divider variant="middle" sx={{ mt: 1, mb: 1, color: "white" }} color={grey[600]} />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <a href='https://www.babrgiralireza@gmail.com' rel="noreferrer noopener" target="_blank" >
                    <EmailIcon aria-label="Email" sx={{ color: "grey", mx: 1 }} />
                </a>
                <a href='https://www.github.com/alirezababrgir' rel="noreferrer noopener" target="_blank" >
                    <GitHubIcon aria-label="Email" sx={{ color: "grey", mx: 1 }} />
                </a>
                <a href='https://www.instagram.com/__zakhar___/' rel="noreferrer noopener" target="_blank" >
                    <InstagramIcon aria-label="Email" sx={{ color: "grey", mx: 1 }} />
                </a>
                <a href='https://www.likedin.com/alirezababrgir' rel="noreferrer noopener" target="_blank" >
                    <LinkedInIcon aria-label="Email" sx={{ color: "grey", mx: 1 }} />
                </a>
            </Box>
            <Divider variant="middle" sx={{ mt: 0.5, mb: 1, color: "white" }} color={grey[600]} />
            <Typography variant="subtitle2" sx={{ textAlign: "center" }} color={grey[700]}>توسعه یافته توسط zakhar <CopyrightIcon sx={{ color: grey[500] }} /> </Typography>
        </Grid>
    )
}
export default Sidebardrawer;