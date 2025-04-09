import { createNotpaddConfig } from "notpadd";

export const notpadd = async () =>
  await createNotpaddConfig({
    publicKey: "Qxg9aeTvYg",
    secreteKey: "cm99zgx4100009t7v977hegzs",
    outputDir: "content",
    publishOnly: true,
  });
