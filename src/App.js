import { Box } from '@chakra-ui/react';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Blog from './components/blog';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
    <Box>
      <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/blog"><Blog/></Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
