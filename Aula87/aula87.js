
const url=document.querySelector('#url')
const btnUrl=document.querySelector('#btnUrl')

btnUrl.addEventListener('click',(evt)=>{
    //window.location='https://youtube.com'
    //window.location.assign('https://youtube.com')
    window.location=url.value
})