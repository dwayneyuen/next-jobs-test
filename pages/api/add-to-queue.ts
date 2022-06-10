import { NextApiRequest, NextApiResponse } from "next";
import QueueExample from "./jobs/queues/queue-example";

const AddToQueue = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`[AddToQueue] called with ${req.body}`);
  await QueueExample.enqueue({ foo: "bar" });
  return "Hello world!";
};

export default AddToQueue;
