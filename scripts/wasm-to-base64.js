const { readFileSync, writeFileSync } = require("fs");

const wasmCode = readFileSync(`${__dirname}/../lib/mappings.wasm`);
const encoded = Buffer.from(wasmCode, "binary").toString("base64");

writeFileSync(
  `${__dirname}/../lib/mappings.js`,
  `/* eslint-disable */\nmodule.exports = "${encoded}"`
);
