import { NextApiRequest, NextApiResponse } from "next";
import RepeatableJobExample from "./jobs/scheduled/repeatable-job-example";

const StartRepeatableJobExample = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await RepeatableJobExample.start();
  res.status(200).end();
};

export default StartRepeatableJobExample;
