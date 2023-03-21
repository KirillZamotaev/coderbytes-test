const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal stringified key when given no input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "123123441"});
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when event object without partion key", () => {
    const trivialKey = deterministicPartitionKey({ });
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal stringified key when given event object with partition key", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "123123441"});
    expect(trivialKey).toBe("0");
  });
});
