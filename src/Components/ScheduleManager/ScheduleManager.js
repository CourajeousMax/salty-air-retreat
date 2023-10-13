export async function getScheduleData() {
  const response = await fetch("/api/schedule");
  const scheduleData = await response.json();
  return scheduleData;
}

export async function updateScheduleData(updatedData) {
  const response = await fetch("/api/update-schedule", {
    method: "POST",
    body: JSON.stringify(updatedData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}
