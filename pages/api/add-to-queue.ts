import { NextApiRequest, NextApiResponse } from "next";
import QueueExample from "./queues/queue-example";

const AddToQueue = async (req: NextApiRequest, res: NextApiResponse) => {
  await QueueExample.add({ foo: "bar" });
  res.status(200).end();
};

export default AddToQueue;
