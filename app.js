const DateExtension = require("./src/js/date-extension");
const orderSalesByTotal = require("./src/js/order-sales");
const projectObject = require("./src/js/object-projection");
const getGoogleCalendarFreeBusy = require("./src/api/calendar-api");
const { logSuccess, logError } = require("./src/utils/logger");

(async () => {
  try {
    // Task 1.1: Calculate days between two dates
    const d1 = new Date("2024-09-01");
    const d2 = new Date("2024-09-15");

    if (d1 && d2) {
      logSuccess(`Days between dates: ${d1.daysTo(d2)}`);
    } else {
      logError("Invalid dates provided for Task 1.1");
    }

    // Task 1.2: Order sales by total value
    const sales = [
      { amount: 10000, quantity: 10 },
      { amount: 2000, quantity: 5 },
      { amount: 5000, quantity: 2 },
    ];
    const orderedSales = orderSalesByTotal(sales);
    logSuccess("Ordered Sales:");
    console.table(orderedSales);

    // Task 1.3: Project object properties based on a prototype
    const source = { a: 1, b: 2, c: 3 };
    const prototype = { a: 0, c: 0 };

    if (source && prototype) {
      const projected = projectObject(source, prototype);
      logSuccess("Projected Object:");
      console.log(projected);
    } else {
      logError("Invalid source or prototype for Task 1.3");
    }

    // Task 2.1: Fetch Google Calendar free/busy intervals
    const calendarId = "calendar_id"; // Calander ID
    const timeMin = "2024-09-01T00:00:00Z";
    const timeMax = "2024-09-30T23:59:59Z";
    const apiKey = "API_KEY"; // API KEY

    if (calendarId && timeMin && timeMax && apiKey) {
      const busyIntervals = await getGoogleCalendarFreeBusy(
        calendarId,
        timeMin,
        timeMax,
        apiKey
      );
      logSuccess("Google Calendar Free/Busy Intervals:");
      console.log(busyIntervals);
    } else {
      logError("Missing required inputs");
    }
  } catch (error) {
    logError("An error occurred during execution:");
    console.error(error.message || error);
  }
})();
