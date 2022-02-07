//import tools
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//import component
import Pokemon from "../models/pokemon";

//import helpers
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";

//typings
type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};

// Render
const PokemonCard: FunctionComponent<Props> = ({
  pokemon,
  borderColor = "#009688",
}) => {
  const [color, setColor] = useState<string>();

  const history = useHistory();

  ///////////////////////////////////FUNCTION////////////////////////
  //Border color on hover
  const goToPokemon = (id: number) => {
    history.push(`/pokemons/${id}`);
  };

  const showBorder = () => {
    setColor(borderColor);
  };
  const hideBorder = () => {
    setColor("#f5f5f5");
  };

  ///////////////////////////////////STYLE////////////////////////

  const CardHorizontal = styled.div`
    border: solid 4px #f5f5f5;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  const CardImage = styled.div``;
  const CardStacked = styled.div`
    width: 100px;
  `;
  const CardContent = styled.div``;
  const Text = styled.p``;
  return (
    <CardHorizontal
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
      style={{ borderColor: color }}
      onClick={() => goToPokemon(pokemon.id)}
    >
      <CardImage>
        <img src={pokemon.picture} alt={pokemon.name} />
      </CardImage>
      <CardStacked>
        <CardContent>
          <Text>{pokemon.name}</Text>
          <Text>
            <small>{formatDate(pokemon.created)}</small>
          </Text>
          {pokemon.types.map((type) => (
            <span key={type} className={formatType(type)}>
              {type}
            </span>
          ))}
        </CardContent>
      </CardStacked>
    </CardHorizontal>
  );
};
export default PokemonCard;
