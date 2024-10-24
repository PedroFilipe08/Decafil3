function addItem() {
    itemCount++;
    const itemList = document.getElementById('items-container');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `<input type="text" value="Produto ${itemCount}" onchange="updateItemName(${itemCount}, this.value)">
                         <input type="number" value="0" min="0" onchange="updateNotifications()">`;
    newItem.id = `produto-${itemCount}`;
    itemList.appendChild(newItem);

    const configContainer = document.getElementById('config-container');
    const newConfig = document.createElement('div');
    newConfig.classList.add('config-item');
    newConfig.innerHTML = `<label id="label-produto-${itemCount}" for="min-quantity-produto-${itemCount}">Produto ${itemCount}:</label>
                           <input type="number" id="min-quantity-produto-${itemCount}" value="3" min="0" onchange="updateNotifications()">`;
    configContainer.appendChild(newConfig);

    updateNotifications();
}
