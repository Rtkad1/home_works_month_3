// console.log(
// )

// som.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     })
// })

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')


const convert = (elem, target, target2, isTrue) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue) {
                target.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.euro).toFixed(2)
            } else {
                target.value = (elem.value * response.usd).toFixed(2)
                target2.value = (elem.value * response.euro).toFixed(2)
            }
            // if (elem.value === '') target.value = ''
            // elem.value === '' ? target.value = '' : null
            elem.value === '' && (target.value = '')
            elem.value === '' && (target2.value = '')
            console.log(response)
        }
    }
}

convert(som, usd, euro, true)
convert(euro, som, usd, true)
convert(euro, usd, som, false)
convert(usd, som, euro, false)
