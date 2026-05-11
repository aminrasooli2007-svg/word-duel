const playBtn = document.querySelector('#play')
const timeBtn = document.querySelector('#timer')
const WordsContainer =document.querySelector('#wrds-container')
const WordInput =document.querySelector('#word-input')

let play = false
let second = 0
let minute =0
let myInterval = null
let dictionary =[
    {
        title:'Mobile',
        active: true,
    },{
          title:'Game',
          active: true,
    },
    {
          title:'Enjoy',
          active: true,
    },{
          title:'Chealse',
          active: true,
    },
    {
          title:'Book',
          active: true,
    },
    {
          title:'Lamborghini',
          active: true,
    },{
          title:'cristiano ronaldo',
          active: true,
    }
]
let words = dictionary.filter((element)=>{
    let isElementShiudbeActive = Math.round(Math.random())
    if(isElementShiudbeActive == 1){
        return element
    }
})
playBtn.addEventListener('click',()=>{
    if(play == false){
        play = true
        playBtn.innerHTML = '||'
        WordInput.disabled = false
        myInterval = setInterval(()=>{
            second++
            
            if(second == 59){
                second = 0
                minute++
            }
            let minutedisplay =`${String(minute).length == 1 ? `0${minute}`:`${minute}`}`
            let seconddisplay = `${String(second).length == 1 ? `0${second}`:`${second}`}`

            let result = `${minutedisplay} : ${seconddisplay}`
            timeBtn.innerHTML = result
        },1000)

        let displayWords= words.map((element)=>{
            if(element.active == true){
                return `<div>${element.title}</div> `
            }
        }).join('')


        WordsContainer.innerHTML = displayWords

        WordInput.addEventListener('keydown',(e)=>{
            if(e.key == 'Enter'){
                let foundIndex = words.findIndex((element)=>{
                    return element.title == WordInput.value
                })
                if( foundIndex != -1){

                    words.splice(foundIndex,1)
                }
                
                let newWord = words.map((element)=>{
                    if(element.active == true){
                        return `<div>${element.title}</div>`
                    }
                }).join('')

                WordsContainer.innerHTML = newWord
                WordInput.value = ''

                if(words.length == 0){
                    alert(`You compled the Round After: ${minute} minutes and ${second} seconds`)
                    clearInterval(myInterval)
                    second = 0
                    minute = 0
                    timeBtn.innerHTML = '00:00'
                    words =  dictionary.filter((element)=>{
                                let isElementShiudbeActive = Math.round(Math.random())
                                if(isElementShiudbeActive == 1){
                                return element
                            }
                        })
                    play = false
                    playBtn.innerHTML = '▶️'
                }
            }
        })
    }
    else{ 
      playBtn.innerHTML =  '▶️'
        play = false
        clearInterval(myInterval)
    }
})