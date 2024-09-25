document.querySelectorAll('.dropdown-arrow-list').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Останавливаем переход по ссылке
        event.stopPropagation(); // Останавливаем всплытие события
        const parentLi = this.closest('li'); // Получаем родительский элемент <li>
        parentLi.classList.toggle('dropdown-open'); // Переключаем класс для открытия/закрытия
    });
});

// Обработчик для основной ссылки
document.querySelectorAll('.dropdown-arrow').forEach(item => {
    item.addEventListener('click', function(event) {
        const linkHref = this.getAttribute('href');
        if (!this.parentElement.classList.contains('dropdown-open')) { // Проверяем, открыт ли дропдаун
            window.location.href = linkHref; // Если не открыт, переходим по ссылке
        }
    });
});

// Открытие и закрытие бокового меню
document.getElementById('hamburger').addEventListener('click', function() {
    const overlay = document.getElementById('navOverlay');
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
    overlay.classList.toggle('active_overlay');
    document.body.classList.add('no-scroll');
});

// Закрытие меню при клике на оверлей
document.getElementById('navOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
        this.classList.remove('active_overlay'); // Скрываем оверлей
        document.body.classList.remove('no-scroll');
        document.querySelectorAll('.dropdown-open').forEach(openDropdown => {
            openDropdown.classList.remove('dropdown-open'); // Закрываем все дропдауны
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.nav__wrapper ul li a');
    const currentPage = window.location.pathname.split('/').pop(); // Получаем имя текущей страницы

    menuItems.forEach(item => {
        item.classList.remove('active_link');
        
        // Проверяем, совпадает ли href с текущей страницей
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active_link'); // Добавляем класс активной ссылки
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    let body = document.querySelector("body");
    
        body.classList.add('touch');

    let arrowContainers = document.querySelectorAll('.link-arrow'); // Находим все контейнеры с ссылками и стрелками
    arrowContainers.forEach(container => {
        let thisLink = container.querySelector('a'); // Ссылка внутри контейнера
        let arrow = container.querySelector('.arrow'); // Стрелка внутри контейнера
        let subMenu = container.nextElementSibling; // Меню после контейнера

        thisLink.classList.add('parent');

        arrow.addEventListener('click', function(event) {
            event.stopPropagation(); // Останавливаем дальнейшее всплытие события
            subMenu.classList.toggle('open');
            arrow.classList.toggle('arrow_active');
        });
    });
});


