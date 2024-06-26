import React from 'react';
import Post from './Post/Post';
import { Grid, CircularProgress } from '@material-ui/core';
import { useStyles } from './styles';

import { useSelector } from 'react-redux'; // to get data from store
const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();

    console.log(posts);
    console.log(posts.length);
    return (
        <>
            {!posts.length
            ?
                <CircularProgress />   
            :
                <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                    {posts.map((post, ind ) => {
                        return (<Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>)
                    })}
                </Grid>
        }
        </>
    );
}

export default Posts;