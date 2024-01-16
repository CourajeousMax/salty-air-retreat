// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import scheduleData from "../../../src/Data/schedule-data.json"; 

export default (req, res) => {
  res.status(200).json(scheduleData);
};
