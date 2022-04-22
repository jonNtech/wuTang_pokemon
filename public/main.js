console.log('main.js loded')

document.querySelector('button').addEventListener('click', getFetch)

getPokeName()
async function getPokeName(){
    const response = await fetch('/pokeName')
    const data = await response.json()
    console.log(data)
}