/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 */
function delayedReminder(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(); // resolve once the message is logged
    }, delay);
  });
}

module.exports = { delayedReminder };