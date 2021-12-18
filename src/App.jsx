import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {

    const classes = useStyles();

    return (

        <>

        <CssBaseline />
        <AppBar position="realtive">

            <Toolbar>

                <PhotoCamera className={ classes.icons } />

                <Typography varaint="h6">
                    Photo album
                </Typography>

            </Toolbar>

        </AppBar>

        <main>

            <div className={ classes.container }>

                <Container maxWidth="sm" style={{ marginTop: '100px' }}>
                
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Photo album
                    </Typography>

                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        This is a description of the photo album!
                    </Typography>

                    <div className={ classes.buttons }>
                    
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
                            </Grid>
                        </Grid>

                    </div>

                </Container>

            </div>

            <Container className={ classes.cardGrid } maxWidth="md">
            
                <Grid container spacing={4}>

                    { cards.map( (card) => (

                        <Grid item key={ card } xs={12} sm={6} md={4}>

                            <Card className={ classes.card }>
                                <CardMedia
                                    className={ classes.cardMedia }
                                    image="https://source.unsplash.com/random"
                                    title="Random image"
                                />

                                <CardContent className={ classes.cardContent }>

                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>

                                    <Typography>
                                        This section describes the content above.
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>

                            </Card>                    

                        </Grid>

                    ) ) }

                </Grid>

            </Container>

        </main>

        <footer className={ classes.footer }>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                This text is the footer pourpose!
            </Typography>
        </footer>

        </>

    )

}

export default App;