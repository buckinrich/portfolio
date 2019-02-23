$(() => {
  const $li = $('li')
  let mole = null
  let score = 0
  let timerRunning = false
  const $score = $('#scoreupdate')
  const whack = new Audio('sounds/pop.wav')
  const squeak = new Audio('sounds/chipmunk.wav')
  const woohoo = new Audio('sounds/woohoo.wav')

  //Mole set interval
  setInterval(() => {
    $(mole).removeClass('mole')
    $(mole).removeClass('whack')
    mole = $li[Math.floor(Math.random() * 16)]
    $(mole).addClass('mole')
  },1000)

  //Click on mole
  $li.click((e) => {
    if ($(e.target).hasClass('mole')) {
      $(mole).removeClass('mole')
      $(mole).addClass('whack')
      whack.play()
      score += 1
      $score.text(score)
    }
  })

  //Countdown
  let countdown = null
  let timeRemaining = 50
  const $timer = $('#timerid')
  const $startButton = $('.startButton')
  $startButton.on('click', () => {
    startStopBtn()
    woohoo.play()
  })

  $startButton.on((e) => {
    timeRemaining = $(e.target).text()
  })

  //Start Button Events
  function startStopBtn() {
    score = 0
    if(timerRunning) return false
    timerRunning = true
    countdown = setInterval(() => {
      timeRemaining = timeRemaining - 1
      $timer.html(`${timeRemaining}`)
      $score.text(`${score}`)
      const $main = $('main')
      $main.css('display', 'block')

      //When time runs out
      if (timeRemaining === 0) {
        clearInterval(countdown)
        squeak.play()
        $main.css('display', 'none')
        timeRemaining = 50
        timerRunning = false
        // $timer.html(`'Times up! Your score is ${score}'`)
        $startButton.html('Try again?')
        const $logo = $('.logo')
        $logo.css('display', 'none')
        const $h3 = $('h3')
        $h3.css('visibility', 'visible')
        const $highscoreclass = $('.highscoreclass')
        $highscoreclass.css('visibility', 'visible')

        const storehigh = localStorage.getItem('highscore')
        if(storehigh < score){
          localStorage.setItem('highscore', score)
        }
        getHigh()
      }
    }, 1000)
  }

  function getHigh() {
    const $highScoreHere = $('#highscorehere')
    const storehigh = localStorage.getItem('highscore')
    $highScoreHere.html(storehigh)
  }

})
