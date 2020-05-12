import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const TopicCard = props => {
  const { title, body, link } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={link.href}>
          {link.name}
        </Button>
      </CardActions>
    </Card>
  );
};
export default TopicCard;
