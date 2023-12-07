import { CityDataModel } from "../../models/cityDataModel";
import { readData, writeData } from "../../services/dataService";

export const updateCity = (
  postalCode: string,
  updatedData: CityDataModel
): void => {
  const data = readData();
  const updatedIndex = data.findIndex(
    (city) => city.fields.code_postal === postalCode
  );

  if (updatedIndex !== -1) {
    data[updatedIndex] = { ...data[updatedIndex], ...updatedData };
    writeData(data);
  }
};
