<!DOCTYPE html>
<html>
<body>

Search: <input id="search" />
    <ul id="results"></ul>

<script>
const input = document.querySelector("#search");
const list = document.querySelector("#results");

const fruits = ["Apple", "Fig", "Grape", "banana"];

input.addEventListener("input", () => {
  const q = input.value.toLowerCase();
  const matches = fruits.filter((f) => f.toLowerCase().includes(q));
  list.innerHTML = "";

  matches.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
});

</script>

</body>
</html>
