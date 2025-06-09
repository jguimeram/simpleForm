export type RegisterType = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  country: Countries["id"];
  password: number;
  checkbox: boolean;
};

export type Countries = {
  id: number;
  name: string;
};

export const countries: Array<Countries> = [
  { id: 0, name: "select your country" },
  { id: 1, name: "Spain" },
  { id: 2, name: "Italy" },
  { id: 3, name: "England" },
  { id: 4, name: "France" },
  { id: 5, name: "Portugal" },
];
