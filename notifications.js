function updateNotifications() {
    const notifications = document.getElementById('notifications');
    notifications.innerHTML = '<div id="notification-title">Notificações</div>';

    const items = document.querySelectorAll('#items-container .item');
    items.forEach((item, index) => {
        const productName = item.querySelector('input[type="text"]').value;
        const quantity = parseInt(item.querySelector('input[type="number"]').value);
        const minQuantity = document.getElementById(`min-quantity-produto-${index + 1}`);

        if (minQuantity) {
            const minQuantityValue = parseInt(minQuantity.value);
            if (quantity < minQuantityValue) {
                notifications.innerHTML += `<div class="notification" data-product="${productName.toLowerCase()}">Atenção: ${productName} está em falta!</div>`;
            }
        }
    });
}
