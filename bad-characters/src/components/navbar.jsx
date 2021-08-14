import React from 'react'
import { AppBar, Toolbar, makeStyles, InputBase, Box } from '@material-ui/core';
import Logo from '../images/logoBreakingBad.jpg';
import SearchIcon from '@material-ui/icons/Search';
//import { width } from '@material-ui/system';
const doStyle = makeStyles({
    bgcolornav: {
        background: '#0000ff'
    },
    imagewidth: {
        width: '110px'
    },
    searchBox: {
        marginLeft: '70px',
        borderRadius: '10px',
        background: '#9999ff'
    },
    inputBox: {
        color: ' #ffffff',
        fontSize: 25,
        margin: '0 50px'

    },
    Iconsearch: {
        position: 'absolute',
        marginLeft: 9,
        marginTop: 9
    },
    H1:{
        fontSize:45,
        marginLeft:190
    }
});
const Navbar = ({getName}) => {
    const classes = doStyle();
    return (
        <AppBar className={classes.bgcolornav} position='static'>
            <Toolbar>
                <img className={classes.imagewidth} src={Logo} alt="logo"></img>
                <h1 className={classes.H1}>Bad characters and their Quotes</h1>
                <Box className={classes.searchBox}>
                    <Box className={classes.Iconsearch}>
                        <SearchIcon />
                    </Box>
                    <InputBase placeholder="Search by name" autoFocus
                    onChange={(event)=>getName(event.target.value)}
                    