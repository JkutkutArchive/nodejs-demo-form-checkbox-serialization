document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    console.log("Event before logic", e);
    console.log(new FormData(form));

    const sau = document.getElementById("sau");
    const value = sau.checked? "true" : "false";

    // Solution 0
    // sau.value = value;
    // sau.checked = true;

    // Solution 1
    if (!sau.checked) {
      const sauFalseInput = document.createElement("input");
      sauFalseInput.type = "hidden";
      sauFalseInput.name = "sau";
      sauFalseInput.value = value;
      form.appendChild(sauFalseInput);
    }
    else {
      sau.value = value;
    }

    // Solution 3
    // sau.value = value;
    // sau.type = "hidden";

    // Solution 4
    // Make our own request!

    console.log("Event after logic", e);
    console.log(form);
    console.log(sau);
    console.log(new FormData(form));
    return true;
  });
  form.addEventListener("submit", (e) => {
    // e.preventDefault();
  });
});
