export const birthDay = document.querySelector("#day");
export const birthMonth = document.querySelector("#month");
export const birthYear = document.querySelector("#year");
export const btn = document.querySelector("button");
const spans = document.querySelectorAll(".result span");

//initialise current date
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getDate();

//select html result elements
export const result_year = document.querySelector("#result-year");
export const result_month = document.querySelector("#result-month");
export const result_day = document.querySelector("#result-day");

btn.addEventListener("click", (e) => {
  e.preventDefault(); //override default behavior

  //get input values
  const year_value = birthYear.value;
  const month_value = birthMonth.value;
  const day_value = birthDay.value;
  const allMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //condition on day's value
  if (currentDay < day_value) {
    currentDay = currentDay + allMonth[new Date().getMonth() - 1];
    currentMonth = currentMonth - 1;
  }
  const days = currentDay - day_value;

  //condition on month's value
  if (currentMonth < month_value) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  //values under normal condition
  const months = currentMonth - month_value;
  const years = currentYear - year_value;
  //reset values
  currentDay = new Date().getDate();
  currentMonth = new Date().getMonth() + 1;
  currentYear = new Date().getFullYear();

  //verify current value in console
  console.log(currentDay, currentMonth, currentYear);

  result_year.textContent = years;
  result_month.textContent = months;
  result_day.textContent = days;

  //remove spacing on result
  for (let index = 0; index < spans.length; index++) {
    const span = spans[index];
    span.style.letterSpacing = "0";
    span.style.paddingRight = "10px";
  }
});
