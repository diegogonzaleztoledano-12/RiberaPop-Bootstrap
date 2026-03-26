document.addEventListener('show.bs.modal', (event) => {
    const modal = event.target;
    const trigger = event.relatedTarget;

    if (trigger && modal.querySelector('.modal-title')) {
        modal.querySelector('.modal-title').textContent = trigger.textContent.trim();
    }
});

const collapseEl = document.getElementById('collapseAmuleto');
const progressBar = document.getElementById('myProgressBar');
const progressContainer = document.getElementById('progressContainer');
const luckyContent = document.getElementById('luckyContent');

collapseEl.addEventListener('show.bs.collapse', () => {
    progressBar.classList.remove('w-100');
    progressBar.classList.add('w-0');
    progressContainer.classList.remove('d-none');
    luckyContent.classList.add('d-none');

    setTimeout(() => {
        progressBar.classList.replace('w-0', 'w-100');
    }, 100);

    setTimeout(() => {
        progressContainer.classList.add('d-none');
        luckyContent.classList.remove('d-none');
    }, 2100);
});