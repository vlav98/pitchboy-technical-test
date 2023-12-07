import express, { Router } from "express";

import { CityDataModel } from "../models/cityDataModel";
import { readData } from "../services/dataService";
import { getCity } from "../functions/commands/getCity";
import { deleteCity } from "../functions/commands/deleteCity";
import { updateCity } from "../functions/commands/updateCity";

const router: Router = express.Router();

router.get("/api/data", (req, res) => {
  res.json(readData());
});

router.get("/api/data:postalCode", (req, res) => {
  const { postalCode } = req.params;
  const data = getCity(postalCode);
  res.json(data);
});

router.put("/api/data:postalCode", (req, res) => {
  const { postalCode } = req.params;
  const updatedData: CityDataModel = req.body;
  updateCity(postalCode, updatedData);
  res.json({
    message: "Data deleted sucessfully",
    deletedPostalCode: postalCode,
  });
});

router.delete("/api/data:postalCode", (req, res) => {
  const { postalCode } = req.params;
  deleteCity(postalCode);
  res.json({
    message: "Data deleted sucessfully",
    deletedPostalCode: postalCode,
  });
});

export default router;
