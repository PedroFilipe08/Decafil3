function showRemoveInput() {
    document.getElementById('remove-item-input').style.display = 'inline-block';
    document.getElementById('remove-ok-button').style.display = 'inline-block';
}

function removeItem() {
    const productName = document.getElementById('remove-item-input').value.trim().toLowerCase();
    const items = document.querySelectorAll('#items-container .item');
    const configItems = document.querySelectorAll('#config-container .config-item');
    let found = false;

    // Remover o item da lista de itens
    items.forEach(item => {
        const currentProductName = item.querySelector('input[type="text"]').value.trim().toLowerCase();
        if (currentProductName === productName) {
            item.remove();
            found = true;
        }
    });

    // Remover o item das configurações
    configItems.forEach(configItem => {
        const label = configItem.querySelector('label').innerText.trim().toLowerCase();
        if (label.includes(productName)) {
            configItem.remove();
        }
    });

    // Se o item foi encontrado e removido, esconde os campos de remoção
    if (found) {
        document.getElementById('remove-item-input').style.display = 'none';
        document.getElementById('remove-ok-button').style.display = 'none';
        document.getElementById('remove-item-input').value = '';

        // Remover a notificação correspondente ao item
        const notifications = document.querySelectorAll('#notifications .notification');
        notifications.forEach(notification => {
            if (notification.getAttribute('data-product') === productName) {
                notification.remove();
            }
        });
    } else {
        alert('Produto não encontrado!');
    }

    updateNotifications();
}
