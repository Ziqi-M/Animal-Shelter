import React from 'react';
import './AdoptionProcess.css'
import FaqAccordion from '../components/FaqAccordion';
import ModalForm from '../components/ModalForm';
import heroimage from '../images/process-hero.png';
import ctaimage from '../images/process-cta.png';

const faqData = [
  {
    question: 'Can I apply for adoption online?',
    answer: 'A: Yes, you can complete the adoption application form online or fill it out at the shelter. The form captures essential information about your living situation and experience with pets.',
  },
  {
    question: 'How long does the adoption application review take?',
    answer: 'A: The application review process typically takes 1-2 business days. Our adoption team carefully considers each application to ensure a successful match.',
  },
  {
    question: 'Are home visits required for every adoption?',
    answer: 'A: While not mandatory for every adoption, in some cases, a home visit may be conducted to ensure a safe and suitable environment for the pet.',
  },
  {
    question: 'What is the adoption fee, and what does it cover?',
    answer: 'A: Adoption fees vary based on the age and species of the pet. Fees cover vaccinations, spaying/neutering, and a basic health check.',
  },
  {
    question: 'How do I pay the adoption fee?',
    answer: 'A: Once your application is approved, you will be notified to visit the shelter and pay the adoption fee. We accept various payment methods for your convenience.',
  },
  {
    question: 'What happens after I pay the adoption fee?',
    answer: 'A: After fee payment, you will sign the adoption agreement and receive your new pets medical records. Our team will provide tips for a successful transition.',
  },
  {
    question: 'Is there post-adoption support available?',
    answer: 'A: Yes, we offer post-adoption support. You can reach our Adoption Support Hotline at (555) 123-4567 for any questions or concerns after bringing your pet home.',
  },
  {
    question: 'Are there age restrictions for adopting pets?',
    answer: 'While there are no strict age restrictions, we consider the specific needs of each pet and strive to match them with suitable adopters.',
  },
];

const AdoptionProcess = ({ setPage }) => {
  const handleAdoptClick = () => {
    setPage('adopt-pets');
  };

  return (
    <div className='process__page'>
      <h1 className='page__title'>Adoption Process in San Jose Animal Shelter</h1>
      <p className='page__subtitle'>Welcome to the San Jose Animal Shelter Adoption Process!<br />
        Adopting a pet is a rewarding experience, and we're here to guide you through the journey. Our adoption process is designed to ensure that both you and your new furry friend have a smooth transition into a loving home.</p>
      <img className='page__image' src={heroimage} alt='adoption-process-hero-image' />
      <div className='process__panel'>
        <div className='process__step'>
          <h2 className='process__step--title'>Step 1: Explore Available Pets</h2>
          <p className='process__step--content'>Begin by browsing our gallery of adoptable pets on the Adopt Pets page. Each profile provides detailed information about the pet's age, temperament, and special qualities.</p>
        </div>
        <div className='process__step'>
          <h2 className='process__step--title'>Step 2: Visit the Shelter</h2>
          <p className='process__step--content'>We encourage you to visit our shelter during our adoption hours, Monday to Saturday from 10:00 AM to 4:00 PM. This is an opportunity to interact with the pets, ask questions, and find the perfect match for your lifestyle.</p>
        </div>
        <div className='process__step'>
          <h2 className='process__step--title'>Step 3: Meet & Greet</h2>
          <p className='process__step--content'>Once you've identified a potential furry companion, our staff will facilitate a meet-and-greet session. This allows you to spend quality time with the pet to ensure a strong connection.</p>
        </div>
        <div className='process__step'>
          <h2 className='process__step--title'>Step 4: Application Submission</h2>
          <p className='process__step--content'>Complete the adoption application form either online or at the shelter. The form captures essential information about your living situation, experience with pets, and your plans for your new companion.</p>
        </div>
        <div className='process__step'>
          <h2 className='process__step--title'>Step 5: Application Review</h2>
          <p className='process__step--content'>Our adoption team will review your application to ensure it aligns with the best interests of both you and the pet. This process typically takes 1-2 business days.</p>
        </div>
        <div className='process__step'>
          <h2 className='process__step--title'>Step 6: Home Visit (if necessary)</h2>
          <p className='process__step--content'>In some cases, a home visit may be required to ensure that your living space is safe and suitable for your new pet.</p>
        </div>
        <div className='process__step'>
          <h2 className='process__step--title'>Step 7: Approval & Fee Payment</h2>
          <p className='process__step--content'>Once your application is approved, you'll be notified, and the adoption fee can be paid. Fees vary based on the age and species of the pet and cover vaccinations, spaying/neutering, and a basic health check.</p>
        </div>
        <div className='process__step'>
          <h2 className='process__step--title'>Step 8: Finalizing Adoption</h2>
          <p className='process__step--content'>Visit the shelter to sign the adoption agreement and collect your new pet's medical records. Our team will provide valuable tips for a successful transition and answer any remaining questions you may have.</p>
        </div>
        <div className='process__step'>
          <h2 className='process__step--title'>Step 9: Post-Adoption Support</h2>
          <p className='process__step--content'>Our commitment to you doesn't end with the adoption. We offer post-adoption support, and our Adoption Support Hotline (555) 123-4567 is available to address any concerns or questions you may have.</p>
        </div>
      </div>
      <div className='cta'>
        <img className='cta__image' src={ctaimage} alt='a-man-hug-a-dog' />
        <div className='cta__content'>
          <p className='cta__content--text'>Congratulations on taking the first step toward creating lasting memories with your new companion! If you have any additional questions, feel free to contact us or see the FAQs below for more information.</p>
          <button className='cta__content--button' onClick={handleAdoptClick}>See Adoptable Pets</button>
        </div>
      </div>
      <FaqAccordion faqData={faqData} />
      <ModalForm />
    </div>
  );
};

export default AdoptionProcess;