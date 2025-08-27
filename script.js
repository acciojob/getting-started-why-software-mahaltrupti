//your code here
  <script>
    // Change text color on click
    const textDiv = document.getElementById("text");
    textDiv.addEventListener("click", () => {
      textDiv.style.color = textDiv.style.color === "crimson" ? "#2c3e50" : "crimson";
    });
  </script>