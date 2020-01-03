import '../style/index.css'


window.onload = function(){
    //get all id name
    const inp = document.getElementById('inp')
    const nameList = document.getElementById('name-list')
    const display = document.getElementById('display')
    const giveATry = document.getElementById('give-a-try')
    const firstPosition = document.getElementById('first-position')
    const secondPosition = document.getElementById('second-position')
    const thirdPosition = document.getElementById('third-position')

    const participantNames = []

    inp.addEventListener('keypress',function(event){
        if(event.key === 'Enter'){
            let newNames = event.target.value.split(',')
            if (newNames[0] !== ''){
                newNames.forEach(name => {
                    participantNames.push(name)
                    let item =createListItem(name)
                    nameList.appendChild(item)
                    event.target.value = ''
                })
            }
        }
    })


    giveATry.addEventListener('click',function(){
        if(participantNames.length === 0){
            alert('There Is No Entry')
        }else{
            let shuffleNames = shuffle(participantNames)

            for(let i = 1 ; i<shuffleNames.length ; i++ ){
                (function(i,count){

                    setTimeout(() => {
                        let rand = Math.floor(Math.random() * (shuffleNames.length))
                        display.innerHTML=shuffleNames[rand]



                        if(count === shuffleNames.length -1){
                            if(!firstPosition.innerHTML){
                                firstPosition.innerHTML = shuffleNames[rand]
                                let ind = participantNames.indexOf(shuffleNames[rand])
                                participantNames.splice(ind,1)
                            }else if(!secondPosition.innerHTML){
                                secondPosition.innerHTML = shuffleNames[rand]
                                let ind = participantNames.indexOf(shuffleNames[rand])
                                participantNames.splice(ind,1)
                            }else if(!thirdPosition.innerHTML){
                                thirdPosition.innerHTML = shuffleNames[rand]
                                let ind = participantNames.indexOf(shuffleNames[rand])
                                participantNames.splice(ind,1)
                            }else{
                                alert('Sorry, The Raffle Draw Is Completed')
                            }
                        }
                    

                    },i);
                })(i*100, i)
            }
        }
    })


}
//for li
function createListItem(name){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = name
    return li
}

//for shuffle

function shuffle(arr){
    let shuffleArr = [...arr]
    for(let i = shuffleArr.length - 1 ; i>0; i-- ){
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = shuffleArr[rand]
        shuffleArr[rand] = shuffleArr[i]
        shuffleArr[i] = temp
    }
    return shuffleArr
}

// console.log(shuffle([1,2,3,4,5]))
// console.log(shuffle([1,2,3,4,5]))
// console.log(shuffle([1,2,3,4,5]))