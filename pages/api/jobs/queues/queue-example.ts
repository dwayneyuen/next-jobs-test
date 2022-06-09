import { JobQueue } from "@dwayneyuen/next-jobs";

type QueueExampleJob = {
  foo: string;
};

const QueueExample = JobQueue((job: QueueExampleJob) => {
  console.log("[QueueExample.callback] executed", job);
});

export default QueueExample;
