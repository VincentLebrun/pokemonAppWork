//import tools
import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import styled from "styled-components";

//imprt models will be useless with api
import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";

//import helpers
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";

//typing
type Params = { id: string };

//functionnal component
const PokemonDetail: FunctionComponent<RouteComponentProps<Params>> = ({
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

  const Container = styled.div``;
  const Row = styled.div``;
  const ColDisplay = styled.div``;
  const HeaderCenter = styled.h2``;
  const CardHoverable = styled.div``;
  const CardImage = styled.div``;
  const CardStacked = styled.div``;
  const CardContent = styled.div``;
  const BorderedStriped = styled.table``;

  const Error = styled.h4``;
  return (
    <Container>
      {pokemon ? (
        <Row>
          <ColDisplay>
            <HeaderCenter>{pokemon.name}</HeaderCenter>
            <CardHoverable>
              <CardImage>
                <img src={pokemon.picture} alt={pokemon.name} />
                <Link to={`/pokemons/edit/${pokemon.id}`}> edit</Link>
              </CardImage>
              <CardStacked>
                <CardContent>
                  <BorderedStriped>
                    <tr>
                      <td>Nom</td>
                      <td>
                        <strong>{pokemon.name}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Points de vie</td>
                      <td>
                        <strong>{pokemon.hp}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Dégâts</td>
                      <td>
                        <strong>{pokemon.cp}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Types</td>
                      <td>
                        {pokemon.types.map((type) => (
                          <span key={type} className={formatType(type)}>
                            {type}
                          </span>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td>Date de création</td>
                      <td>{formatDate(pokemon.created)}</td>
                    </tr>
                  </BorderedStriped>
                  <Link to="/">Retour</Link>
                </CardContent>
              </CardStacked>
            </CardHoverable>
          </ColDisplay>
        </Row>
      ) : (
        <Error></Error>
      )}
    </Container>
  );
};
export default PokemonDetail;
