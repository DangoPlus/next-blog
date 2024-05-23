import crypto from "crypto";
export function getCurrentTimeAndRandomHash() {
  const currentTime = new Date().toISOString();
  const randomBytes = crypto.randomBytes(16);
  const hash = crypto.createHash("sha256").update(randomBytes).digest("hex");

  return {
    currentTime,
    hash,
  };
}

// const result = getCurrentTimeAndRandomHash();
// console.log(result);
