import { NextApiRequest, NextApiResponse } from "next";
import ScheduledJobExample from "./jobs/scheduled-job-example";
import AsyncScheduledJobExample from "./jobs/async-scheduled-job-example";

const StartAsyncScheduledJobExample = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await AsyncScheduledJobExample.start();
  res.status(200).end();
};

export default StartAsyncScheduledJobExample;
