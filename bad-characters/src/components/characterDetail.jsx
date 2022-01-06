import { Card, makeStyles, Tooltip, Typography } from '@material-ui/core';

const useimgstyle = makeStyles({
    image: {
        height: '285px',
        width: '272px',
        objectFit: 'cover'
    }
})
const charDetailCard = ({ items }) => {
    //console.log(EpiItems);
    const imgclasses = useimgstyle();
    return (
        <Tooltip title={
            <>
            <Typography>Name : {items.name}</Typography>
            <Typography>Date of Birth : {items.birthday}</Typography>
            <Typography>Occupation : {items.occupation}</Typography>
            <Typography>Status : {items.status}</Typography>
            <Typography>Nickname : {items.nickname}</Typography>
            <Typography>Real Name : {items.portrayed}</Typography>
            <Typography>Real Name:{items.portrayed}</Typography>
            </>
        } arrow>
            <Card>
                <img src={items.img} className={imgclasses.image} alt="characterDetailcard"></img>
            </Card>
        </Tooltip>
    )
}
export default charDetailCard;