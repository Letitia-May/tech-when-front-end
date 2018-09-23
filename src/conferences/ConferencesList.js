import React, { Component } from 'react';
import ConferenceDetail from './ConferenceDetail';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  // cardGrid: {
  //   padding: `${theme.spacing.unit * 8}px 0`,
  // }
});

class ConferencesList extends Component {
  render() {
    const {conferences, classes} = this.props;

    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Grid container spacing={40}>
          {/* {conferences.map(function(conf, index) { */}
          {conferences.map(conf => (
            <Grid item key={conf} sm={6} md={4} lg={3}>
              <ConferenceDetail conference={conf} className={classes.card}/>
            </Grid>
          ))}
        </Grid>
      </div>

      // <div className="conferences-list">
      //   {conferences.map(function(conf, index) {
      //     return conferences.length > 0 && <ConferenceDetail key={index} conference={conf}/>
      //   })}
      // </div>
    );
  }
}

export default withStyles(styles)(ConferencesList);