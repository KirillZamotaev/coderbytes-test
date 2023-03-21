const { deterministicPartitionKey } = require("./dpk");

const largeKey = 'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a8622';
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
    expect(trivialKey).toBe(largeKey);
  });
});
