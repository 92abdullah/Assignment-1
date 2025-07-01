//  to do list


let todoList = [];

// Add task using arrow function
const add = task => {
  todoList.push({ task, done: "incomplete" });
  console.log("Task added.");
};

// View tasks using forEach
const view = () => {
  if (todoList.length === 0) {
    console.log("No tasks in the list.");
    return;
  }

  todoList.forEach((item, index) => {
    console.log(`${index + 1}: ${item.task} - ${item.done}`);
  });
};

// Remove task with validation
const remove = index => {
  if (index < 1 || index > todoList.length) {
    console.log("Invalid task number.");
  } else {
    todoList.splice(index - 1, 1);
    console.log("Task removed.");
  }
};

// Mark task as complete
const complete = index => {
  if (index < 1 || index > todoList.length) {
    console.log("Invalid task number.");
  } else {
    todoList[index - 1].done = "complete";
    console.log("Task marked as complete.");
  }
};

// Filter tasks by status (complete/incomplete)
const filterTask = status => {
  const filtered = todoList.filter(item => item.done === status);

  if (filtered.length === 0) {
    console.log(`No "${status}" tasks found.`);
  } else {
    filtered.forEach((item, index) => {
      console.log(`${index + 1}: ${item.task} - ${item.done}`);
    });
  }
};

// Test it
add("Practice Javascript");
add("Prepare file");
add("Submit file");

view();

remove(2);

complete(2);

view();

filterTask("incomplete");
filterTask("complete");
