Array.prototype.addTodoItem = function (todoItem) {
    if (typeof (todoItem.text) !== 'string' ||
        typeof (todoItem.completed) !== 'boolean' ||
        typeof (todoItem.id) !== 'number') {
        console.error('This item is not todo item');
        return;
    };
    if (!todoItem.text) {
        console.error('Text field of todo item must be filled');
        return;
    }
    if (this.some(item => item.id === todoItem.id)) {
        console.error('Item wtih id: ' + todoItem.id + ' already exists');
        return
    }
    this.push(todoItem);
};

Array.prototype.viewTodoList = function (state) {
    switch (state) {
        case 'complited': {
            return this.filter(item => item.completed);
        }
        case 'not_complited': {
            return this.filter(item => !item.completed);
        }
        case 'all': {
            return this;
        }
        default: {
            console.error('Incorrect parameter. You can use only : complited, not_complited, all');
        }
    }
};

Array.prototype.editTodoItem = function (todoItemId, newText) {
    if (typeof (newText) !== 'string') {
        console.error('Text field must be a string');
        return false;
    }
    if (!newText) {
        console.error('Text field of todo item must be filled');
        return false;
    }
    if (typeof (todoItemId) !== 'number') {
        console.error('Id field must be a number');
        return false;
    }
    if (!this.some(item => item.id === todoItemId)) {
        console.error('There is no item with id = ' + todoItemId + ' in collection');
        return false;
    }
    this.find(item => item.id === todoItemId).text = newText;
    return true;
}

Array.prototype.deleteTodoItem = function (todoitemId) {
    if (typeof (todoItemId) !== 'number') {
        console.error('Id field must be a number');
        return false;
    }
    if (!this.some(item => item.id === todoItemId)) {
        console.error('There is no item with id = ' + todoItemId + ' in collection');
        return false;
    }
    var index = this.findIndex(item => item.id === todoitemId);
    this.splice(index, 1);
}

Array.prototype.completeTodoItem = function (todoItemId) {
    if (typeof (todoItemId) !== 'number') {
        console.error('Id field must be a number');
        return false;
    }
    if (!this.some(item => item.id === todoItemId)) {
        console.error('There is no item with id = ' + todoItemId + ' in collection');
        return false;
    }
    var item = this.find(item => item.id === todoItemId);
    if (item.completed) {
        console.error('This item is already complited');
        return false;
    }
    item.completed = true;
    return true;
}