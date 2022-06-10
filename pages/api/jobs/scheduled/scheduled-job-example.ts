import { ScheduledJob } from "@dwayneyuen/next-jobs";
import QueueExample from "../queues/queue-example";

const ScheduledJobExample = ScheduledJob("0 * * * *", async () => {
  console.log("[ScheduledJobExample.callback] callback executed");
  await QueueExample.enqueue({ foo: "bar" });
  return "Hello world!";
});

export default ScheduledJobExample;
