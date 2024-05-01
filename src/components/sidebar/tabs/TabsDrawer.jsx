import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useContext } from 'react';
import MYcontext from '../../../context/context';
import { useTheme } from '@emotion/react';
import { grey } from '@mui/material/colors';

const TabsDrawer = ({ handleChange }) => {
    const theme = useTheme();
    const { value, setdraweropen } = useContext(MYcontext);

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        }
    };
    const tabs = [
        { label: "INJECT BROKER LINK", ...tabProps(0) },
        { label: "2", ...tabProps(1) },
        { label: "3",...tabProps(2) },
        { label: "4",...tabProps(3) },
        { label: "5", ...tabProps(4) }
    ];


    return (
        <Tabs onChange={handleChange} value={value} aria-label="icon label tabs example" orientation="vertical" allowScrollButtonsMobile scrollButtons="auto">
            {tabs.map((tab, index) => (
                <Tab key={index} iconPosition='start' label={tab.label} sx={{ "&.MuiTab-root": { minHeight: 50 }, backgroundColor: theme.palette.mode === "light" ? "#999" : grey[700], borderRadius: "4px", m: 1 }} onClick={() => setdraweropen(false)}{...tab} />
            ))}
        </Tabs>
    )
}
export default TabsDrawer;