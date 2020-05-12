import React from 'react';
import { CssBaseline, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Footer, Header, Hero, TopicCard } from './Components';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <TopicCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default App;
