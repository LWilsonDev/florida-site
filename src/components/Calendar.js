import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import googleCalendarPlugin from "@fullcalendar/google-calendar"

const Calendar = () => {
  const apiKey = process.env.GATSBY_GOOGLE_CAL_API
  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      initialView="dayGridMonth"
      dayHeaderClassNames={"customDates"}
      googleCalendarApiKey={apiKey}
      events={{
        googleCalendarId:
          "nvl0eoolbmau39udgu2p3fq3oh6d03e5@import.calendar.google.com",
      }}
      displayEventTime={false}
      eventDisplay={"block"}
      eventTextColor={"#4c7796"}
      eventColor={"#4c7796"}
    />
  )
}

export default Calendar
