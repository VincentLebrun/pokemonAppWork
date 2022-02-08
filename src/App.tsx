//import tools
import React, { FunctionComponent } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import styled from "styled-components";

//import Page
import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-detail";
import PokemonEdit from "./pages/pokemon-edit";
import PageNotFound from "./pages/page-not-found";

//function rendering
const App: FunctionComponent = () => {
  const ContainerNav = styled.div``;
  const NavRouter = styled.nav``;
  const NavWrapper = styled.div``;
  return (
    <Router>
      <ContainerNav>
        <NavRouter>
          <NavWrapper>
            <Link to="/">Pokédex</Link>
          </NavWrapper>
        </NavRouter>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
          <Route path="/pokemons/:id" component={PokemonDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </ContainerNav>
    </Router>
  );
};
export default App;
