const express = require("express");
const router = express.Router();

const {
  Libra,
  Hafinix,
  Migdal,
  Aylon,
  Wesure,
    Menora,
Hash
} = require("../controllers/userController");

router.post("/search", Hash)


module.exports = router;
