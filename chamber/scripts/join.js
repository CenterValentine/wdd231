
document.getElementById('join-form').addEventListener('submit', function (event) {
    const timestamp = new Date().toISOString();
    document.getElementById('timestamp').value = timestamp;
});

function openModal(id) {
    console.log('open', id);
    document.getElementById(id).showModal();
}

function closeModal(id) {
    console.log('close', id);
    document.getElementById(id).close();
}