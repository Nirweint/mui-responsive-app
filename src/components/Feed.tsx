import React from 'react';
import {Container, makeStyles} from "@material-ui/core";
import {Post} from "./Post";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10),
    },
}))

export const Feed = () => {

    const s = useStyles();

    return (
        <Container className={s.container}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Container>
    );
}