import http from "./http";
import { getPaginationQuery } from "@/utils";

const getGenerations = async (offset, limit) => {
  try {
    const query = getPaginationQuery("generation", offset, limit);
    const res = await http.get(query);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

const getGeneration = async (name) => {
  try {
    const res = await http.get(`generation/${name}`);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

export { getGenerations, getGeneration };
