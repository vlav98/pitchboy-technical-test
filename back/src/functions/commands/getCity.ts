import { CityDataModel } from "../../models/cityDataModel";
import { readData } from "../../services/dataService";

export const getCity = (postalCode: string): CityDataModel | null => {
  const data = readData();
  return data.find(city => city.fields.code_postal === postalCode) || null;
};