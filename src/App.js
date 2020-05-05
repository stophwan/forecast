import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import SearhBar from './components/SearchBar'
import WeatherList from './components/WeatherList'
import ErrorMessage from './components/ErrorMessage'

function App() {
  return (
    <Container className="App">
      <SearhBar/>
      <ErrorMessage/>
      <WeatherList/>
    </Container>
  );
}

export default App;
