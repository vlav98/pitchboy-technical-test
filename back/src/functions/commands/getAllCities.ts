import { readData } from "../../services/dataService";

export const getAllCities = (req: Request, res: Response): void => {
  const data = readData();
  res.json(data);
};
