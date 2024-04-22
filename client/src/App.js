import React, { useEffect , useState } from 'react';
// import ReactDOM from 'react-dom';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

// for importing images
import memories from './images/memories.png';

// for components 
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

// for styles in app.js. This is the way we use css with material UI
import { useStyles } from './styles';

// for react redux imports
// it is a hook used with react-redux to fetch data from store and render it
import { useDispatch } from 'react-redux';


import { getPosts } from './actions/posts';
const App = () => {

    const [ currentId, setCurrentId ] = useState(null);
    const classes = useStyles(); // for styles
    const dispatch = useDispatch(); // for initiating an action in redux store

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant="h2" align='center'>Relive Life</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid> 
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;