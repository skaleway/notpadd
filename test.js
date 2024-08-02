const encryptBase64 = (text: string) => {
  return Buffer.from(text).toString("base64url");
};

const encryptedUserId = encryptBase64(userId);
const encryptedSpaceKey = encryptBase64(spaceKey);

console.log({ encryptedUserId, encryptedSpaceKey }); // e.g., dXNlcl8yaHBiQzJTM...
//console.log(encryptedSpaceKey); // e.g., c1BSWGU4VFRuUA==

const decryptBase64 = (base64Text: string) => {
  return Buffer.from(base64Text, "base64").toString("utf-8");
};

const decryptedUserId = decryptBase64(encryptedUserId);
const decryptedSpaceKey = decryptBase64(encryptedSpaceKey);

console.log({ decryptedUserId, decryptedSpaceKey });
