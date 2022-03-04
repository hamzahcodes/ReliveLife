import React, { useState } from 'react';
import { useStyles } from '../../styles';
import { TextField, Typography, Button, Paper } from '@material-ui/core';

import FileBase from 'react-file-base64';

const Form = () => {
    const [postdata, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    
    const classes = useStyles();

    const handleSubmit = () => {

    }
    const clear = () => {

    }
    return (
        // div with witish background
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6' align='center'>Creating a Memory</Typography>
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
                    onChange={(e) => setPostData({ ...postdata, tags: e.target.value })}
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