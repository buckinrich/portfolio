$(() => {
  const $li = $('li')
  let mole = null
  let score = 0
  let timerRunning = false
  const $score = $('#scoreupdate')
  // const $highscore = $('#highscore-display')

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
      score += 1
      $score.text(score)
    }
  })

  //Countdown
  let countdown = null
  let timeRemaining = 10
  const $timer = $('#timerid')
  const $startButton = $('.startButton')
  $startButton.on('click', () => {
    startStopBtn()
    // $startButton.fadeOut()
  })

  $startButton.on((e) => {
    timeRemaining = $(e.target).text()
  })

  //Start Button Events
  function startStopBtn() {
    if(timerRunning) return false
    timerRunning = true
    countdown = setInterval(() => {
      timeRemaining = timeRemaining - 1
      $timer.html(`${timeRemaining}`)
      const $main = $('main')
      $main.css('display', 'block')

      //When time runs out
      if (timeRemaining === 0) {
        clearInterval(countdown)
        $main.css('display', 'none')
        timeRemaining = 10
        timerRunning = false
        // $timer.html(`'Times up! Your score is ${score}'`)
        $startButton.html('Try again?')
        const $logo = $('.logo')
        $logo.css('display', 'none')

        // const $storehigh = localStorage.getItem('highscore')
        localStorage.setItem('highscore', score)
        console.log(score)
        const storehigh = localStorage.getItem('highscore')
        if(storehigh > score){
          getHigh()
        }
      }



    }, 1000)
  }

  const storehigh = localStorage.getItem('highscore')
  function getHigh() {
    const $highScoreHere = $('#highscorehere')
    $highScoreHere.html(storehigh)
  }
  // if (storehigh > score || score === false){
  //   const $scoreupdate = $('#scoreupdate')
  //   $scoreupdate.html(`${storehigh}`)
  // }



})
