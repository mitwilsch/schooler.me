import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Footer, Header } from './Components';
import FamilyTree from './Components/FamilyTree';
import Main from './Components/Main';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <Route exact={true} path="/" component={Main} />
      <Route path="/family-tree" component={FamilyTree} />

      <Footer />
    </React.Fragment>
  );
};

export default App;
