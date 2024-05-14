import React, { useState } from 'react';
import './FaqAccordion.css';

const FaqAccordion = ({ faqData }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq__accordion">
      <h2 className='faq__title'>Frequently Asked Questions (FAQs)</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq__item">
          <div
            className={`faq__item--question ${index === expandedIndex ? 'expanded' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            {item.question}
          </div>
          {index === expandedIndex && (
            <div className="faq__item--answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
