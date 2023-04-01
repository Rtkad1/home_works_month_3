// console.log("hi")
//
//
// console.log('loading...')
// setTimeout( () => {
//     const product = {
//         name: 'Product Name',
//         price: '$XXX'
//     }
//     console.log(product, '1 step')
//     setTimeout( () => {
//         product.soldOut = true
//         console.log(product, '2 step')
//         setTimeout( () => {
//             product.soldOut = false
//             console.log(product, '3 step')
//         }, 2000)
//     }, 3000)
// }, 1000)


// console.log('Loading...')
//
// const request = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         const product = {
//             name: 'Product Name',
//             price: '$XXX'
//         }
//         console.log(product, '1 step')
//         resolve(product)
//         reject()
//     }, 2000)
// })
//
// const resolveData = (product) => {
//     setTimeout(() => {
//         product.soldOut = true
//         console.log(product, '2 step')
//     }, 1000)
// }
//
// const rejectData = () => console.error('ERROR REJECTED')
//
//
// request.then(resolveData, rejectData)


// console.log('Loading...')
//
// const request = new Promise((resolve) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Iphone XX',
//             price: '$1200'
//         }
//         console.log(product, '1 step')
//         resolve(product)
//     }, 1000)
// })
//
// request.then((product) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             product.solOut = true
//             console.log(product, '2 step')
//             resolve(product)
//         }, 2000)
//     })
// }).then((product) => {
//     setTimeout(() => {
//         product.color = 'black'
//         console.log(product, '3 step')
//     }, 2000)
// }).catch((e) => {
//     console.log(e, 'ERROR')
// }).finally(() => {
//     console.log('FINALLY')
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => {
//         document.write(data.title)
//     })

// ----------------------

const block = document.querySelector('.block')
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')

let count = 1

const spaceholder = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
            `
        })
}

btnNext.onclick = () => {
    count++
    spaceholder()
}

btnPrev.onclick = () => {
    if (count > 1) {
        count--
        spaceholder()
    }
}

// ---------

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))