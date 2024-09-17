import http from "./http";
import { getPaginationQuery } from "@/utils";

const getPokemons = async (offset, limit) => {
  try {
    const query = getPaginationQuery("pokemon", offset, limit);
    const res = await http.get(query);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

const getPokemon = async (name) => {
  try {
    const res = await http.get(`pokemon/${name}`);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

export { getPokemons, getPokemon };
