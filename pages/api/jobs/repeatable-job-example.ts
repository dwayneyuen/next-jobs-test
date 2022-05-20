import { RepeatableJob } from "@dwayneyuen/next-jobs";

const RepeatableJobExample = RepeatableJob({ cron: "* * * * *" }, () => {
  console.log("[RepeatableJobExample.callback] callback executed");
});

export default RepeatableJobExample;
