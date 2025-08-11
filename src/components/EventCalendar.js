import React, { useState, useRef, useEffect } from 'react';
import { useFadeUpOnScroll } from './useFadeUpOnScroll';
import './EventCalendar.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(month, year) {
  return new Date(year, month, 1).getDay();
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const EventCalendar = () => {
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [monthAnim, setMonthAnim] = useState('');
  const [yearAnim, setYearAnim] = useState('');
  const calendarMainRef = useRef(null);
  const sidebarRef = useRef(null);

  // Fade up animation refs
  const fadeRefs = useFadeUpOnScroll();

  // Years: only 2025 and after
  const years = [];
  for (let y = 2025; y <= today.getFullYear() + 5; y++) {
    years.push(y);
  }

  // Months scroll state
  const monthsToShow = 1;
  const visibleMonths = [months[selectedMonth]];

  const handlePrevMonths = () => {
    if (selectedMonth > 0) {
      setMonthAnim('fade-slide-left');
      setTimeout(() => {
        setSelectedMonth(selectedMonth - 1);
        setMonthAnim('');
      }, 200);
    }
  };
  const handleNextMonths = () => {
    if (selectedMonth < months.length - 1) {
      setMonthAnim('fade-slide-right');
      setTimeout(() => {
        setSelectedMonth(selectedMonth + 1);
        setMonthAnim('');
      }, 200);
    }
  };

  const handleYearClick = (year) => {
    if (year !== selectedYear) {
      setYearAnim('fade-slide-up');
      setTimeout(() => {
        setSelectedYear(year);
        setYearAnim('');
      }, 200);
    }
  };

  useEffect(() => {
    if (calendarMainRef.current && sidebarRef.current) {
      sidebarRef.current.style.height = calendarMainRef.current.offsetHeight + 'px';
    }
  }, [selectedMonth, selectedYear]);

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const firstDay = getFirstDayOfWeek(selectedMonth, selectedYear);

  // Event: 9 Aug 2025
  const eventDate = 9;
  const eventMonth = 7; // August (0-indexed)
  const eventYear = 2025;
  const eventName = "Session";

  // Generate calendar grid
  const calendarRows = [];
  let day = 1 - firstDay;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (day > 0 && day <= daysInMonth) {
        // Check if this is the event date
        if (
          selectedMonth === eventMonth &&
          selectedYear === eventYear &&
          day === eventDate
        ) {
          week.push(
            <td key={j} className="calendar-day calendar-event-day">
              <span className="calendar-event-dot" tabIndex={0} title={eventName}>
                {day}
                <span className="calendar-event-tooltip">{eventName}</span>
              </span>
            </td>
          );
        } else {
          week.push(<td key={j} className="calendar-day">{day}</td>);
        }
      } else {
        week.push(<td key={j} className="calendar-empty" />);
      }
      day++;
    }
    calendarRows.push(<tr key={i}>{week}</tr>);
  }

  return (
    <>
      <div
        className="event-calendar-container fade-up-init"
        ref={el => fadeRefs.current[0] = el}
      >
        <div className="calendar-flex-row">
          <aside className="calendar-sidebar" ref={sidebarRef}>
            {years.map((year) => (
              <div
                key={year}
                className={`calendar-year${year === selectedYear ? ' selected' : ''}${yearAnim && year === selectedYear ? ' ' + yearAnim : ''}`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            ))}
          </aside>
          <main className="calendar-main" ref={calendarMainRef}>
            <div className="calendar-months-bar">
              <button className="calendar-months-arrow" onClick={handlePrevMonths} disabled={selectedMonth === 0}>&lt;</button>
              <div className="calendar-months-bar-inner">
                {visibleMonths.map((month, i) => {
                  return (
                    <div
                      key={month}
                      className={`calendar-month selected rounded-month${monthAnim ? ' ' + monthAnim : ''}`}
                      onClick={() => {}}
                    >
                      {month}
                    </div>
                  );
                })}
              </div>
              <button className="calendar-months-arrow" onClick={handleNextMonths} disabled={selectedMonth >= months.length - 1}>&gt;</button>
            </div>
            <table className="calendar-table">
              <thead>
                <tr>
                  {daysOfWeek.map(day => <th key={day}>{day}</th>)}
                </tr>
              </thead>
              <tbody>{calendarRows}</tbody>
            </table>
          </main>
        </div>
      </div>
      <div
        className="calendar-stay-tuned fade-up-init"
        ref={el => fadeRefs.current[1] = el}
        tabIndex={0}
        aria-label="Stay tuned for upcoming events!"
      >
        <span>
          Stay tuned for upcoming <span className="calendar-stay-tuned-orange">events!</span>
        </span>
      </div>
    </>
  );
};

export default EventCalendar;
