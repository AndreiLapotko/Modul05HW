let tasksList = [];

const addButton = document.getElementById("add");
const changeStatusButton = document.getElementById("change");
const deleteButton = document.getElementById("delete");
const updateButton = document.getElementById("update");

function addTask() {
  let name = prompt("Введите название задачи!", "");
  if (name) {
    if (doesTaskExist(name)) {
      alert("Задача с таким названием уже существует");
    } else {
      let newTask = {
        name: name,
        completed: false,
      };
      tasksList.push(newTask);
      // alert("Задача успешно добавлена, обновите список!");
      updateButton.click();
    }
  } else {
    alert("Вы забыли назвать задачу!");
  }
}

function doesTaskExist(name) {
  if (tasksList.findIndex((item) => item.name == name) === -1) {
    return false;
  } else {
    return true;
  }
}

function deleteTask(name) {
  if (!doesTaskExist(name)) {
    alert("Задачи с таким названием нет в списке!");
  } else {
    tasksList = tasksList.filter((item) => item.name !== name);
    // alert("Задача успешно удалена, обновите список!");
    updateButton.click();
  }
}

function changeStatus(name) {
  if (!doesTaskExist(name)) {
    alert("Задачи с таким названием нет в списке!");
  } else {
    tasksList[tasksList.findIndex((item) => item.name == name)].completed =
      !tasksList[tasksList.findIndex((item) => item.name == name)].completed;
    // alert("Статус задачи успешно изменен, обновите список!");
    updateButton.click();
  }
}

function handleChangeStatusButtonClick() {
  let name = prompt("Для смены статуса, введите название задачи!", "");
  changeStatus(name);
}

function handleDelButtonClick() {
  let name = prompt("Для удаления, введите название задачи!", "");
  deleteTask(name);
}

function handleUpdateButtonClick() {
  let array = tasksList;
  const html = array.map((item) => `<li>${item.name} &emsp;&emsp;${item.completed ? "выполнено" : "не выполнено"}</li>`).join("");
  document.querySelector("ol").innerHTML = html;
  // в ТЗ не указано куда направлять данные, поэтому вывел и на страницу и в консоль.
  array.forEach((item) => {console.log(item.name + " " + (item.completed ? "выполнено" : "не выполнено"))});
}

addButton.addEventListener("click", addTask);
changeStatusButton.addEventListener("click", handleChangeStatusButtonClick);
deleteButton.addEventListener("click", handleDelButtonClick);
updateButton.addEventListener("click", handleUpdateButtonClick);
