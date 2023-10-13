// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import scheduleData from "../../../src/Data/schedule-data.json"; // Import or fetch your schedule data

export default (req, res) => {
  res.status(200).json(scheduleData);
};
