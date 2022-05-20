import { ScheduledJob } from "@dwayneyuen/next-jobs";

console.log("scheduled job example imported");

const ScheduledJobExample = ScheduledJob("* * * * *", () => {
  console.log("[ScheduledJobExample.callback] callback executed");
});

export default ScheduledJobExample;
