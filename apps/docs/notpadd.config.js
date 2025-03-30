import { createNotpaddConfig } from "notpadd";

export const notpadd = async () =>
  await createNotpaddConfig({
    publicKey: "9rLD4tzOOu",
    secreteKey: "cm8pxy6ri00069tztxusqqx3t",
    outputDir: "content",
    publishOnly: true,
  });
