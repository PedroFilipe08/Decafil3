let itemCount = 0;

function addItem() {
    itemCount++;
    const itemList = document.getElementById('items-container');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `<input type="text" value="Produto ${itemCount}" onchange="updateItemName(${itemCount}, this.value)">
                         <input type="number" value="0" min="0" onchange="updateNotifications()">`;
    newItem.id = `produto-${itemCount}`;
    itemList.appendChild(newItem);
    updateNotifications();
}

function updateItemName(itemId, newName) {
    const configLabel = document.getElementById(`label-produto-${itemId}`);
    configLabel.innerText = `${newName}:`;
    updateNotifications();
}
