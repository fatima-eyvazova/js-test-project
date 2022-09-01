let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 30, 39, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const futureTime = futureDate.getTime();

const countdownItems = document.querySelectorAll(".count-down");

function getRemainingTime() {
  const nowMilliseconds = new Date().getTime();
  const differenceInTime = futureTime - nowMilliseconds;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let daysRemain = Math.floor(differenceInTime / oneDay);
  let hoursRemain = Math.floor((differenceInTime % oneDay) / oneHour);
  let minutesRemain = Math.floor((differenceInTime % oneHour) / oneMinute);
  let secondsRemain = Math.floor((differenceInTime % oneMinute) / 1000);

  // set values array
  const remainingValues = [
    daysRemain,
    hoursRemain,
    minutesRemain,
    secondsRemain,
  ];

  function format(item) {
    if (item < 10) return `0${item}`;
    return item;
  }

  countdownItems.forEach((item, index) => {
    item.textContent = format(remainingValues[index]);
  });

  if (differenceInTime <= 0) {
    clearInterval(countdown);
    countdownItems.forEach((item) => {
      item.textContent = "00";
    });
  }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
