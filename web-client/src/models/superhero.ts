import axios from "axios";

export type Superhero = {
  id: string;
  name: string;
  power: string;
  humility: number;
};
export type CreateSuperheroDto = Omit<Superhero, "id">;

export const get = async (): Promise<Superhero[]> => {
  const response = await axios.get("/api/superheroes");
  return response.data as Superhero[];
};

export const create = async (
  superhero: CreateSuperheroDto
): Promise<Superhero | undefined> => {
  return await axios.post("/api/superheroes", superhero);
};
