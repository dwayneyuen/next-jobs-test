import { ScheduledJob } from "@dwayneyuen/next-jobs";

const ScheduledJobExample = ScheduledJob("* * * * *", () => {
  console.log("[ScheduledJobExample.callback] callback executed");
});

export default ScheduledJobExample;
