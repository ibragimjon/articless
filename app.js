const overlay = document.querySelector('.overlay')


const request = new XMLHttpRequest()


request.addEventListener('readystatechange', ()=>{
    if(request.readyState == 4 && request.status == 200){
        const data = JSON.parse(request.responseText)
        upDateUI("error")
    } else if(request.readyState == 4){
        overlay.classList.add('hidden')
    } else{
        overlay.classList.remove('hidden')
    }
})


request.open('GET', "http://localhost:3000/articles")
request.send()


function upDateUI (data){
    data.forEach((article) =>{
        console.log(article);
    })
}