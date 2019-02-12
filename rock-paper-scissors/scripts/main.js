window.addEventListener('DOMContentLoaded', () => {

  const rockdiv = document.querySelector('#r')
  const paperdiv = document.querySelector('#p')
  const scissorsdiv = document.querySelector('#s')

  //onclick activates game

  function getFunky() {
    rockdiv.addEventListener('click', function() {
      game('r')
    })

    paperdiv.addEventListener('click', function() {
      game('p')
    })

    scissorsdiv.addEventListener('click', function() {
      game('s')
    })
  }
  getFunky()

})

function getcomputerchoice() {
  const choices = ['r', 'p', 's']
  const randomNum = (Math.floor(Math.random() * 3))
  return choices[randomNum]
}

function wordConvert(letter) {
  if (letter === 'r') return 'Rock'
  if (letter === 's') return 'Scissors'
  return 'Paper'
}

//game() console logs whether comp/user wins
function game(userChoice) {
  const resultdiv = document.querySelector('.result')

  const computerChoice = getcomputerchoice()
  switch(userChoice + computerChoice) {
    case 'rs':
    case 'sp':
    case 'pr':
      resultdiv.innerHTML = wordConvert(userChoice) + ' beats ' + wordConvert(computerChoice) + '. You win!'
      break
    case 'rp':
    case 'ps':
    case 'sr':
      resultdiv.innerHTML = wordConvert(computerChoice) + ' beats ' + wordConvert(userChoice) + '. Computer wins.'
      break

    default:
      resultdiv.innerHTML = wordConvert(computerChoice) + ' vs ' + wordConvert(userChoice) + '. Match drawn.'

  }
}






//
