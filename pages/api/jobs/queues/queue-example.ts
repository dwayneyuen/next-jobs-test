import { MessageQueue } from "@dwayneyuen/next-cron";

type QueueExampleJob = {
  foo: string;
};

const QueueExample = MessageQueue("queue-example", async (job: QueueExampleJob) => {
  console.log("[QueueExample.callback] processing job:", job);
  return "Hello world!";
});

export default QueueExample;
