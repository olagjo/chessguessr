import { zeroPad } from "react-countdown";

export const arraysEqual = (a: any, b: any) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const midnightUtcTomorrow = () => {
  let tomorrow = new Date();

  tomorrow.setDate(new Date().getDate() + 1);

  return new Date(
    Date.UTC(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate(),
      0,
      0,
      0,
      0
    )
  );
};

export const countdownRenderer = ({ hours, minutes, seconds }) => (
  <span>
    {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
  </span>
);
