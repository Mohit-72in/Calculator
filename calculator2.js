const display = document.getElementById("number");

    function appendToDisplay(input) {
      display.value += input;
    }

    function clearDisplay() {
      display.value = "";
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    }
    function deleteLast() {
      const display = document.getElementById("number");
      display.value = display.value.slice(0, -1);
    }