const ps = document.querySelectorAll(".error-msg");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

import { birthDay } from "./index.js";
import { birthMonth } from "./index.js";
import { birthYear } from "./index.js";
import { btn } from "./index.js";
import { result_year } from "./index.js";
import { result_month } from "./index.js";
import { result_day } from "./index.js";

btn.addEventListener("click", () => {
  if (birthDay.value == "" || birthMonth.value == "" || birthYear.value == "") {
    for (let i = 0; i < ps.length; i++) {
      const p = ps[i];
      p.textContent = "This field is required";
      console.log(p);
    }
    inputs.forEach((input) => {
      input.style.border = "1px solid hsl(0, 100%, 67%)";
      input.style.borderRadius = "4px";
    });

    labels.forEach((label) => {
      label.style.color = "hsl(0, 100%, 67%)";
    });

    result_day.textContent = "- -";
    result_month.textContent = "- -";
    result_year.textContent = "- -";
  }

  if (
    (birthDay.value > 28 && birthMonth.value == 2) ||
    (birthDay.value > 30 && birthMonth.value == 4) ||
    (birthDay.value > 30 && birthMonth.value == 6) ||
    (birthDay.value > 30 && birthMonth.value == 9) ||
    (birthDay.value > 30 && birthMonth.value == 11)
  ) {
    inputs.forEach((input) => {
      input.style.border = "1px solid hsl(0, 100%, 67%)";
      input.style.borderRadius = "4px";
    });

    labels.forEach((label) => {
      label.style.color = "hsl(0, 100%, 67%)";
    });

    result_day.textContent = "- -";
    result_month.textContent = "- -";
    result_year.textContent = "- -";

    error_day.textContent = "Must be a valid day";
    console.log(birthDay.value, birthMonth.value);
  }

  if (
    birthDay.value > 31 ||
    birthMonth.value > 12 ||
    birthYear.value > new Date().getFullYear()
  ) {
    inputs.forEach((input) => {
      input.style.border = "1px solid hsl(0, 100%, 67%)";
      input.style.borderRadius = "4px";
    });

    labels.forEach((label) => {
      label.style.color = "hsl(0, 100%, 67%)";
    });

    result_day.textContent = "- -";
    result_month.textContent = "- -";
    result_year.textContent = "- -";

    error_day.textContent = "Must be a valid day";
    error_month.textContent = "Must be a valid month";
    error_year.textContent = "Must be a valid year";
  }
});
