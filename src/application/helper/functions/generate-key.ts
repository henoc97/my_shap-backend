import crypto from "crypto";

const secretKey = crypto.randomBytes(64).toString("hex");

const tenantKey = crypto.randomBytes(4).toString("hex");

console.log(secretKey);
