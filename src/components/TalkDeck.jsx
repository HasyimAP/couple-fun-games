import { useState, useEffect } from 'react';
import './TalkDeck.css';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function TalkDeck({ onBackToHome }) {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [availableQuestions, setAvailableQuestions] = useState([]);
  const [askedQuestions, setAskedQuestions] = useState([]);

  // Initialize questions and load cache on mount
  useEffect(() => {
    initializeQuestions();
  }, [language]);

  const initializeQuestions = () => {
    const questions = t.talkDeck.questions;
    const cacheKey = `talkdeck_asked_${language}`;
    const cacheTimestampKey = `talkdeck_timestamp_${language}`;
    
    // Check if cache exists and is valid (within 1 week)
    const cachedAsked = localStorage.getItem(cacheKey);
    const cacheTimestamp = localStorage.getItem(cacheTimestampKey);
    const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    let asked = [];
    if (cachedAsked && cacheTimestamp) {
      const timestamp = parseInt(cacheTimestamp, 10);
      if (now - timestamp < oneWeekInMs) {
        // Cache is valid
        asked = JSON.parse(cachedAsked);
      } else {
        // Cache expired, clear it
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimestampKey);
      }
    }

    setAskedQuestions(asked);
    
    // Filter available questions
    const available = questions.filter((_, index) => !asked.includes(index));
    
    // If all questions have been asked, reset
    if (available.length === 0) {
      setAskedQuestions([]);
      setAvailableQuestions(questions);
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(cacheTimestampKey);
    } else {
      setAvailableQuestions(available);
    }
  };

  const getRandomQuestion = () => {
    const questions = t.talkDeck.questions;
    const available = questions.filter((_, index) => !askedQuestions.includes(index));
    
    // If all questions asked, reset
    if (available.length === 0) {
      const cacheKey = `talkdeck_asked_${language}`;
      const cacheTimestampKey = `talkdeck_timestamp_${language}`;
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(cacheTimestampKey);
      setAskedQuestions([]);
      return questions[Math.floor(Math.random() * questions.length)];
    }
    
    return available[Math.floor(Math.random() * available.length)];
  };

  const handleCardClick = () => {
    if (!isFlipped) {
      // First click - flip to show question
      const question = getRandomQuestion();
      const questionIndex = t.talkDeck.questions.indexOf(question);
      setCurrentQuestion(question);
      setIsFlipped(true);
      
      // Update asked questions cache
      const newAsked = [...askedQuestions, questionIndex];
      setAskedQuestions(newAsked);
      
      const cacheKey = `talkdeck_asked_${language}`;
      const cacheTimestampKey = `talkdeck_timestamp_${language}`;
      localStorage.setItem(cacheKey, JSON.stringify(newAsked));
      
      // Set timestamp if this is the first question
      if (!localStorage.getItem(cacheTimestampKey)) {
        localStorage.setItem(cacheTimestampKey, Date.now().toString());
      }
    } else {
      // Already showing a question - show new question on top
      const question = getRandomQuestion();
      const questionIndex = t.talkDeck.questions.indexOf(question);
      setCurrentQuestion(question);
      
      // Add animation effect by temporarily un-flipping and re-flipping
      setIsFlipped(false);
      setTimeout(() => {
        setIsFlipped(true);
      }, 50);
      
      // Update asked questions cache
      const newAsked = [...askedQuestions, questionIndex];
      setAskedQuestions(newAsked);
      
      const cacheKey = `talkdeck_asked_${language}`;
      localStorage.setItem(cacheKey, JSON.stringify(newAsked));
    }
  };

  const remainingQuestions = t.talkDeck.questions.length - askedQuestions.length;

  return (
    <div className="talkdeck">
      <button className="back-to-home" onClick={onBackToHome}>
        {t.talkDeck.backToHome}
      </button>
      
      <div className="talkdeck-container">
        <h1 className="talkdeck-title">{t.talkDeck.title}</h1>
        <p className="talkdeck-subtitle">{t.talkDeck.subtitle}</p>
        
        <div className="talkdeck-info">
          <p className="questions-remaining">
            {t.talkDeck.questionsRemaining}: {remainingQuestions}
          </p>
        </div>

        <div className="card-container" onClick={handleCardClick}>
          <div className={`card ${isFlipped ? 'flipped' : ''}`}>
            <div className="card-front">
              <div className="card-content">
                <div className="card-emoji">💬</div>
                <h2>{t.talkDeck.tapToFlip}</h2>
              </div>
            </div>
            <div className="card-back">
              <div className="card-content">
                <p className="question-text">{currentQuestion}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="talkdeck-instructions">
          <p>{t.talkDeck.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default TalkDeck;
