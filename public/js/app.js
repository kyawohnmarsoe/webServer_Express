

const weatherform = document.getElementById('weatherform')
const search = document.getElementById('search')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// console.log(weatherform)
// console.log(search)

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    // console.log(search.value)

    fetch(`http://localhost:3000/weather?address=${search.value}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
            messageOne.textContent = data.error
        }else{
            console.log(data.location)
            
             messageOne.textContent = data.location
                messageTwo.textContent = data.forecast

        }
        
    })
})
})

console.log('client side js file is loading');