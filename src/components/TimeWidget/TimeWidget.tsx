import "./TimeWidget.scss";

import ClockIcon from "./assets/clock-icon.svg";

// ------ COMPONENT: START ------ //

export default function TimeWidget() {
  return (
    <span className="time-widget">
      <span className="time-widget__clock-icon">
        <img src={ClockIcon} alt="Clock icon." />
      </span>
      <p className="time-widget__time">19:00 / 19:30 / 20:00</p>
    </span>
  );
}

// ------ COMPONENT: END ------ //
