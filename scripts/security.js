// Запрет правой кнопки мыши
document.addEventListener('contextmenu', event => event.preventDefault());

// Запрет выделения текста
document.onselectstart = function() { return false; };

// Запрет горячих клавиш для копирования (Ctrl+C, Ctrl+U)
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83)) {
        return false;
    }
};