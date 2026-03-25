document.addEventListener('DOMContentLoaded', function () {
    const exampleModal = document.getElementById('exampleModal');
    
    exampleModal.addEventListener('show.bs.modal', function (event) {
        const triggerElement = event.relatedTarget;
        const linkText = triggerElement.innerText || triggerElement.textContent;
        const modalTitle = exampleModal.querySelector('.modal-title');
        modalTitle.textContent = linkText;
    });
});