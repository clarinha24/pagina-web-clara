document.addEventListener('DOMContentLoaded', function () {
    const cartoes = document.querySelectorAll('.cartao');
    cartoes.forEach(cartao => {
        cartao.addEventListener('click', function () {
            cartao.classList.toggle('rotacionado');
        });
    });
});
