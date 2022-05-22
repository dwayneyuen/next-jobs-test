import { RepeatableJob } from "@dwayneyuen/next-jobs";

const AsyncRepeatableJobExample = RepeatableJob("* * * * *", async () => {
  console.log("[AsyncRepeatableJobExample.callback] callback executed");
});

export default AsyncRepeatableJobExample;
