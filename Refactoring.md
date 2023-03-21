# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
- For candidate variable, we set its default value equal to TRIVIAL_PARTITION_KEY,
so we will invevitebly assign TRIVIAL_PARTITION_KEY in case we didnt assigned anything else before; 
- If we assume that that event.partitionKey is string, we can remove string check, and .diget("hex") seems to return string;
- Moved repeated opeartions with crypto methods to a separate function digestKey;
- Moved all checks which required event presence after event case block;