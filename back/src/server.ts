const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

/**
 *
 * __Une route pour accèder à la liste complète__: Un utilisateur veut accéder à la liste complète des villes.</br>
 * __Une route pour accèder à un code postal précis__: Un utilisateur veut accéder à un code postal en particulier.</br>
 * __Une route pour modifier une entrée__: Un utilisateur veut modifier une information lié au code postal.</br>
 * __Une route pour supprimer une entrée__: Un utilisateur veut supprimé une entrée via le code postal.</br>
 *
 */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
