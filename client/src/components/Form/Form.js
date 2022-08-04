import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { TextField, Typography, Button, Paper } from '@material-ui/core';

import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts'
import { useSelector } from 'react-redux';

const Form = ({setCurrentId, currentId}) => {
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    // single state to maintain all info given by user
    const [postdata, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    
    const classes = useStyles(); //for styles import in redux
    const dispatch = useDispatch(); //to dispatch an action

    useEffect(() => {
        if(post){
            setPostData(post);
        }
    }, [post])
    const handleSubmit = (e) => {
        // console.log(postdata);

        e.preventDefault();
        if(currentId) {
            dispatch(updatePost(currentId, postdata));
        } else {
            dispatch(createPost(postdata));
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: ''})
    }
    return (
        // div with witish background
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6' align='center'>{currentId ? 'Editing ' : 'Creating '} a Memory</Typography>
                <TextField 
                name="creator" 
                variant='outlined' 
                label='Creator'
                margin='normal'
                fullWidth
                value={postdata.creator}
                // changing state without disrupting the previous data using spread operator (...)
                onChange={(e) => setPostData({ ...postdata, creator: e.target.value })}
                />
                <TextField 
                    name="title" 
                    variant='outlined' 
                    label='Title' 
                    margin='normal'
                    fullWidth
                    value={postdata.title}
                    onChange={(e) => setPostData({ ...postdata, title: e.target.value })}
                />
                <TextField 
                    name="message" 
                    variant='outlined' 
                    label='Message' 
                    margin='normal'
                    fullWidth
                    value={postdata.message}
                    onChange={(e) => setPostData({ ...postdata, message: e.target.value })}
                />
                <TextField 
                    name="tags" 
                    variant='outlined' 
                    label='Tags' 
                    margin='normal'
                    fullWidth
                    value={postdata.tags}
                    onChange={(e) => setPostData({ ...postdata, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type='file'
                        multiple={false}
                        margin='normal'
                        onDone={({base64}) => setPostData({ ...postdata, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} 
                variant='contained' color='primary' margin='normal'
                size='large' type='submit' fullWidth>Submit</Button> 
                <Button  
                variant='contained' color='secondary' margin='normal'
                size='small' onClick={clear} fullWidth>Clear</Button> 
            </form>
        </Paper>
    );
}

export default Form;