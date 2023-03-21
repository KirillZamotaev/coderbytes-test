/**
 * For candidate variable, we set its default value equal to TRIVIAL_PARTITION_KEY,
 * so we will invevitebly assign TRIVIAL_PARTITION_KEY in case we didnt assigned anything else before;
 * 
 * If we assume that that event.partitionKey is string, we can remove string check, and .diget("hex") seems to return string;
 * Moved repeated opeartions with crypto methods to a separate function digestKey;
 * Moved all checks wich depended from event presence into event case block;
 * 
 */

const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = TRIVIAL_PARTITION_KEY;
  
  if (!event) {
    return candidate;
  }

  const digestKey = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

  const partitionKey = typeof event.partitionKey !== 'string' ? JSON.stringify(event.partitionKey) : event.partitionKey;
  candidate = partitionKey || digestKey(JSON.stringify(event));

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = digestKey(candidate);
  }

  return candidate;
};
