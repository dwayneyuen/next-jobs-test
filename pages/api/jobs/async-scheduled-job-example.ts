import { ScheduledJob } from "@dwayneyuen/next-jobs";

console.log("async scheduled job example imported");

const AsyncScheduledJobExample = ScheduledJob("* * * * 1", async () => {
  console.log("[AsyncScheduledJobExample.callback] callback executed");
});

export default AsyncScheduledJobExample;
