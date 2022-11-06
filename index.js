const characters = [
    {
        name: 'Mario',
        image: './images/mario.png'
    },
    {
        name: 'Luigi',
        image: './images/luigi.png'
    },
    {
        name: 'Yoshi',
        image: './images/yoshi.png'
    },
    {
        name: 'Donkey Kong',
        image: './images/donkeykong.png'
    },
    {
        name: 'Peach',
        image: './images/peach.png'
    },
    {
        name: 'Bowser',
        image: './images/bowser.png'
    }
]

const h4 = document.querySelector('h4')
const block = document.querySelector('img')
block.style.animationPlayState = 'paused'


block.onclick = () => {
    block.style.animationPlayState = 'running'
    const randomIndex = Math.floor(Math.random() * characters.length)
    const { name, image } = characters[randomIndex]
    setTimeout(() => {
        block.setAttribute('src', image)
        h4.innerText = name
    }, 3000)
}


