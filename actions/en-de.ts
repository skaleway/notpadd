export const encryptBase64 = (text: string) => {
  return Buffer.from(text).toString("base64url");
};

export const decryptBase64 = (base64Text: string) => {
  return Buffer.from(base64Text, "base64").toString("utf-8");
};
