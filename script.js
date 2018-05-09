var todoItems = [];

console.log('task 1');
var todo1 = { text: 'kate is awesome', id: 1 };
console.log(todo1);
todoItems.addTodoItem(todo1);

var todo2 = { text: '', completed: true, id: 1 };
console.log(todo2);
todoItems.addTodoItem(todo2);

var todo3 = { text: 'pipi', completed: false, id: 1 };
console.log(todo3);
todoItems.addTodoItem(todo3);

var todo4 = { text: 'miu', completed: false, id: 1 };
console.log(todo4);
todoItems.addTodoItem(todo4);

console.log('task 2');
todoItems.addTodoItem({ text: 'dimka idet gulat', completed: false, id: 2 });
todoItems.addTodoItem({ text: 'dimka ne delaet raboty', completed: true, id: 3 });
todoItems.addTodoItem({ text: 'dimka kushaet obed', completed: true, id: 4 });

console.log('all items:');
console.log(todoItems.viewTodoList('all'));

console.log('complited items:');
console.log(todoItems.viewTodoList('complited'));

console.log('incomplited items:');
console.log(todoItems.viewTodoList('not_complited'));

console.log('wrong parameter:');
console.log(todoItems.viewTodoList('dimka'));

console.log('task 3');
console.log(todoItems.editTodoItem(1, 'new text'));
console.log(todoItems);

console.log(todoItems.editTodoItem(1, 321));
console.log(todoItems);

console.log(todoItems.editTodoItem(45, 'good text'));
console.log(todoItems);

console.log('task 4');
console.log(todoItems);

console.log(todoItems.deleteTodoItem('123'));
console.log(todoItems);

console.log(todoItems.deleteTodoItem(77));
console.log(todoItems);

console.log(todoItems.deleteTodoItem(2));
console.log(todoItems);

console.log('task 5');
console.log(todoItems);
console.log(todoItems.completeTodoItem(2));
console.log(todoItems);
console.log(todoItems.completeTodoItem('1d2'));
console.log(todoItems);
console.log(todoItems.completeTodoItem(3));
console.log(todoItems);
console.log(todoItems.completeTodoItem(1));