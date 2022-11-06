const characters = [
    {
        name: 'Mario',
        img: './images/mario.png'
    },
    {
        name: 'Luigi',
        img: './images/luigi.png'
    },
    {
        name: 'Yoshi',
        img: './images/yoshi.png'
    },
    {
        name: 'Donkey Kong',
        img: './images/donkeykong.png'
    },
    {
        name: 'Peach',
        img: './images/peach.png'
    },
    {
        name: 'Bowser',
        img: './images/bowser.png'
    }
]

const h4 = document.querySelector('h4')
const image = document.querySelector('img')
image.style.animationPlayState = 'paused'



image.onclick = () => {
    image.style.animationPlayState = 'running'
    setTimeout(() => {
        image.setAttribute('src', './images/yoshi.png')
        h4.style.visibility = 'hidden'
    }, 3000)
}


