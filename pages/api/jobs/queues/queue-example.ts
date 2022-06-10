import { JobQueue } from "@dwayneyuen/next-jobs";

type QueueExampleJob = {
  foo: string;
};

const QueueExample = JobQueue("queue-example", async (job: QueueExampleJob) => {
  console.log("[QueueExample.callback] processing job:", job);
  return "Hello world!";
});

export default QueueExample;
