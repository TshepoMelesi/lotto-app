const getRandomNumber = ( a, b ) => {
        if(b <= a ) return '--'

        return Math.floor( Math.random() * ( b - a ) + a )
}

const generateBtn = document.getElementById( "generateBtn" )
const placeholders = document.querySelectorAll( ".ball-num" )
let generatedNumbers = []

generateBtn.addEventListener( 'click', eventClick => {

        while(generatedNumbers.length < 3){
                let tempNum = getRandomNumber( 1, 20 )
                if( generatedNumbers.indexOf( tempNum ) < 0 ){
                        generatedNumbers.push( tempNum )
                }
        }
        
        generatedNumbers.forEach( ( num, idx ) => {
               return placeholders[idx].innerHTML = num <= 9 ? `0${num}` : `${num}`
        })

        generatedNumbers = []
})