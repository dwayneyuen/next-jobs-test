import { NextApiRequest, NextApiResponse } from "next";
import ScheduledJobExample from "./jobs/scheduled-job-example";

const StartScheduledJobExample = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await ScheduledJobExample.start();
  res.status(200).end();
};

export default StartScheduledJobExample;
