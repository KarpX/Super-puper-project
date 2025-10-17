const openBtn = document.getElementById("openDialog");
const modalW = document.getElementById("contactModal");
const dlg = new bootstrap.Modal(modalW);
const form = document.getElementById("contactForm");
let lastActive = null;

openBtn.addEventListener("click", () => {
  lastActive = document.activeElement;
  dlg.show();
  modalW.querySelector("input, select, textarea, button")?.focus();
});

form?.addEventListener("submit", (e) => {
  [...form.elements].forEach((el) => el.setCustomValidity?.(""));

  if (!form.checkValidity()) {
    e.preventDefault();

    const email = form.elements.email;
    if (email?.validity.typeMismatch) {
      email.setCustomValidity(
        "Введите корректный e-mail, например name@example.com"
      );
    }
    form.reportValidity();
    [...form.elements].forEach((el) => {
      if (el.willValidate)
        el.toggleAttribute("aria-invalid", !el.checkValidity());
    });
    return;
  }

  e.preventDefault();

  dlg.hide();
  form.reset();
});

modalW.addEventListener("close", () => {
  lastActive?.focus();
});
