const URL = 'https://jsonplaceholder.typicode.com/posts'
const wrapper = document.querySelector('.wrapper')

const fetchNews = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        data.forEach(item => {
            const block = document.createElement('div')
            block.setAttribute('class', 'block')
            block.innerHTML = `
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTco3jOxEPCbrErQ_byjoPg3rX_wgWKYsb0wKFKaFUZS3jM3qapp4uEmXwCDGeIpXMt4_I&usqp=CAU" alt="#">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            `
            wrapper.append(block)
        })
}
fetchNews(URL)


