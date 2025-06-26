const express = require("express");
const {
  handelGenerateNewShortURL,
  handelRedirectUrl,
  handelUrlAnalytics,
} = require("../controllers/url.js");
const router = express.Router();

router.post("/", handelGenerateNewShortURL);
router.get("/:shortId", handelRedirectUrl);
router.get("analytics/:shortId", handelUrlAnalytics);

module.exports = router;
