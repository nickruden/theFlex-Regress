document.addEventListener('DOMContentLoaded', function () {
    const headerButton = document.querySelector('.header__button');
    const modals = document.querySelectorAll('.my-modal');
    const overlay = document.querySelector('.overlay');

    const updateModalScroll = (modalBody) => {
        const modalBodyHeight = modalBody.scrollHeight;
        const modalBodyMaxHeight = parseInt(window.getComputedStyle(modalBody).maxHeight, 10);

        if (modalBodyHeight > modalBodyMaxHeight) {
            modalBody.style.overflowY = 'auto';
        } else {
            modalBody.style.overflowY = 'hidden';
        }
    }

    const setActiveElement = elem => {
        elem.classList.add('active');
    }

    const setDeactivateElement = elem => {
        elem.classList.remove('active');
    }

    headerButton.addEventListener('click', () => {
        const modalId = headerButton.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        if (modal) {
            const modalBody = modal.querySelector('.my-modal__body');
            setActiveElement(overlay);
            setActiveElement(modal);
            // document.body.style.overflow = 'hidden';
            updateModalScroll(modalBody);
        }
    });

    modals.forEach(modal => {
        const closeModalButton = modal.querySelector('.close-button');
        closeModalButton.addEventListener('click', () => {
            setDeactivateElement(overlay);
            setDeactivateElement(modal);
            // document.body.style.overflow = 'auto';
        });
    });
});