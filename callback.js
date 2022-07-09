//fetch using promise
const data1 = () => new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => resolve(json))
    .catch(error => reject(error))
})
const displayData = () => {
    data1().then((json => console.log(json))).catch(error => console.log(error.message))
}
displayData()

//fetch using async await
const data2 = async function(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const d = await res.json()
        console.log(d)
    } catch(error) {
        console.log(error.message)
    }
}
data2()

//fetch using promise
const data3 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => resolve(res))
    .catch(error => reject(error))
})

const toJson = (res) => new Promise((resolve, reject) => {
    resolve(res.json())
})

const display = () => {
    const res = data3.then((res)=>{
        toJson(res).then((d) => console.log(d))
    }).catch((error) => console.log(error.message))
}
display()