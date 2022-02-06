import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
//import models
import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";
import PokemonCard from "../components/pokemon-card";

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  //mounting component
  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);
  const Container = styled.div`
    box-sizing: border-box;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;
  const TitleContainer = styled.div`
    width: 1100px;
    display: flex;

    justify-content: center;
  `;
  const Title = styled.h1`
    font-weight: bold;
  `;

  return (
    <Container>
      <TitleContainer>
        <Title>Pokédex</Title>
      </TitleContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Container>
  );
};
export default PokemonList;
