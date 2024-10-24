function ValidateInput(inputs) {
  let isValid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }

    input.addEventListener("input", () => {
      if (input.value.trim()) {
        input.classList.remove("error");
      }
    });
  });

  return isValid;
}
export { ValidateInput }