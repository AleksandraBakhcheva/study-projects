const WARNINGERROR =
  "При загрузке произошла ошибка. Пожалуйста, попробуйте снова";
const ERRORPIC = "images/error-cat.png";

document.addEventListener("DOMContentLoaded", function () {
  let div = document.createElement("div");
  div.innerHTML = `<h1>Мой Github:</h1>
    <div class="info"></div>`;
  document.body.append(div);
  fetch("https://api.github.com/users/AleksandraBakhcheva")
    .then((response) => response.json())
    .then((user) => {
      document.querySelector(".info").innerHTML =
        "Логин: " +
        user.login +
        "</br>" +
        "Количество репозиториев: " +
        user.public_repos +
        "</br>" +
        "Дата создания: " +
        user.created_at;
    })
    .catch((ERROR) => {
      let error = document.createElement("div");
      error.classList.add("error");
      let message = document.createElement("p");
      message.classList.add("errormsg");
      error.append(message);
      div.append(error);
      document.querySelector(".errormsg").innerHTML = WARNINGERROR;
      let image = document.createElement("img");
      image.setAttribute("src", ERRORPIC);
      image.width = 300;
      error.append(image);
    });
  let projects = document.createElement("div");
  projects.innerHTML = `<h1>Мои проекты:</h1>
    <div class="projects"></div>`;
  document.body.append(projects);
  fetch("https://api.github.com/users/AleksandraBakhcheva/repos")
    .then((response) => response.json())
    .then((projects) => {
      for (let i = 0; i < projects.length; i++) {
        let item = document.createElement("div");
        item.classList.add("project__" + i);
        document.querySelector(".projects").appendChild(item);
        document.querySelector(".project__" + i).innerHTML +=
          projects[i].name +
          " " +
          "<a href='" +
          projects[i].svn_url +
          "'>Link</a>";
      }
      document.querySelectorAll("a").forEach(function (a) {
        a.setAttribute("target", "_blank");
      });
    })
    .catch((ERROR) => {
      let error = document.createElement("div");
      error.classList.add("error");
      let message = document.createElement("p");
      message.classList.add("errormsg1");
      error.append(message);
      projects.append(error);
      document.querySelector(".errormsg1").innerHTML = WARNINGERROR;
      let image = document.createElement("img");
      image.setAttribute("src", ERRORPIC);
      image.width = 300;
      error.append(image);
    });
});
