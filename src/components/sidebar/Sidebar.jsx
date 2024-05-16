import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Divider, Avatar, Box } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { grey } from '@mui/material/colors';
import TaBs from './tabs/Tabs';
import { FormGroup, FormControl } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import MaterialUISwitch from '../../layuot/ThemeButton';
import { useContext } from 'react';
import MYcontext from '../../context/context';
import { useTheme } from '@emotion/react';
const Sidebar = () => {
const theme=useTheme();
    const { handleChange, handleTheme } = useContext(MYcontext);

    return (
        <Grid id="Gr" item md={3} lg={2} sx={{backgroundColor: theme.palette.mode === "light" ? "#444" : grey[900], p: 1, height: "100vh", display: { xs: "none", md: "block" }, mx: 0, overflowY: "auto", overflowX: "hidden" }} color={grey[100]}>
            <FormControl onChange={handleTheme} sx={{ mx: 8, position: "absolute" }}>
                <FormGroup >
                    <FormControlLabel
                        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                    />
                </FormGroup>
            </FormControl>
            <Avatar sx={{ width: "150px", height: "150px", margin: "0 auto", mt: 2, display: { xs: "none", md: "block"} }} variant="circular" src='' />
            <Divider variant="middle" sx={{ mt: 2, mb: 1, color: "white" }} color={grey[600]} />
            <Typography variant="subtitle1" sx={{ textAlign: "center" }} color={grey[500]}>
                <Box sx={{display:"flex",justifyContent:"center"}}><w3m-button /></Box>
            </Typography>
            <Divider variant="middle" sx={{ mt: 1, mb: 2, color: "white" }} color={grey[600]} />
            <TaBs handleChange={handleChange} />
        
            <Typography variant="subtitle2" sx={{ textAlign: "center" }} color={grey[700]}>POWER BY ENTERFIRE<CopyrightIcon sx={{ color: grey[500] }} /> </Typography>
        </Grid >
    )
}
export default Sidebar;