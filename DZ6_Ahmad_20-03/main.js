const alcogoglik = document.getElementById('alcoparty')
const alcash = document.querySelector('.alcash')

alcogoglik.addEventListener('input', () => {
    const rev = alcogoglik.value.split('').reverse().join('')
    alcash.innerHTML = rev
})