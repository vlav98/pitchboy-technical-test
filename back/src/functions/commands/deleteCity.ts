import { readData, writeData } from "../../services/dataService";

export const deleteCity = (postalCode: string): void => {
  const data = readData();
  const newData = data.filter((city) => city.fields.code_postal !== postalCode);
  writeData(newData);
};
