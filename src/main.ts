import { Validation } from "./classes/Validation";
import { type RegisterType, type Countries, countries } from "./types/data";

const form = document.querySelector("#registerForm") as HTMLFormElement | null;

const countrieSelect = document.getElementById(
  "country"
) as HTMLSelectElement | null;

if (form === null) throw new Error("form not found");
if (countrieSelect === null) throw new Error("select not found");

/**
 * load select of countries
 */

countries.forEach((country: Countries) => {
  const optionCountries = document.createElement("option");

  if (country.id === 0) {
    optionCountries.disabled = true;
    optionCountries.selected = true;
  }

  optionCountries.id = country.id.toString();
  optionCountries.dataset.id = country.id.toString();
  optionCountries.value = country.id.toString();
  optionCountries.textContent = country.name;
  countrieSelect.appendChild(optionCountries);
});

/**
 * load form submit
 */

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const formData = new FormData(form);
  const firstName = formData.get("firstName");
  const validator = new Validation(firstName as string);
  validator.required().minLength(5).maxLength(10);
  if (validator.isValid()) {
    console.log("data is passing");
  } else {
    const errorMessages: Array<string> = validator.getErrors();
    console.log(errorMessages);
  }
});
