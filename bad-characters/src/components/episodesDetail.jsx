


import { Card, makeStyles, Tooltip, Typography } from '@material-ui/core';

const episodesDetails = ({ epiitems }) => {
    console.log(epiItems);
    
    return (
        <Tooltip title={
            <>
            <Typography>Name : {epiitems.season}</Typography>
            <Typography>Date of Birth : {epiitems.birthday}</Typography>
            <Typography>Occupation : {epiitems.occupation}</Typography>
            <Typography>Status : {epiitems.status}</Typography>
            <Typography>Nickname : {epiitems.nickname}</Typography>
            <Typography>Real Name : {epiitems.portrayed}</Typography>
            <Typography>Real Name:{epiitems.portrayed}</Typography>
            </>
        } arrow>
        </Tooltip>
    )
}
export default episodesDetails;