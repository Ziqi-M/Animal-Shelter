import React from 'react';
import './AdoptPets.css';
import FaqAccordion from '../components/FaqAccordion';
import AnimalGallery from '../components/AnimalGallery';
import ModalForm from '../components/ModalForm';
import dogimage1 from '../images/dogimage1.png';
import dogimage2 from '../images/dogimage2.png';
import dogimage3 from '../images/dogimage3.png';
import dogimage4 from '../images/dogimage4.png';
import dogimage5 from '../images/dogimage5.png';
import dogimage6 from '../images/dogimage6.png';
import dogimage7 from '../images/dogimage7.png';
import dogimage8 from '../images/dogimage8.png';
import dogimage9 from '../images/dogimage9.png';
import catimage1 from '../images/catimage1.png';
import catimage2 from '../images/catimage2.png';
import catimage3 from '../images/catimage3.png';
import catimage4 from '../images/catimage4.png';
import catimage5 from '../images/catimage5.png';
import catimage6 from '../images/catimage6.png';
import catimage7 from '../images/catimage7.png';
import catimage8 from '../images/catimage8.png';
import catimage9 from '../images/catimage9.png';
import smallimage1 from '../images/smallimage1.png';
import smallimage2 from '../images/smallimage2.png';

const AdoptPets = ({ setPage }) => {
  const allAnimals = [
    { id: 1, image: dogimage1, name: 'Buddy', category: 'Dog', age: 2, size: 'Medium', gender: 'Male', timeAtShelter: '1 month' },
    { id: 2, image: catimage1, name: 'Whiskers', category: 'Cat', age: 3, size: 'Small', gender: 'Female', timeAtShelter: '2 weeks' },
    { id: 3, image: catimage2, name: 'Fluffy', category: 'Cat', age: 2, size: 'Small', gender: 'Male', timeAtShelter: '2 weeks' },
    { id: 4, image: dogimage2, name: 'Oreo', category: 'Dog', age: 1, size: 'Small', gender: 'Female', timeAtShelter: '3 weeks' },
    { id: 5, image: catimage3, name: 'Mittens', category: 'Cat', age: 3, size: 'Medium', gender: 'Female', timeAtShelter: '1 month' },
    { id: 6, image: dogimage3, name: 'Spike', category: 'Dog', age: 2, size: 'Large', gender: 'Male', timeAtShelter: '4 days' },
    { id: 7, image: dogimage4, name: 'Rocky', category: 'Dog', age: 2, size: 'Medium', gender: 'Male', timeAtShelter: '3 weeks' },
    { id: 8, image: catimage4, name: 'Luna', category: 'Cat', age: 1, size: 'Small', gender: 'Female', timeAtShelter: '1 month' },
    { id: 9, image: dogimage5, name: 'Bentley', category: 'Dog', age: 4, size: 'Large', gender: 'Male', timeAtShelter: '2 days' },
    { id: 10, image: smallimage1, name: 'Nib', category: 'Small Animal', age: 3, size: 'Tiny', gender: 'Male', timeAtShelter: '1 week' },
    { id: 11, image: catimage5, name: 'Sophie', category: 'Cat', age: 3, size: 'Medium', gender: 'Female', timeAtShelter: '4 weeks' },
    { id: 12, image: smallimage2, name: 'Coco', category: 'Small Animal', age: 4, size: 'Large', gender: 'Female', timeAtShelter: '2 months' },
    { id: 13, image: catimage6, name: 'Bella', category: 'Cat', age: 2, size: 'Medium', gender: 'Female', timeAtShelter: '2 weeks' },
    { id: 14, image: dogimage6, name: 'Rocky', category: 'Dog', age: 3, size: 'Large', gender: 'Male', timeAtShelter: '3 weeks' },
    { id: 15, image: catimage7, name: 'Luna', category: 'Cat', age: 1, size: 'Small', gender: 'Female', timeAtShelter: '2 days' },
    { id: 16, image: dogimage7, name: 'Milo', category: 'Dog', age: 2, size: 'Medium', gender: 'Male', timeAtShelter: '1 week' },
    { id: 17, image: catimage8, name: 'Charlie', category: 'Cat', age: 3, size: 'Large', gender: 'Male', timeAtShelter: '4 weeks' },
    { id: 18, image: dogimage8, name: 'Zoe', category: 'Dog', age: 2, size: 'Small', gender: 'Female', timeAtShelter: '5 days' },
    { id: 19, image: dogimage9, name: 'Lily', category: 'Dog', age: 2, size: 'Medium', gender: 'Female', timeAtShelter: '2 weeks' },
    { id: 20, image: catimage9, name: 'Simba', category: 'Cat', age: 3, size: 'Large', gender: 'Male', timeAtShelter: '3 weeks' },

  ];
  const faqData = [
    {
      question: 'What is the adoption process like?',
      answer: 'A: The adoption process is simple and straightforward. Check out our Adoption Process page for detailed steps, from browsing to bringing your new companion home.',
    },
    {
      question: 'Why should I adopt from San Jose Animal Shelter?',
      answer: 'A: By adopting from us, you not only give a pet a loving home but also support our mission of promoting responsible pet ownership. Learn more about our values on the About Us page.',
    },
    {
      question: 'How long does the adoption process take?',
      answer: 'A: The adoption process typically takes around 3-5 business days from submitting your application to bringing your new pet home.',
    },
    {
      question: 'Can I visit the shelter to meet the pets in person?',
      answer: 'A: Yes, you are encouraged to visit during our adoption hours. We are open to the public from 10:00 AM to 4:00 PM, Monday to Saturday.',
    },
    {
      question: 'What is the adoption fee?',
      answer: 'A: Our adoption fees vary based on the age and species of the pet. Fees typically range from $50 to $200. This fee covers vaccinations, spaying/neutering, and a basic health check.',
    },
    {
      question: 'How often are new pets added to the website?',
      answer: 'A: We update our website regularly with new arrivals. Check back frequently to see the latest pets looking for loving homes.',
    },
    {
      question: 'Can I place a hold on a pet I am interested in?',
      answer: 'A: Yes, you can place a hold on a pet for up to 48 hours after visiting. This gives you time to make a thoughtful decision.',
    },
    {
      question: 'Are all pets spayed/neutered before adoption?',
      answer: 'A: Yes, all pets are spayed/neutered before adoption, ensuring they are ready for a happy and healthy life with their new family.',
    },
    {
      question: 'What if I have concerns or issues after adoption?',
      answer: 'We offer post-adoption support. If you have any concerns or issues, please contact our Adoption Support Hotline at (555) 123-4567.',
    },
    {
      question: 'Can I bring my current pets to meet a potential new family member?',
      answer: 'A: Absolutely! We encourage you to bring your current pets for a meet-and-greet to ensure compatibility with the new addition to your family.',
    },

  ];

  return (
    <div className='adoption__page'>
      <h1 className='page__title'>Welcome to Our Adoption Center</h1>
      <p className='page__subtitle'>At San Jose Animal Shelter, we believe that every pet deserves a loving home. Explore our gallery of adorable animals ready to become part of your family. Whether you're looking for a playful pup, a cuddly cat, or a charming small companion, you might find your perfect match right here.</p>
      <div className='notice__bar'>
        <h2 className='notice__title'>Important Notice</h2>
        <p className='notice__text'>
          Before proceeding, we kindly ask you to review our <a href='#' onClick={() => setPage('adoption-process')}>Adoption Process</a> to understand the steps involved. Additionally, please consider the following requirements:
          <ol>
            <li><b>Application Approval:</b> <br />Your adoption application must be approved by our team before finalizing the adoption.</li>
            <li><b>Home Visit (if necessary): </b><br />In some cases, a home visit may be required to ensure a safe and suitable environment for the pet.</li>
            <li><b>Adoption Fee: </b><br />Adoption fees vary based on the age and species of the pet. Fees cover vaccinations, spaying/neutering, and a basic health check.</li>
            <li><b>Post-Adoption Support: </b><br />We offer post-adoption support through our Adoption Support Hotline (555) 123-4567.</li>
          </ol>
        </p>
      </div>
      <AnimalGallery animals={allAnimals} />
      <FaqAccordion faqData={faqData} />
      <ModalForm />
    </div>
  );
};

export default AdoptPets;