"use client";

import { useState } from "react";

const schedule = [
  // June 2025
  { date: "2025-06-24", day: "Tuesday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 1 + Questions", time: "30 mins" },
  { date: "2025-06-25", day: "Wednesday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 1", time: "30 mins" },
  { date: "2025-06-26", day: "Thursday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 1", time: "30 mins" },
  { date: "2025-06-29", day: "Sunday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 6–7", time: "30 mins" },
  { date: "2025-06-30", day: "Monday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 2 + Questions", time: "30 mins" },

  // July 2025
  { date: "2025-07-01", day: "Tuesday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 2", time: "30 mins" },
  { date: "2025-07-02", day: "Wednesday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 2", time: "30 mins" },
  { date: "2025-07-03", day: "Thursday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 8–9", time: "30 mins" },
  { date: "2025-07-06", day: "Sunday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 3 + Questions", time: "30 mins" },
  { date: "2025-07-07", day: "Monday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 3", time: "30 mins" },
  { date: "2025-07-08", day: "Tuesday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 3", time: "30 mins" },
  { date: "2025-07-09", day: "Wednesday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 10–11", time: "30 mins" },
  { date: "2025-07-10", day: "Thursday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 4 + Questions", time: "30 mins" },
  { date: "2025-07-13", day: "Sunday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 4", time: "30 mins" },
  { date: "2025-07-14", day: "Monday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 4", time: "30 mins" },
  { date: "2025-07-15", day: "Tuesday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 12–13", time: "30 mins" },
  { date: "2025-07-16", day: "Wednesday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 5 + Questions", time: "30 mins" },
  { date: "2025-07-17", day: "Thursday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 5", time: "30 mins" },
  { date: "2025-07-20", day: "Sunday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 5", time: "30 mins" },
  { date: "2025-07-21", day: "Monday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 14–15", time: "30 mins" },
  { date: "2025-07-22", day: "Tuesday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 6 + Questions", time: "30 mins" },
  { date: "2025-07-23", day: "Wednesday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 6", time: "30 mins" },
  { date: "2025-07-24", day: "Thursday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 6", time: "30 mins" },
  { date: "2025-07-27", day: "Sunday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 16–17", time: "30 mins" },
  { date: "2025-07-28", day: "Monday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 7 + Questions", time: "30 mins" },
  { date: "2025-07-29", day: "Tuesday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 7", time: "30 mins" },
  { date: "2025-07-30", day: "Wednesday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 7", time: "30 mins" },
  { date: "2025-07-31", day: "Thursday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 18–19", time: "30 mins" },

  // August 2025
  { date: "2025-08-03", day: "Sunday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 8 + Questions", time: "30 mins" },
  { date: "2025-08-04", day: "Monday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 8", time: "30 mins" },
  { date: "2025-08-05", day: "Tuesday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 8", time: "30 mins" },
  { date: "2025-08-06", day: "Wednesday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 20–21", time: "30 mins" },
  { date: "2025-08-07", day: "Thursday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 9 + Questions", time: "30 mins" },
  { date: "2025-08-10", day: "Sunday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 9", time: "30 mins" },
  { date: "2025-08-11", day: "Monday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 9", time: "30 mins" },
  { date: "2025-08-12", day: "Tuesday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 22–23", time: "30 mins" },
  { date: "2025-08-13", day: "Wednesday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 10 + Questions", time: "30 mins" },
  { date: "2025-08-14", day: "Thursday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 10", time: "30 mins" },
  { date: "2025-08-17", day: "Sunday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 10", time: "30 mins" },
  { date: "2025-08-18", day: "Monday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 24–25", time: "30 mins" },
  { date: "2025-08-19", day: "Tuesday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 11 + Questions", time: "30 mins" },
  { date: "2025-08-20", day: "Wednesday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 11", time: "30 mins" },
  { date: "2025-08-21", day: "Thursday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 11", time: "30 mins" },
  { date: "2025-08-24", day: "Sunday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 26–27", time: "30 mins" },
  { date: "2025-08-25", day: "Monday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 12 + Questions", time: "30 mins" },
  { date: "2025-08-26", day: "Tuesday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 12", time: "30 mins" },
  { date: "2025-08-27", day: "Wednesday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 12", time: "30 mins" },
  { date: "2025-08-28", day: "Thursday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 28–29", time: "30 mins" },

  // September 2025
  { date: "2025-09-01", day: "Monday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 13 + Questions", time: "30 mins" },
  { date: "2025-09-02", day: "Tuesday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 13", time: "30 mins" },
  { date: "2025-09-03", day: "Wednesday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 13", time: "30 mins" },
  { date: "2025-09-04", day: "Thursday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 30–31", time: "30 mins" },
  { date: "2025-09-07", day: "Sunday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 14 + Questions", time: "30 mins" },
  { date: "2025-09-08", day: "Monday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 14", time: "30 mins" },
  { date: "2025-09-09", day: "Tuesday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 14", time: "30 mins" },
  { date: "2025-09-10", day: "Wednesday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 32–33", time: "30 mins" },
  { date: "2025-09-11", day: "Thursday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 15 + Questions", time: "30 mins" },
  { date: "2025-09-14", day: "Sunday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 15", time: "30 mins" },
  { date: "2025-09-15", day: "Monday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 15", time: "30 mins" },
  { date: "2025-09-16", day: "Tuesday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 34–35", time: "30 mins" },
  { date: "2025-09-17", day: "Wednesday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 16 + Questions", time: "30 mins" },
  { date: "2025-09-18", day: "Thursday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 16", time: "30 mins" },

  // October 2025
  { date: "2025-10-05", day: "Sunday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 16", time: "30 mins" },
  { date: "2025-10-06", day: "Monday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 36–37", time: "30 mins" },
  { date: "2025-10-07", day: "Tuesday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 17 + Questions", time: "30 mins" },
  { date: "2025-10-09", day: "Thursday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 17", time: "30 mins" },

  // November 2025
  { date: "2025-11-02", day: "Sunday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 17", time: "30 mins" },
  { date: "2025-11-03", day: "Monday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 38–39", time: "30 mins" },
  { date: "2025-11-04", day: "Tuesday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 18 + Questions", time: "30 mins" },
  { date: "2025-11-06", day: "Thursday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 18", time: "30 mins" },

  // December 2025
  { date: "2025-12-14", day: "Sunday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 18", time: "30 mins" },
  { date: "2025-12-15", day: "Monday", subject: "SPaG - Grammar/Punctuation", book: "Bond Grammar & Punctuation Workbook (Stretch 10–11)", pages: "Pages 40–41", time: "30 mins" },
  { date: "2025-12-16", day: "Tuesday", subject: "Reading Comprehension", book: "CGP KS2 Reading Comprehension – Stretch (10–11)", pages: "Text 19 + Questions", time: "30 mins" },
  { date: "2025-12-17", day: "Wednesday", subject: "Maths - Reasoning & Problem Solving", book: "Bond Maths Stretch (10–11)", pages: "Topic Section 19", time: "30 mins" },
  { date: "2025-12-18", day: "Thursday", subject: "Maths - Arithmetic", book: "Schofield & Sims KS2 SATs Arithmetic", pages: "Test 19", time: "30 mins" }
];


