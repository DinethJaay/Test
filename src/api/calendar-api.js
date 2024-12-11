const axios = require("axios");
const { client_id, client_secret } = require("../../config/google-api.json");

async function getGoogleCalendarFreeBusy(calendarId, timeMin, timeMax, apiKey) {
  if (!calendarId || typeof calendarId !== "string") {
    throw new Error("Invalid calendarId: Expected a non-empty string.");
  }
  if (!timeMin || !timeMax) {
    throw new Error(
      "Invalid time range: Both timeMin and timeMax must be specified."
    );
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("Invalid apiKey: Expected a non-empty string.");
  }

  const url = `https://www.googleapis.com/calendar/v3/freeBusy`;
  const requestBody = {
    timeMin,
    timeMax,
    items: [{ id: calendarId }],
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const busyIntervals = response.data.calendars[calendarId]?.busy || [];
    console.log(
      `Fetched ${busyIntervals.length} busy intervals for calendar: ${calendarId}`
    );
    return busyIntervals;
  } catch (error) {
    console.error(
      `Failed to fetch free/busy intervals for calendar (${calendarId}):`,
      error.response?.data || error.message
    );
  }
}

module.exports = getGoogleCalendarFreeBusy;
