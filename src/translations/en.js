export const en = {
  // Homepage
  homepage: {
    title: '🎮 Couple Fun Games 💕',
    intro: 'Welcome to Couple Fun Games! A collection of fun, interactive games designed for couples to enjoy together. Pick a game below and start having fun!',
    availableGames: 'Available Games:',
    playNow: 'Play Now 🎮',
    shopeeFortuneWheel: {
      name: 'Shopee Fortune Wheel',
      description: 'Spin the wheel, guess letters, and win your shopping budget! A fun Wheel of Fortune-inspired game.'
    },
    talkDeck: {
      name: 'TalkDeck',
      description: 'Deep conversations start here. Flip cards to discover questions about love, dreams, and everything in between.'
    }
  },

  // Host Setup
  hostSetup: {
    title: '🎡 Shopee Fortune Wheel 💕',
    subtitle: 'Spin, Guess, and Win!',
    secretPhraseLabel: 'Enter the Secret Phrase:',
    secretPhrasePlaceholder: 'e.g., I LOVE YOU SO MUCH',
    currencyLabel: 'Currency Code:',
    currencyPlaceholder: 'e.g., IDR, USD, EUR',
    currencyHint: '💡 Set the currency code for displaying values (e.g., IDR, USD, EUR)',
    wheelConfigTitle: 'Wheel Configuration:',
    useDefaultWheel: 'Use Default Wheel (Recommended)',
    customizeWheel: 'Customize Wheel Values and Weights',
    configHint: '💡 Tip: Lower weight = rarer value. Weights are relative to each other.',
    valueLabel: 'Value',
    weightLabel: 'Weight (Rarity)',
    actionLabel: 'Action',
    addValue: '➕ Add Value',
    resetToDefault: '🔄 Reset to Default',
    gameSettingsTitle: 'Game Settings:',
    vowelPriceLabel: 'Initial Vowel Price',
    vowelPriceHint: '💡 1st vowel costs this amount, 2nd costs 2x, 3rd costs 3x, etc.',
    bonusPerLetterLabel: 'Bonus Points per Unguessed Letter',
    bonusPerLetterHint: '💡 Bonus awarded for each letter not guessed when solving the phrase correctly.',
    startButton: 'Start Game 🎮',
    rulesTitle: '📖 How to Play:',
  holdToReveal: 'Hold to reveal',
    rules: {
      spinWheel: '🎡 <strong>Spin the Wheel:</strong> Click "Spin" to get a random value that determines your potential points',
      guessConsonants: '🔤 <strong>Guess Consonants:</strong> After spinning, select a consonant letter',
      guessCorrect: '✅ If correct: ADD the spun value to your score',
      guessWrong: '❌ If wrong: LOSE HALF of the spun value from your score',
      buyVowels: '💰 <strong>Buy Vowels:</strong> Purchase vowels (A, E, I, O, U) using your points',
      vowel1st: '1st vowel',
      vowel2nd: '2nd vowel',
      vowel3rd: '3rd vowel',
      andSoOn: 'and so on...',
      solvePhrase: '🎯 <strong>Solve the Phrase:</strong> When you know the answer, click "Guess Full Phrase"',
      solveCorrect: '✅ If correct: Earn',
      solveCorrectBonus: 'bonus for each unguessed letter!',
      solveWrong: '❌ If wrong: LOSE HALF of your current score',
      finalScore: '🛍️ <strong>Your Final Score = Your Shopee Shopping Budget!</strong>',
      proTip: '💡 <strong>Pro Tip:</strong> Balance between revealing letters and solving early to maximize your bonus points. Good luck! 🍀'
    }
  },

  // Game Board
  gameBoard: {
    initialMessage: 'Spin the wheel to start!',
    spinResult: 'You spun',
    nowGuessConsonant: 'Now guess a consonant.',
    errorSpinning: 'Error spinning the wheel. Please try again.',
    spinFirst: 'Please spin the wheel first!',
    alreadyGuessed: 'You already guessed that letter!',
    guessConsonant: 'Please guess a consonant!',
    correct: 'Correct!',
    inPhrase: 'is in the phrase.',
    wrong: 'Wrong!',
    notInPhrase: 'is not in the phrase.',
    cannotAfford: 'Not enough points! You need',
    vowelPurchased: 'Vowel purchased!',
    vowelInPhrase: 'is in the phrase.',
    vowelNotInPhrase: 'is not in the phrase (but still revealed).',
    congratulations: '🎉 Congratulations! You solved it!',
    bonusAwarded: 'Bonus awarded for',
    unguessedLetters: 'unguessed letters!',
    incorrectPhrase: '❌ Incorrect! Lost half your score. Try again!',
    spinButton: 'Spin',
    score: 'Score',
    buyVowel: 'Buy Vowel',
    cost: 'Cost',
    consonants: 'Consonants',
    vowels: 'Vowels',
    guessPhraseButton: 'Guess Full Phrase',
    cancelButton: 'Cancel',
    submitButton: 'Submit',
    yourGuess: 'Your guess:',
    helpButton: '❓ Help',
    endGameButton: '🏁 End Game'
  },

  // Help Modal
  helpModal: {
    title: '🎮 How to Play Shopee Fortune Wheel',
    objective: '🎯 Game Objective',
    objectiveText: 'Guess the secret phrase by spinning the wheel and guessing letters. Your final score becomes your Shopee shopping budget!',
    howToPlayTitle: '🎡 How to Play',
    steps: {
      step1: '<strong>Spin the Wheel:</strong> Click the "Spin" button to get a random value',
      step2: '<strong>Guess Consonants:</strong> Click on a consonant letter to guess it',
      step2a: '✅ Correct guess: <strong>ADD</strong> the spun value to your score',
      step2b: '❌ Wrong guess: <strong>LOSE HALF</strong> of the spun value from your score',
      step3: '<strong>Buy Vowels:</strong> Purchase vowels (A, E, I, O, U) using your score',
      step3a: 'First vowel costs the initial price (e.g., {currency} 5,000)',
      step3b: 'Second vowel costs 2× the initial price',
      step3c: 'Third vowel costs 3× the initial price, and so on',
      step4: '<strong>Solve the Phrase:</strong> When you think you know the answer, click "Guess Full Phrase"',
      step4a: '✅ Correct answer: Get bonus points for each unguessed letter',
      step4b: '❌ Wrong answer: <strong>LOSE HALF</strong> your current score'
    },
    scoringTipsTitle: '💰 Scoring Tips',
    scoringTips: {
      tip1: 'Higher wheel values give more points for correct guesses',
      tip2: 'Vowels are revealed when purchased, whether they\'re in the phrase or not',
      tip3: 'Solve the phrase early to maximize bonus points from unguessed letters',
      tip4: 'Be careful! Wrong guesses and wrong phrase attempts can cost you points'
    },
    strategyTitle: '🎊 Winning Strategy',
    strategyText: 'Balance between guessing common letters early and solving the phrase before you reveal too many letters. Good luck! 🍀',
    closeButton: 'Got it! Let\'s Play 🎮'
  },

  // Final Summary
  finalSummary: {
    title: '🎊 Game Over! 🎊',
    shopeeBudget: 'Your Shopee Budget',
    bonusDetails: '🎁 Bonus Details',
    scoreBeforeBonus: 'Score before bonus:',
    unguessedCount: 'Unguessed letters count:',
    unguessedLetters: 'Unguessed letters:',
    bonusPerLetter: 'Bonus per letter:',
    totalBonus: 'Total bonus:',
    celebrations: {
      amazing: 'Amazing! You\'re ready for a shopping spree! 🛍️',
      great: 'Great job! That\'s a nice budget! 💰',
      notBad: 'Not bad! Every rupiah counts! 💕',
      ohNo: 'Oh no! Better luck next time! 🎯'
    },
    playAgain: '🔄 Play Again',
    shopeeMessage: 'Time to go shopping on Shopee! 🛒',
    backToHome: '🏠 Back to Home'
  },

  // Language Switcher
  language: {
    english: 'English',
    indonesian: 'Indonesian'
  },

  // Support Button
  support: {
    buttonText: '☕ Support Developer',
    tooltip: 'Buy me a coffee!'
  },

  // Wheel Component
  wheel: {
    youSpun: 'You spun!',
    spinMe: 'Spin Me!',
    spinning: '🎡 Spinning...',
    spun: '✅ Spun!',
    spinWheel: '🎯 Spin the Wheel!',
    sound: '🔊 Wheeeee!'
  },

  // TalkDeck
  talkDeck: {
    title: '💬 TalkDeck 💕',
    subtitle: 'Deep conversations, one card at a time',
    tapToFlip: 'Tap to reveal a question',
    questionsRemaining: 'Questions remaining',
    instructions: 'Tap the card to reveal a conversation starter. Tap again for a new question!',
    backToHome: '🏠 Back to Home',
    questions: [
      // Romantic (20 questions)
      'What was the moment you knew you had feelings for me?',
      'What\'s your favorite memory of us together?',
      'How do you think our relationship has grown since we first met?',
      'What small thing do I do that makes you feel loved?',
      'What\'s one thing about our relationship that makes you smile?',
      'When do you feel most connected to me?',
      'What\'s your favorite way to spend quality time together?',
      'What\'s something romantic I\'ve done that you\'ll never forget?',
      'How do you like to be comforted when you\'re feeling down?',
      'What song reminds you of us and why?',
      'What\'s one dream you have for our future together?',
      'What\'s the most thoughtful gift I\'ve ever given you?',
      'How do you feel when we\'re apart for a long time?',
      'What\'s your idea of the perfect date night?',
      'What makes you feel most appreciated in our relationship?',
      'If you could describe our love in three words, what would they be?',
      'What tradition would you like us to start together?',
      'What\'s one thing I do that always makes your heart flutter?',
      'How has being with me changed you as a person?',
      'What\'s your favorite thing I say to you?',

      // Serious (20 questions)
      'What are your biggest fears about the future?',
      'How do you handle stress and what can I do to support you?',
      'What\'s something you\'re struggling with that you haven\'t told me?',
      'What are your core values and how do they guide your life?',
      'How do you define success in life?',
      'What\'s the most important lesson life has taught you?',
      'What are your thoughts on work-life balance?',
      'How do you feel about where we are in life right now?',
      'What\'s something you wish people understood better about you?',
      'What does commitment mean to you?',
      'How do you want to grow as a person in the next year?',
      'What\'s your biggest insecurity and how can I help?',
      'How do you feel about compromise in relationships?',
      'What are your thoughts on having children?',
      'What does financial stability mean to you?',
      'How do you handle conflict in relationships?',
      'What role does family play in your life?',
      'What are your thoughts on personal space in a relationship?',
      'How important is career success to you?',
      'What legacy do you want to leave behind?',

      // Funny (20 questions)
      'If you could only eat one food for the rest of your life, what would it be?',
      'What\'s the most embarrassing thing that\'s ever happened to you?',
      'If you were a superhero, what would be your useless superpower?',
      'What\'s the weirdest dream you\'ve ever had?',
      'If animals could talk, which would be the rudest?',
      'What\'s your most irrational fear?',
      'If you could swap lives with any fictional character, who would it be?',
      'What\'s the worst fashion choice you\'ve ever made?',
      'If you had to delete all but three apps from your phone, which would you keep?',
      'What\'s your guilty pleasure that you\'re embarrassed about?',
      'If you could have dinner with any three people, dead or alive, who would they be?',
      'What\'s the funniest nickname you\'ve ever had?',
      'If you were a kitchen appliance, what would you be and why?',
      'What\'s the most ridiculous argument we\'ve ever had?',
      'If you could rename yourself, what name would you choose?',
      'What\'s your most unpopular opinion?',
      'If you could be famous for anything, what would it be?',
      'What\'s the silliest thing you believed as a child?',
      'If you were invisible for a day, what would you do?',
      'What\'s your go-to karaoke song?',

      // Dreamy (20 questions)
      'If you could live anywhere in the world, where would it be?',
      'What\'s your ultimate dream vacation?',
      'If money was no object, what would you do with your life?',
      'What does your perfect day look like from start to finish?',
      'If you could master any skill instantly, what would it be?',
      'What adventure do you want us to go on together?',
      'If you could design our dream home, what would it look like?',
      'What\'s on your bucket list that you want to do together?',
      'If you could time travel, which era would you visit?',
      'What kind of life do you envision for us in 10 years?',
      'If you could wake up tomorrow with any career, what would it be?',
      'What\'s a hobby you\'ve always wanted to try together?',
      'If we could move to any country, where would you choose?',
      'What does retirement look like in your dreams?',
      'If you could have a private concert from any artist, who would it be?',
      'What fantasy world would you want to live in for a week?',
      'If you could own any type of business, what would it be?',
      'What\'s a cause you dream of supporting or starting?',
      'If you could learn the answer to any question, what would you ask?',
      'What experience do you want to have before you die?',

      // About Future (10 questions)
      'Where do you see yourself in 5 years?',
      'What goals do you want to achieve in the next year?',
      'How do you imagine our life together will evolve?',
      'What kind of parent do you think you\'ll be?',
      'What changes do you want to make in your life?',
      'How do you want to celebrate our future milestones?',
      'What are you most excited about for our future?',
      'What kind of home do you want us to create together?',
      'How do you envision us growing old together?',
      'What traditions do you want to pass down to future generations?',

      // About Past (10 questions)
      'What\'s your favorite childhood memory?',
      'Who was your first crush and what happened?',
      'What\'s something from your past that shaped who you are today?',
      'What\'s the best advice you\'ve ever received?',
      'What moment from your past do you wish you could relive?',
      'What was your biggest mistake and what did you learn from it?',
      'Who was your best friend growing up and what were they like?',
      'What\'s something you believed as a child that turned out to be wrong?',
      'What family tradition did you have that you loved?',
      'What achievement from your past are you most proud of?'
    ]
  }
};
