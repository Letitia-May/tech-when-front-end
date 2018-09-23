import React, { Component } from 'react';
import ConferencesList from './conferences/ConferencesList';
import { findAll } from './conferencesRepository';
import { request } from './request';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  pageHeader: {
    padding: theme.spacing.unit * 3
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }

  componentDidMount() {
    findAll(request)
      .then(conferences => {
        this.setState(conferences);
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              TechWhen
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="display1" className={classes.pageHeader} gutterBottom>
          Conferences
        </Typography>
        <ConferencesList conferences={this.state.data}/>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
