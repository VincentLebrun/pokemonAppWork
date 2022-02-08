//import tools
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

//import model will be useless with api
import Pokemon from "../models/pokemon";

//import helpers
import formatType from "../helpers/format-type";

type Props = {
  pokemon: Pokemon;
};

const PokemonForm: FunctionComponent<Props> = ({ pokemon }) => {
  //types pokemon
  const types: string[] = [
    "Plante",
    "Feu",
    "Eau",
    "Insecte",
    "Normal",
    "Electrik",
    "Poison",
    "Fée",
    "Vol",
    "Combat",
    "Psy",
  ];
  // types form
  type Inputs = {
    name: String;
    hp: Number;
    cp: Number;
    type: String;
  };
  //form using maybe moved in other folder after
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("name"));
  console.log(watch("hp"));
  console.log(watch("cp"));
  console.log(watch("type"));

  // style

  const CardHoverable = styled.div``;
  const CardImage = styled.div`
    display: flex;
    justify-content: center;
    img {
      width: 250px;
    }
  `;
  const CardStacked = styled.div``;
  const CardContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
  `;
  const FormGroup = styled.div`
    box-shadow: 10px 5px 5px grey;
    margin-bottom: 5px;
  `;
  const CardAction = styled.div``;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardImage>
        <img src={pokemon.picture} alt={pokemon.name} />
      </CardImage>

      <CardHoverable>
        <CardStacked>
          <CardContent>
            {/* Pokemon name */}
            <FormGroup>
              <label>Nom</label>
              <input {...register("name", { required: true, maxLength: 20 })} />
            </FormGroup>
            {/* Pokemon hp */}
            <FormGroup>
              <label>Point de vie</label>
              <input
                type="number"
                {...register("hp", { min: 1, max: 100, maxLength: 20 })}
              />
            </FormGroup>
            {/* Pokemon cp */}
            <FormGroup>
              <label>Dégâts</label>
              <input
                type="number"
                {...register("cp", { min: 1, max: 100, maxLength: 20 })}
              />
            </FormGroup>
            {/* Pokemon types */}
            <FormGroup>
              <label>Types</label>
              {types.map((type) => (
                <div key={type}>
                  <label>
                    <input id={type}></input>

                    <p className={formatType(type)}>{type}</p>
                  </label>
                </div>
              ))}
            </FormGroup>
          </CardContent>
          <CardAction>
            {/* Submit button */}
            <input type="submit" name="Valider" />
          </CardAction>
        </CardStacked>
      </CardHoverable>
    </form>
  );
};

export default PokemonForm;
