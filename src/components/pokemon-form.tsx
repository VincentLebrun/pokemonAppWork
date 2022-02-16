//import tools
import React, { FunctionComponent, useState } from "react";

import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

//import model will be useless with api
import Pokemon from "../models/pokemon";

//import helpers
import formatType from "../helpers/format-type";
import { useHistory } from "react-router-dom";

type Props = {
  pokemon: Pokemon;
};

// type field
type Field = {
  value?: any;
  error?: string;
  isValid?: boolean;
};
// types form

type Inputs = {
  name: Field;
  hp: Field;
  cp: Field;
  types: Field;
};
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

  flex-direction: column;
`;
const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  text-decoration: none;
`;
const CardAction = styled.div``;
const BodyInput = styled.div`
  display: flex;
  flex-direction: row;
`;
const Input = styled.input.attrs({ type: "checkbox" })`
  display: flex;
`;
const Text = styled.p`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  border-radius: 25px;
  width: 5em;
  height: 3em;
  box-shadow: 0px 0px 20px 8px #42424186;
`;

const PokemonForm: FunctionComponent<Props> = ({ pokemon }) => {
  const [form, setForm] = useState<Inputs>({
    name: { value: pokemon.name, isValid: true },
    hp: { value: pokemon.hp, isValid: true },
    cp: { value: pokemon.cp, isValid: true },
    types: { value: pokemon.types, isValid: true },
  });

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
  const hasType = (type: string): boolean => {
    return form.types.value.includes(type);
  };
  // function to update the value of input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };
    setForm({ ...form, ...newField });
  };
  // verification to checkbox and update
  const selectType = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const checked = e.target.checked;
    let newField: Field;
    if (checked) {
      const newTypes: string[] = form.types.value.concat([type]);
      newField = { value: newTypes };
    } else {
      const newTypes: string[] = form.types.value.filter(
        (currentType: string) => currentType !== type
      );
      newField = { value: newTypes };
    }
    setForm({ ...form, ...{ types: newField } });
  };
  const isTypesValid = (type: string): boolean => {
    if (form.types.value.length === 1 && hasType(type)) {
      return false;
    }
    if (form.types.value.length >= 3 && !hasType(type)) {
      return false;
    }
    return true;
  };
  //form using maybe moved in other folder after
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<Inputs> = () => {
    history.push(`/pokemons/${pokemon.id}`);
    console.log(form);
  };
  const history = useHistory();
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
              <input
                value={form.name.value}
                {...register("name", { required: true, maxLength: 20 })}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.name && "Veuillez renseigner un nom"}
            </FormGroup>
            {/* Pokemon hp */}
            <FormGroup>
              <label>Point de vie</label>
              <input
                value={form.hp.value}
                type="number"
                {...register("hp", { min: 1, max: 100, maxLength: 20 })}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.hp && "Veuillez renseigner un nombre de Point de vie"}
            </FormGroup>
            {/* Pokemon cp */}
            <FormGroup>
              <label>Dégâts</label>
              <input
                value={form.cp.value}
                type="number"
                {...register("cp", { min: 1, max: 100, maxLength: 20 })}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.cp && "Veuillez renseigner un nombre de point de combat."}
            </FormGroup>
            {/* Pokemon types */}
            <FormGroup>
              <label>Types</label>
              {types.map((type) => (
                <BodyInput key={type}>
                  <Input
                    checked={hasType(type)}
                    onChange={(e) => selectType(type, e)}
                    disabled={!isTypesValid(type)}
                  ></Input>
                  <Text
                    style={{
                      backgroundColor: formatType(type),
                    }}
                  >
                    {type}
                  </Text>
                </BodyInput>
              ))}
            </FormGroup>
          </CardContent>
          <CardAction>
            {/* Submit button */}
            <input
              style={{
                width: "7em",
                height: "3em",
                borderRadius: "2em",
                color: "white",
                backgroundColor: "#0A66C2",
              }}
              type="submit"
            />
          </CardAction>
        </CardStacked>
      </CardHoverable>
    </form>
  );
};

export default PokemonForm;
