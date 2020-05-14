import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Hero, TopicCard } from './';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const cards = [
  {
    title: 'Interactive Family Tree',
    body: 'See the Schooler Family Tree.',
    link: { href: '#family-tree', name: 'Family Tree' },
  },
];

const Main = () => {
  const classes = useStyles();
  return (
    <main>
      <Hero />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <TopicCard title={card.title} body={card.body} link={card.link} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Main;
