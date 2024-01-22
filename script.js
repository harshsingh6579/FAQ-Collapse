const toggleBtn = document.querySelectorAll(".faq-toggle");

const faqs = document.querySelectorAll("faq");

toggleBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentNode.classList.toggle("active");
    });
})


