window.onload = () => {

    const main = document.getElementById('main');
    const block = document.getElementById('block');

    main.classList.remove('main_hidden');

    setTimeout(() => {
        block.classList.remove('main__block_hidden');
    }, 300)

    block.addEventListener('mouseenter', () => {
        block.classList.add('main__block_upped');
    })

    block.addEventListener('mouseleave', () => {
        block.classList.remove('main__block_upped');
    })
}