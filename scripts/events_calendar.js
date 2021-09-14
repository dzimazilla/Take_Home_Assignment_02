"use strict";
/*
    ~ Developed by Christopher Perrault & Dmitri Banshchikov ~

    events_calendar.js is referenced by events.html
    for calendar functionality.
*/

let thisDay = new Date();

document.getElementById("calendar").innerHTML = createCalendar(thisDay);

function createCalendar(calDate) {
  let calendarHTML = "<table id='calendar_table'>";
  calendarHTML += calendarCaption(calDate);
  calendarHTML += calendarWeekDayRow();
  calendarHTML += calendarDays(calDate);
  calendarHTML += "</table>";

  return calendarHTML;
}

function calendarCaption(calDate) {
  let monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let thisMonth = calDate.getMonth();
  let thisYear = calDate.getFullYear();

  let calCaption = monthName[thisMonth] + " " + thisYear;
  return "<caption>" + calCaption + "</caption>";
}

function calendarWeekDayRow() {
  let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let rowHTML = "<tr>";

  for (let dayIndex = 0; dayIndex < dayName.length; dayIndex++) {
    rowHTML += "<th class='calendar_weekdays'>" + dayName[dayIndex] + "</th>";
  }
  rowHTML += "</tr>";
  return rowHTML;
}

function daysInMonth(calDate) {
  let dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let thisYear = calDate.getFullYear();
  let thisMonth = calDate.getMonth();

  if (thisYear % 4 === 0) {
    if (thisYear % 100 != 0 || thisYear % 400 === 0) {
      dayCount[1] = 29;
    }
  }
  return dayCount[thisMonth];
}

// Writes the daily rows in the calendar table, highlighting calDate

function calendarDays(calDate) {
  // determine the starting day of the month
  let today = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
  let weekDay = today.getDay();

  // write blank cells before the starting day
  let htmlCode = "<tr>";
  for (let countBlank = 0; countBlank < weekDay; countBlank++) {
    htmlCode += "<td>&nbsp;</td>";
  }
  // write cells for each day of the month
  let totalDays = daysInMonth(calDate);

  let highlightDay = calDate.getDate();

  for (let days = 1; days <= totalDays; days++) {
    today.setDate(days);
    weekDay = today.getDay();

    if (weekDay === 0) {
      htmlCode += "<tr>";
    }
    if (days === highlightDay) {
      htmlCode +=
        "<td class='calendar_dates' id='calendar_today'>" +
        days +
        dayEvent[days] +
        "</td>";
    } else {
      htmlCode +=
        "<td class='calendar_dates'>" + days + dayEvent[days] + "</td>";
    }
    if (weekDay === 6) {
      htmlCode += "</tr>";
    }
  }
  return htmlCode;
}
