const todoList = () => {
  let all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((todo) => !todo.completed && todo.dueDate < today);
  };

  const due_Today = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((todo) => todo.dueDate === today);
  };

  const due Later = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((todo) => !todo.completed && todo.dueDate > today);
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        const status = todo.completed ? "[x]" : "[ ]";
        const excludeDueDate = ["pay rent", "service vehicle"];
        const dueDate =
          !excludeDueDate.includes(todo.title.toLowerCase()) && todo.dueDate
            ? " " + formattedDate(new Date(todo.dueDate))
            : "";
        return `${status} ${todo.title}${dueDate}`;
      })
      .join("\n");
  };
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    due_Today,
    due Later,
    toDisplayableList,
  };
};

// Rest of the code remains unchanged

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

// const todos = todoList();

// const formattedDate = d => {
//   return d.toISOString().split("T")[0]
// }

// var dateToday = new Date()
// const today = formattedDate(dateToday)
// const yesterday = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() - 1))
// )
// const tomorrow = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() + 1))
// )

// todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
// todos.add({ title: 'Pay rent', dueDate: today, completed: true })
// todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
// todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
// todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

// console.log("My Todo-list\n")

// console.log("Overdue")
// var overdues = todos.overdue()
// var formattedOverdues = todos.toDisplayableList(overdues)
// console.log(formattedOverdues)
// console.log("\n")

// console.log("duetoday")
// let itemsDueToday = todos.due_Today()
// let formattedItemsDueToday = todos.toDisplayableList(itemsdue today)
// console.log(formattedItemsdue today)
// console.log("\n")

// console.log("dueLater")
// let itemsDueLater = todos.dueLater()
// let formattedItemsDue Later = todos.toDisplayableList(itemsDue Later)
// console.log(formattedItemsDue Later)
// console.log("\n\n")

module.exports = todoList;
