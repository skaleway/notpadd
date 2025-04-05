import { createNotpaddConfig } from "notpadd";

export const notpadd = async () =>
  await createNotpaddConfig({
    publicKey: "AW1iXtEhep",
    secreteKey: "cm941cvwt0000l5042dx48gww",
    outputDir: "content",
    publishOnly: true,
  });
