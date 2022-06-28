import { NextApiRequest, NextApiResponse } from "next";
import QueueExample from "./jobs/queues/queue-example";

const AddToQueue = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`[AddToQueue] called with ${req.body}`);
  await QueueExample.enqueue({ foo: "bar" });
  res.status(200).json({
    status: "success",
  });
};

export default AddToQueue;
