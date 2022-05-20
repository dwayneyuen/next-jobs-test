import { NextApiRequest, NextApiResponse } from "next";
import AsyncRepeatableJobExample from "./jobs/async-repeatable-job-example";

const StartAsyncRepeatableJobExample = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await AsyncRepeatableJobExample.start();
  res.status(200).end();
};

export default StartAsyncRepeatableJobExample;
