const URL = 'https://jsonplaceholder.typicode.com/photos'
const wrapper = document.querySelector('.wrapper')

const fetchUrl = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    data.forEach(item => {
        const block = document.createElement('div')
        block.innerHTML = `
                <span>${item.url}</span>
            `
        wrapper.append(block)
    })
}
fetchUrl(URL)



// fetch(`https://jsonplaceholder.typicode.com/photos`)
//     .then(response => response.json())
//     .then(data => {
//         document.images(data.url)
//     })
//
//
// const spaceholder = () => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
// }