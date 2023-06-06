
(function ($) {
    $(document).ready(function () { 
        jQuery(".subs-modal-btn, .subs-btn-close").on("click", function () {
        jQuery(this).parent(".backdrop").toggleClass("is-hidden");
        })
    });
})(jQuery);

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  })()
  // function toggleModal() {
  //   refs.modal.classList.toggle("is-hidden");
  //   console.log('Dratuti');
  // }
  