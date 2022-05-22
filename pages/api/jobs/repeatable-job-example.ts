import { RepeatableJob } from "@dwayneyuen/next-jobs";

const RepeatableJobExample = RepeatableJob("* * * * *", () => {
  console.log("[RepeatableJobExample.callback] callback executed");
});

export default RepeatableJobExample;
