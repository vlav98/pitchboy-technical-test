import fs from "fs";
import path from "path";
import { CityDataModel } from "../models/cityDataModel";

const dataPath = path.resolve(
  __dirname,
  "../../../resources/laposte_hexasmal.json"
);

export function readData(): CityDataModel[] {
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
}

export function writeData(data: CityDataModel[]): void {
  fs.writeFileSync(dataPath, JSON.stringify(data), "utf8");
}
