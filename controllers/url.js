const shortId = require("shortid");
const URL = require("../models/url.js");

async function handelGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required!" });
  const shortID = shortId();
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

async function handelRedirectUrl(req, res) {
  const shortId = req.params.shortId;
  const getOriginalRecord = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: { visitHistory: { timestmap: Date.now() } },
    }
  );

  return res.redirect(getOriginalRecord.redirectUrl);
}

async function handelUrlAnalytics(req, res) {
  const shortId = req.params.shortId;
  const urlAnalytics = await URL.findOne({ shortId });

  return res.json({
    totalClicks: urlAnalytics.visitHistory.length,
    analytics: urlAnalytics.visitHistory,
  });
}
module.exports = {
  handelGenerateNewShortURL,
  handelRedirectUrl,
  handelUrlAnalytics,
};
