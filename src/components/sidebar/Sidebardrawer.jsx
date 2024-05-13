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
import { useMediaQuery } from '@mui/material';
import { Theme01 } from '../../layuot/theme';
import { useEffect } from 'react';
import { FormGroup, FormControl } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import MaterialUISwitch from '../../layuot/ThemeButton';
import { useContext } from 'react';
import MYcontext from '../../context/context';
import { useTheme } from '@emotion/react';

const Sidebardrawer = () => {
    const theme=useTheme();
    const { setdraweropen, handleChange, handleTheme, handlechangetoggle } = useContext(MYcontext);
    const mdup = useMediaQuery(Theme01.breakpoints.up("md"));
    useEffect(() => {
        if (mdup) {
            setdraweropen(false);
        }
    }, [mdup,setdraweropen]);

    return (
        <Grid id="Gr" item md={3} sx={{ backgroundColor: theme.palette.mode === "light" ? "#444" : grey[900], padding: "0.5rem", height: "100vh", overflowY: "auto", overflowX: "hidden" }} color={grey[100]}>
            <Box sx={{ display: { xs: "block", md: "none" }, m: 0.2 }}>
                <Fab onClick={handlechangetoggle} variant="circular" color='primary' size="small" aria-label='sidebar'>
                    <KeyboardDoubleArrowLeftRoundedIcon />
                </Fab>
                <FormControl onChange={handleTheme} sx={{mx:14, position:"absolute" }}>
                <FormGroup >
                    <FormControlLabel
                        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                    />
                </FormGroup>
            </FormControl>
            </Box>
            <Avatar sx={{ width: "110px", height: "110px", margin: "0 auto"}} variant="circular" src='' />
            <Divider variant="middle" sx={{ mt: 2, mb: 1, color: "white" }} color={grey[600]} />
            <Typography variant="subtitle2" sx={{ textAlign: "center"}} color={grey[500]}><w3m-button /></Typography>
            <Divider variant="middle" sx={{ mt: 1, mb: 1, color: "white" }} color={grey[600]} />
            <TabsDrawer handleChange={handleChange} />
            <Divider variant="middle" sx={{ mt: 1, mb: 1, color: "white" }} color={grey[600]} />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <a href='mailto:babrgiralireza@gmail.com' rel="noreferrer noopener" target="_blank" >
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
            <Typography variant="subtitle2" sx={{ textAlign: "center" }} color={grey[700]}>POWERR BY ENTERFIRE<CopyrightIcon sx={{ color: grey[500] }} /> </Typography>
        </Grid>
    )
}
export default Sidebardrawer;