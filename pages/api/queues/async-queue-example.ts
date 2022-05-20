import { JobQueue } from "@dwayneyuen/next-jobs";

type AsyncQueueExampleJob = {
  foo: string;
};

const AsyncQueueExample = JobQueue(async (job: AsyncQueueExampleJob) => {
  console.log("[AsyncQueueExample.callback] executed:", job);
});

export default AsyncQueueExample;
