const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestmap: { type: String } }],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
