import { RepeatableJob } from "@dwayneyuen/next-jobs";

const AsyncRepeatableJobExample = RepeatableJob(
  { cron: "* * * * *" },
  async () => {
    console.log("[AsyncRepeatableJobExample.callback] callback executed");
  }
);

export default AsyncRepeatableJobExample;
