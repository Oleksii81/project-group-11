(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-3]"),
      closeModalBtn: document.querySelector("[data-modal-close-3]"),
      modal: document.querySelector("[data-modal-3]"),
      body: document.querySelector("body"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      if (refs.modal.classList.contains("is-hidden")) {
      refs.body.style.overflow = "visible"; 
    } else {
      refs.body.style.overflow = "hidden"; 
    }
    }
  })();