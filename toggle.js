const toggleBtn = document.querySelector('#toggle')
const body = document.querySelector('body')
let isDark = true

toggleBtn.addEventListener('click',()=>{
    if(isDark == true){
        isDark = false
        toggleBtn.innerHTML = '🌑'
        body.style.backgroundImage = 'url(./assets/images/light.png)'
        document.documentElement.style.setProperty('--secondry','rgb(52,48,38)')
        document.documentElement.style.setProperty('--text','black')
    }
    else{
        isDark = true
        toggleBtn.innerHTML = '☀️'
        body.style.backgroundImage = 'url(./assets/images/dark.jpg)'
        document.documentElement.style.setProperty('--secondry','rgb(255,214,90)')
        document.documentElement.style.setProperty('--text','wheat')
    }
})