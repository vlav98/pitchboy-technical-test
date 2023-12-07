export interface CityDataModel {
  datasetid: string;
  recordid: string;
  fields: {
    nom_de_la_commune: string;
    libelle_d_acheminement: string;
    code_postal: string;
    coordonnees_gps: [number, number];
    code_commune_insee: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  record_timestamp: string;
}
