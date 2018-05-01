var todoItem = {};
var text = '';
var completed = false;
var id = 0;
function addTodoItem(text, completed, id) {
	boxvalue = document.getElementById('box').value;
		todoItems.push(boxvalue);
			return true;
				console.log(todoItems);
}

var itemsType = '';
function viewTodoList(itemsType) {
	if (itemsType === 'completed') {
		return true;
	} else {
		return false;	
	}
}

var todoItemId = 0;
var newText = '';
function editTodoItem(todoItemId, newText) {

}

function deleteTodoItem(todoItemId) {
	return flag = 1;
}

function completeTodoItem(todoItemId) {
	
}