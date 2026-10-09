// Автор: Кліщ Юрій, група ІА-401 (klishchyuriy)
// Плавне перегортання сторінок
document.querySelectorAll('.btn').forEach(function (b) {
  b.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(function () { location.href = b.getAttribute('href'); }, 330);
  });
});
// Перемикання стрілками на клавіатурі
document.addEventListener('keydown', function (e) {
  var b = e.key === 'ArrowRight' ? document.querySelector('.right')
        : e.key === 'ArrowLeft' ? document.querySelector('.left') : null;
  if (b) b.click();
});
