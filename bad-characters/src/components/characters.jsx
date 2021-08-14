

import CharDetailCard from './characterDetail';
import {Grid,Box } from '@material-ui/core';
const characters = ({ data }) => {
   return (
      <Box>
         <Grid container spacing={3} style={{ padding: 30 }}>
            {
               data.map(items => (
                  // console.log(items);
                  <Grid item md={2.4}>
                     {
                        <CharDetailCard items={items} />
                     }
                  </Grid>

               ))
            }
         </Grid>
      </Box>
   )
}

export default characters;