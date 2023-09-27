const USERS_URL = "https://reqres.in/api/users";

const container = document.querySelector(".container");

const createUsersFrame = () => {
  const usersUl = document.createElement("ul");
  usersUl.classList.add("users");
  container.append(usersUl);

  return usersUl;
};

const createPaginationFrame = () => {
  const paginationUl = document.createElement("ul");
  paginationUl.classList.add("pagination");
  container.append(paginationUl);

  return paginationUl;
};

const userTemplate = (data) => {
  const { avatar, email, first_name, last_name } = data;

  const name = [first_name, last_name].join(" ");

  const template = `
    <li class="users__item">
      <div class="users__frame">
      <div class="avatar">
        <img
          class="avatar__pic"
          src=${avatar}
          alt="avatar"
        />
      </div>
      <span class="users__info">${name}</span>
      <span class="users__info">${email}</span>
      </div>
    </li>
  `;

  return template;
};

const fetchUsers = async (url) => {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let dataResponse = await response.json();
      let { data, page, total_pages } = dataResponse;

      data.sort((a, b) => (a.first_name > b.first_name ? 1 : -1));

      let usersUl = createUsersFrame();

      data.forEach((item) => {
        usersUl.insertAdjacentHTML("beforeend", userTemplate(item));
      });

      if (total_pages > 1) {
        paginationUl = createPaginationFrame();

        for (let index = 1; index <= total_pages; index++) {
          let itemLi = document.createElement("li");
          itemLi.classList.add("pagination__item");
          itemLi.textContent = index;

          if (index === page) {
            itemLi.classList.add("pagination__item--active");
          }

          const pageUrl = `${USERS_URL}?page=${index}`;

          itemLi.onclick = () => {
            container.innerHTML = ''
            fetchUsers(pageUrl);
          };

          paginationUl.appendChild(itemLi);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

fetchUsers(USERS_URL);
