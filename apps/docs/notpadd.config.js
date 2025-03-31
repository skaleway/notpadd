import { createNotpaddConfig } from "notpadd";

export const notpadd = async () =>
  await createNotpaddConfig({
    publicKey: "fr6ebeIOyk",
    secreteKey: "cm8wu3mu600009tb58mzq41xh",
    outputDir: "content",
    publishOnly: true,
  });
