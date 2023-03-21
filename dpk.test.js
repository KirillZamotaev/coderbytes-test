const { deterministicPartitionKey } = require("./dpk");

const largeKey = 'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a8622c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a8622';
const digestedKey = '44427228fe94521603275a29c63a98705b9d00e369d43b21c2b2f76ceb0228e92c0302ccb574ac731381ab78b576cccf0a1986593cedd757f238b713b0f836a6';
const largeEmptyObjectKey = 'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862';

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal stringified key when given event object with partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "123123441"});
    expect(trivialKey).toBe("123123441");
  });

  it("Returns the literal '0' when event object without partiton key", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe(largeEmptyObjectKey);
  });

  it("Returns the literal stringified key when given event object with partition key not a string", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 123441 });
    expect(trivialKey).toBe("123441");
  });

  it("Returns the literal stringified key when the partition string is larger than 256", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: largeKey });
    expect(trivialKey).toBe(digestedKey);
  });
});
