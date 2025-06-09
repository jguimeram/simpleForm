/**
 *
 * name = [required, minLength(5), maxLength(10)]
 *
 */

type ValidationRule = {
  value: boolean;
  message: string;
};

// Remove the incorrect interface declaration and use a type alias for clarity

type ValidationRuleFn = (value: string) => ValidationRule;

type formData = {
  name: string;
  email: string;
  phone: string;
  selectedOption: number;
};

const required: ValidationRuleFn = (name: string) => ({
  value: name.trim() !== " ",
  message: name.trim() !== " " ? "ok required" : "required",
});

const minLength =
  (min: number): ValidationRuleFn =>
  (name: string) => ({
    value: name.length >= min,
    message: name.length >= min ? "not minlength" : "yes minlegth",
  });

type dataObject = {
  id: number;
  value: string;
};

const info: dataObject = {
  id: 1,
  value: "John",
};

const phone: dataObject = {
  id: 2,
  value: "12456789",
};

const formMap: Record<number, ValidationRule[]> = {
  [info.id]: [required(info.value), minLength(4)(info.value)],
};

console.log(formMap);
