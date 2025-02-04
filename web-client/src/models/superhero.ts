export type Superhero = {
  id: string;
  name: string;
  power: string;
  humility: number;
};
export type CreateSuperheroDto = Omit<Superhero, "id">;

export const get = async (): Promise<Superhero[]> => {
  return Promise.resolve([]);
};

export const create = async (
  superhero: CreateSuperheroDto
): Promise<Superhero> => {
  return Promise.resolve({ ...superhero, id: "id" });
};
