import { createNotpaddConfig } from "notpadd";

export const notpadd = async () =>
  await createNotpaddConfig({
    publicKey: "user_2tW64oEciRvBPNi9Bu25Oxq8DCE",
    secreteKey: "cm8pxy6ri00069tztxusqqx3t",
    outputDir: "content",
    publishOnly: true,
  });
