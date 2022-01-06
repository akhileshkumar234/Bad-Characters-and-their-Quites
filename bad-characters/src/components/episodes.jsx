import EpisodeDetail from './episodesDetail';
import {Grid,Box } from '@material-ui/core';
const Epicharacters = ({data}) => {
   return (
      <Box>
         <Grid container spacing={3} style={{ padding: 30 }}>
            {
               data.map (epiitems => (
                  // console.log(items);
                  <Grid epiitem >
                     {
                        <EpisodeDetail epiitems={epiitems} />
                     }
                  </Grid>

               ))
            }
         </Grid>
      </Box>
   )
}

export default Epicharacters;