//import tools
import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
//import component
import PokemonForm from "../components/pokemon-form";
//import models
import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";

type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({
  match,
}) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    POKEMONS.forEach((pokemon) => {
      if (match.params.id === pokemon.id.toString()) {
        setPokemon(pokemon);
      }
    });
  }, [match.params.id]);

  //style
  const Body = styled.div`
    box-sizing: border-box;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;
  const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 900px;
  `;
  const Col = styled.div``;

  return (
    <Body>
      <Row>
        {pokemon ? (
          <Col>
            <h2 className="header center">Éditer {pokemon.name}</h2>
            <PokemonForm pokemon={pokemon}></PokemonForm>
          </Col>
        ) : (
          <h4 className="center">Aucun pokémon à afficher !</h4>
        )}
      </Row>
    </Body>
  );
};

export default PokemonEdit;
