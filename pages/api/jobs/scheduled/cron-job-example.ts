import { CronJob } from "@dwayneyuen/next-cron";
import QueueExample from "../queues/queue-example";

const CronJobExample = CronJob("* * * * *", async () => {
  console.log("[CronJobExample.callback] callback executed before");
  await QueueExample.enqueue({ foo: "bar" });
  console.log("[CronJobExample.callback] callback executed after");
  return "Hello world!";
});

export default CronJobExample;
