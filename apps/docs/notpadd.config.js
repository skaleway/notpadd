import { createNotpaddConfig } from "notpadd";

export const notpadd = async () =>
  await createNotpaddConfig({
    spaceId: "user_2tW64oEciRvBPNi9Bu25Oxq8DCE",
    spaceSecrete: "datiuidafdajnfadfuiandfiuanduif",
    outputDir: "content",
    publishOnly: true,
  });
