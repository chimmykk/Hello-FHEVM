import React, { useState } from 'react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

interface TutorialQuizProps {
  questions: QuizQuestion[];
  title?: string;
  description?: string;
}

export const TutorialQuiz: React.FC<TutorialQuizProps> = ({ 
  questions, 
  title = "🧠 Test Your Knowledge", 
  description = "Answer these questions to reinforce your learning!" 
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const correctAnswers = questions.filter((q, index) => 
        selectedAnswers[index] === q.correctAnswer
      ).length;
      setScore(correctAnswers);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
    setScore(0);
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🎉 Perfect! You're an FHEVM expert!";
    if (percentage >= 80) return "🌟 Excellent! You've got a great understanding!";
    if (percentage >= 60) return "👍 Good job! You're on the right track!";
    if (percentage >= 40) return "📚 Not bad! Review the explanations and try again!";
    return "💪 Keep learning! FHEVM is challenging but rewarding!";
  };

  if (showResults) {
    return (
      <div className="tutorial-quiz-container relative w-full overflow-hidden my-8">
        <div className="border-black dark:border-white border border-solid border-opacity-10 dark:border-opacity-10 rounded-lg p-6 relative z-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-medium text-black dark:text-white mb-2">Quiz Complete! 🎯</h3>
            <div className="text-4xl font-medium text-black dark:text-white mb-2">
              {score}/{questions.length}
            </div>
            <p className="text-lg text-[#919193]">
              {getScoreMessage(score, questions.length)}
            </p>
          </div>

        <div className="space-y-4 mb-6">
          {questions.map((question, index) => {
            const isCorrect = selectedAnswers[index] === question.correctAnswer;
            const userAnswer = selectedAnswers[index];
            
            return (
              <div 
                key={question.id}
                className={`p-4 rounded-lg border border-black dark:border-white border-opacity-10 dark:border-opacity-10 ${
                  isCorrect 
                    ? 'bg-green-50 dark:bg-green-900/20' 
                    : 'bg-red-50 dark:bg-red-900/20'
                }`}
              >
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-[#919193]">
                    Question {index + 1}
                  </span>
                  <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                    isCorrect 
                      ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
                      : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                  }`}>
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                </div>
                
                <p className="font-medium text-black dark:text-white mb-2">
                  {question.question}
                </p>
                
                <div className="space-y-1">
                  {question.options.map((option, optionIndex) => {
                    let optionClass = "p-2 rounded text-sm ";
                    if (optionIndex === question.correctAnswer) {
                      optionClass += "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 font-medium";
                    } else if (optionIndex === userAnswer && !isCorrect) {
                      optionClass += "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100";
                    } else {
                      optionClass += "bg-gray-100 text-[#919193] dark:bg-[#313136] dark:text-[#919193]";
                    }
                    
                    return (
                      <div key={optionIndex} className={optionClass}>
                        {optionIndex === question.correctAnswer && "✓ "}
                        {optionIndex === userAnswer && !isCorrect && "✗ "}
                        {option}
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-3 p-3 bg-gray-50 dark:bg-[#313136] rounded border-l-4 border-black dark:border-white">
                  <p className="text-sm text-black dark:text-white">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleRestart}
            className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity font-medium"
          >
            🔄 Try Again
          </button>
        </div>
        </div>
        <div className="absolute left-0 right-0 top-0 bottom-0 dark:bg-[#313136] opacity-20 z-0" />
        <div className="absolute left-0 right-0 top-0 bottom-0 backdrop-filter backdrop-blur-[2px] z-0" />
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const hasAnswer = selectedAnswers[currentQuestion] !== -1;

  return (
    <div className="tutorial-quiz-container relative w-full overflow-hidden my-8">
      <div className="border-black dark:border-white border border-solid border-opacity-10 dark:border-opacity-10 rounded-lg p-6 relative z-10">
        <div className="mb-6">
          <h3 className="text-2xl font-medium text-black dark:text-white mb-2">{title}</h3>
          <p className="text-[#919193]">{description}</p>
        </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-[#919193]">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-black dark:text-white font-medium">
            {currentQ.topic}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-[#313136] rounded-full h-2">
          <div 
            className="bg-black dark:bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-black dark:text-white mb-4">
          {currentQ.question}
        </h4>
        
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border border-black dark:border-white border-opacity-10 dark:border-opacity-10 transition-all duration-200 ${
                selectedAnswers[currentQuestion] === index
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'hover:bg-gray-50 dark:hover:bg-[#313136] text-black dark:text-white'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-black dark:border-white bg-black dark:bg-white'
                    : 'border-[#919193]'
                }`}>
                  {selectedAnswers[currentQuestion] === index && (
                    <div className="w-2 h-2 bg-white dark:bg-black rounded-full mx-auto mt-0.5" />
                  )}
                </div>
                <span className={selectedAnswers[currentQuestion] === index ? 'text-white dark:text-black' : 'text-black dark:text-white'}>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-4 py-2 text-[#919193] border border-black dark:border-white border-opacity-10 dark:border-opacity-10 rounded-lg hover:bg-gray-50 dark:hover:bg-[#313136] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          ← Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={!hasAnswer}
          className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity font-medium"
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next →'}
        </button>
      </div>
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 dark:bg-[#313136] opacity-20 z-0" />
      <div className="absolute left-0 right-0 top-0 bottom-0 backdrop-filter backdrop-blur-[2px] z-0" />
    </div>
  );
};

export default TutorialQuiz;