export default function CharlotteStudyApp() {
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);

  const current = schedule[index];
  const isCompleted = completed.includes(index);

  function nextSession() {
    setIndex((prev) => (prev + 1) % schedule.length);
  }

  function prevSession() {
    setIndex((prev) => (prev - 1 + schedule.length) % schedule.length);
  }

  function completeSession() {
    if (!isCompleted) {
      setCompleted((prev) => [...prev, index]);
    }
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Hello Charlotte! 🎉</h1>
      <p style={subtitleStyle}>
        Mummy created this to help you. She loves you to infinity! 💖
      </p>

      <h2 style={sessionDateStyle}>
        {current.date} ({current.day}){" "}
        {isCompleted && <span style={completedMarkStyle}>✔ Completed</span>}
      </h2>

      <p style={sessionInfoStyle}>
        <strong>Subject & Book:</strong> {current.subject} — <em>{current.book}</em>
      </p>
      <p style={sessionInfoStyle}>
        <strong>Pages:</strong> {current.pages}
      </p>
      <p style={sessionInfoStyle}>
        <strong>Duration:</strong> {current.time}
      </p>

      <div style={buttonContainerStyle}>
        <button onClick={prevSession} style={buttonStyle} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}>⬅ Back</button>

        <button
          onClick={completeSession}
          disabled={isCompleted}
          style={{
            ...buttonStyle,
            margin: "0 1rem",
            backgroundColor: isCompleted ? "#9ca3af" : "#10b981",
            cursor: isCompleted ? "default" : "pointer",
            fontWeight: "700",
          }}
          onMouseOver={(e) => {
            if (!isCompleted) e.currentTarget.style.backgroundColor = "#059669";
          }}
          onMouseOut={(e) => {
            if (!isCompleted) e.currentTarget.style.backgroundColor = "#10b981";
          }}
        >
          ✅ Complete
        </button>

        <button onClick={nextSession} style={buttonStyle} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}>Next ➡</button>
      </div>

      <h3 style={progressTitleStyle}>Progress:</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Day</th>
            <th style={tableHeaderStyle}>Subject</th>
            <th style={tableHeaderStyle}>Done</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((session, i) => (
            <tr key={i} style={{ backgroundColor: i === index ? "#e0f2fe" : "transparent" }}>
              <td style={tableCellStyle}>{session.date}</td>
              <td style={tableCellStyle}>{session.day}</td>
              <td style={tableCellStyle}>
                {session.subject} — <em>{session.book}</em><br />
                <small>Pages: {session.pages} | Duration: {session.time}</small>
              </td>
              <td style={{ ...tableCellStyle, textAlign: "center", fontSize: "1.3rem", color: "#059669" }}>
                {completed.includes(i) ? "⭐" : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  maxWidth: 720,
  margin: "2rem auto",
  padding: "1.5rem 2rem",
  fontFamily: "'Inter', sans-serif",
  backgroundColor: "#ffffff",
  borderRadius: 20,
  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  textAlign: "center",
  color: "#1f2937",
  lineHeight: 1.6,
  letterSpacing: "0.02em",
};

const titleStyle: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: 700,
  marginBottom: "0.5rem",
  color: "#2563eb",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  color: "#4b5563",
  fontWeight: 500,
  marginBottom: "1.5rem",
};

const sessionDateStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: 700,
  color: "#1e40af",
  marginBottom: 10,
};

