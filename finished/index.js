const characters = [
    {
        name: 'Mario',
        characterImage: './images/mario.png'
    },
    {
        name: 'Luigi',
        characterImage: './images/luigi.png'
    },
    {
        name: 'Yoshi',
        characterImage: './images/yoshi.png'
    },
    {
        name: 'Donkey Kong',
        characterImage: './images/donkeykong.png'
    },
    {
        name: 'Peach',
        characterImage: './images/peach.png'
    },
    {
        name: 'Bowser',
        characterImage: './images/bowser.png'
    }
]

const h4 = document.querySelector('h4')
const img = document.querySelector('img')
img.style.animationPlayState = 'paused'


img.onclick = () => {
    img.style.animationPlayState = 'running'
    const randomIndex = Math.floor(Math.random() * characters.length)
    const { name, characterImage } = characters[randomIndex]

    setTimeout(() => {
        img.setAttribute('src', characterImage)
        h4.innerText = name
    }, 3000)
}
