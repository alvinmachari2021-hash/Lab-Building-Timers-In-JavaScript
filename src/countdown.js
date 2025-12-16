/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 */
function countdownTimer(startTime, interval) {
  let remaining = startTime;

  const timerId = setInterval(() => {
    if (remaining > 0) {
      console.log(remaining);
      remaining--;
    } else {
      clearInterval(timerId); // stop when it hits 0
    }
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };