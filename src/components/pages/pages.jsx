import SwipeableViews from 'react-swipeable-views';
import { Box } from '@mui/material';
import Tabpanel from '../Tabpanel';
import Homepage from './homepage';
import { Theme01 } from '../../layuot/theme';
const Pages = ({ handlepageformobile, value }) => {
  return (
    <SwipeableViews index={value} onChangeIndex={handlepageformobile} axis={Theme01.direction === 'ltr' ? 'x-reverse' : 'x'}>
      <Tabpanel index={0}>
        <Box >
          <Homepage />
        </Box>
      </Tabpanel>
     
    </SwipeableViews>
  )
}
export default Pages;

/*

******more pages******

import About from './aboutpage';
import Resoume from './resoumepage';
import Projects from './projects';
import ConnectMe from './ConnectMe';


 <Tabpanel index={1}>
        <Box >
          <About />
        </Box>
      </Tabpanel>
      <Tabpanel index={2}>
        <Box>
          <Projects />
        </Box>
      </Tabpanel>
      <Tabpanel index={3}>
        <Box>
          <Resoume />
        </Box>
      </Tabpanel>
      <Tabpanel index={4}>
        <Box>
          <ConnectMe />
        </Box>
      </Tabpanel>
      */