const dataElm = document.querySelector("[data-user-template]");
const cardElm = document.querySelector("[data-user-cards-container]");
const searchBar = document.querySelector("[data-search]");

let users = [];
searchBar.addEventListener("click", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isUser = user.name.includes(value) || user.email.includes(value);
    user.element.classList.toggle("hide", !isUser)
  });
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then(
    (data) =>
      (users = data.map((user) => {
        const card = dataElm.content.cloneNode(true).children[0];
        console.log(card);
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = user.name;
        body.textContent = user.email;
        cardElm.append(card);
        return { name: user.name, email: user.email, element: card };
      }))
  );
