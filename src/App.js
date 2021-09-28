import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect, Link } from 'react-router-dom';
import NavComp from './components/NavComp';
import PokemonDetail from './components/PokemonDetail';
import Pokemons from './components/Pokemons'

function App() {
  return (
    <div>
      <Router>
        <NavComp/>
        <Switch>
          <Route path='/' exact component={Pokemons} />
          <Route path='/pokemon/:pokemon' component={PokemonDetail} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  )
}

export default App