const completedMarkStyle: React.CSSProperties = {
  color: "#059669",
  marginLeft: 12,
  fontWeight: 700,
};

const sessionInfoStyle: React.CSSProperties = {
  fontSize: "1.15rem",
  margin: "6px 0",
};

const buttonContainerStyle: React.CSSProperties = {
  marginTop: 25,
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.75rem 1.5rem",
  fontSize: "1.1rem",
  borderRadius: 10,
  border: "none",
  backgroundColor: "#3b82f6",
  color: "white",
  cursor: "pointer",
  fontWeight: 600,
  transition: "background-color 0.3s ease",
  boxShadow: "0 4px 10px rgba(59,130,246,0.3)",
  userSelect: "none",
};

const progressTitleStyle: React.CSSProperties = {
  marginTop: 40,
  marginBottom: 10,
  color: "#2563eb",
  fontWeight: 700,
  fontSize: "1.75rem",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  boxShadow: "0 4px 12px rgba(37,99,235,0.15)",
};

const tableHeaderStyle: React.CSSProperties = {
  borderBottom: "2px solid #2563eb",
  padding: "10px 8px",
  fontWeight: 700,
  color: "#1e40af",
  textAlign: "left",
};

const tableCellStyle: React.CSSProperties = {
  borderBottom: "1px solid #dbeafe",
  padding: "8px 10px",
};
