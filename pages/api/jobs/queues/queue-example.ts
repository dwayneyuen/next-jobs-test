import { JobQueue } from "@dwayneyuen/next-jobs";

type QueueExampleJob = {
  foo: string;
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const QueueExample = JobQueue("queue-example", async (job: QueueExampleJob) => {
  console.log("[QueueExample.callback] started", job);
  await delay(5000);
  console.log("[QueueExample.callback] completed", job);
});

export default QueueExample;
