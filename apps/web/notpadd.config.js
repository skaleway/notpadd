import { createNotpaddConfig } from "@notpadd/core";

export const notpadd = async () =>
  await createNotpaddConfig({
    spaceId: "fjgkhljdlaf",
    spaceSecrete: "datiuidafdajnfadfuiandfiuanduif",
    outputDir: "content",
    publishOnly: true,
  });
