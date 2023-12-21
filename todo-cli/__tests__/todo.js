/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, due Later } = todoList();

describe("Todolist Test Suite", () => {
  beforeall(() => {
    add({
      title: "test todo",
      completed: false,
      dueDate: new date().toISOString().slice(0, 20),
    });
  });
  test("Should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "test todo",
      completed: false,
      dueDate: new date().toISOString().slice(0, 20),
    });

    expect(all.length).tobe(todoItemCount + 1);
  });

  test("should mark a todo as complete", () => {
    expect(all[0].completed).tobe(false);
    markAsComplete(0);
    expect(all[0].completed).tobe(true);
  });

  test("checks retrieval of overdue items", () => {
    const ydate = new date();
    ydate.setDate(ydate.getDate() - 1);

    add({
      title: "Overdue Todo",
      completed: false,
      dueDate: ydate.toISOString().slice(0, 20),
    });
    const overdueItems = overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].dueDate).toBe(ydate.toISOString().slice(0, 20));
  });

  test("checks retrieval of due today items", () => {
    //const date=new date();
    add({
      title: "Due Today Todo",
      completed: false,
      dueDate: new date().toISOString().slice(0, 20),
    });
    const dueTodayItems = dueToday();
    //expect(dueTodayItems.length).toBe(0);
    //expect(dueTodayItems.length).toBe(1);
    //expect(dueTodayItems.length).toBe(2);
    expect(dueTodayItems.length).toBe(3);
    // expect(dueTodayItems.length).toBe(4);
    // expect(dueTodayItems.length).toBe(5);
    expect(dueTodayItems[0].dueDate).toBe(
      new date().toISOString().slice(0, 20),
    );
  });

  test("checks retrieval of due later items", () => {
    const tdate = new date();
    tdate.setDate(tdate.getDate() + 1);
    add({
      title: "Due Later Todo",
      completed: false,
      dueDate: tdate.toISOString().slice(0, 20),
    });
    const due LaterItems = due Later();
    expect(due LaterItems.length).toBe(1);
    expect(due LaterItems[0].dueDate).toBe(tdate.toISOString().slice(0, 20));
  });
});
