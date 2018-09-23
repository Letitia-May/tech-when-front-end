import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
});

class ConferenceDetail extends Component {
  render() {
    const {conference, classes} = this.props;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="headline" component="h2">
            {conference.name}
          </Typography>
          <Typography>
            Start date: {conference.displayStartDate}
          </Typography>
          <Typography>
            End date: {conference.displayEndDate}
          </Typography>
          <Typography>
            City: {conference.city}
          </Typography>
          <Typography>
            {conference.website}
          </Typography>
        </CardContent>
      </Card>
		);
  }
}

export default withStyles(styles)(ConferenceDetail);