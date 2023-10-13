export default (req, res) => {
  if (req.method === 'POST') {
    const updatedScheduleData = JSON.parse(req.body);
    // Save the updated schedule data to a database or file
    // For simplicity, you can save it to a JSON file.
    Example: fs.writeFileSync('../../Data/schedule-data.json', JSON.stringify(updatedScheduleData));

    res.status(200).json({ message: 'Schedule data updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};