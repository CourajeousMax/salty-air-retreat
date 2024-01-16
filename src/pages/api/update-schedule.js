export default (req, res) => {
  if (req.method === 'POST') {
    const updatedScheduleData = JSON.parse(req.body);
     fs.writeFileSync('../../Data/schedule-data.json', JSON.stringify(updatedScheduleData));

    res.status(200).json({ message: 'Schedule data updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};