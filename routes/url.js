const express = require("express");
const {
  handelGenerateNewShortURL,
  handelRedirectUrl,
  handelUrlAnalytics,
} = require("../controllers/url.js");
const router = express.Router();

router.post("/", handelGenerateNewShortURL);
router.get("/analytics/:shortId", handelUrlAnalytics);
router.get("/:shortId", handelRedirectUrl);

module.exports = router;
