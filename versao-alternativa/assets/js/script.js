document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DO TEMA CLARO/ESCURO ---
    var root = document.documentElement;
    var btn = document.getElementById("themeToggle");

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        
        if (btn) {
            if (theme === "dark") {
                btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        }
    }

    var savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme("light");
    }

    if (btn) {
        btn.addEventListener("click", function () {
            var currentTheme = root.getAttribute("data-theme");
            if (currentTheme === "light") {
                applyTheme("dark");
            } else {
                applyTheme("light");
            }
        });
    }

    // --- 2. LÓGICA DO MENU MOBILE (BULMA) ---
    // Seleciona todos os botões de menu "hambúrguer"
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Adiciona o evento de clique em cada um deles
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                // Pega o ID da div de links (navContent) a partir do data-target
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Alterna a classe 'is-active' no botão e no menu para exibir/ocultar
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});