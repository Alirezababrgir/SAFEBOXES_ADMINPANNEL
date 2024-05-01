import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useContext } from 'react';
import MYcontext from '../../../context/context';
import { useTheme } from '@emotion/react';
import { grey } from '@mui/material/colors';
const TaBs = ({ handleChange }) => {
    const theme = useTheme();
    const { value } = useContext(MYcontext);

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        }
    };
    const tabs = [
        { label: "INJECTLINKS", ...tabProps(0) },
        { label: "2", ...tabProps(1) },
        { label: "3", ...tabProps(2) },
        { label: "4", ...tabProps(3) },
        { label: "5", ...tabProps(4) }
    ];


    return (
        <Tabs onChange={handleChange} value={value} aria-label="icon label tabs example" orientation="vertical" allowScrollButtonsMobile scrollButtons="auto">
            {tabs.map((tab, index) => (
                <Tab key={index} iconPosition='start' label={tab.label} sx={{ "&.MuiTab-root": { minHeight: 55 }, backgroundColor: theme.palette.mode === "light" ? "#999" : grey[700], borderRadius: "4px", m: 1 }} {...tab} />
            ))}
        </Tabs>
    )
}
export default TaBs;