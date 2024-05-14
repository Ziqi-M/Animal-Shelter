import React, { useState } from 'react';
import './Home.css';
import ModalForm from '../components/ModalForm';

import cardImage1 from '../images/adoption-process.png';
import cardImage2 from '../images/adopt-pets.png';
import cardImage3 from '../images/volunteer.png';
import cardImage4 from '../images/charlie.png';
import cardImage5 from '../images/whisker.png';
import cardImage6 from '../images/buddy.png';


export const Home = ({ setPage }) => {
  const handleAdoptClick = () => {
    setPage('adopt-pets');
  };

  const handleVolunteerClick = () => {
    setPage('volunteer');
  };

  const handleProcessClick = () => {
    setPage('adoption-process');
  };


  return (
    <div className="home">
      <div className="hero__image">
        <div className="hero__text">
          <h1>Love makes lives better.</h1>
          <div className="hero__button">
            <a href='#' className="hero__button--adopt" onClick={handleAdoptClick}>

              Adopt Now</a>
            <a href='#' className="hero__button--volunteer" onClick={handleVolunteerClick}>
              Volunteer</a>
          </div>
        </div>
      </div>


      <div className='main__content'>
        <div className="screen1">
          <h2 className="screen__title">San Jose Animal Shelter: Where Love Finds a Home</h2>
          <p className="screen__subtitle">
            🐾 Embrace compassion with us! At San Jose Animal Shelter, we're dedicated to uniting animals with their
            forever families. Adopt a pet and be part of our journey to create happier tails. Together, we make a
            difference. 🏡 #AdoptLove 🐾
          </p>
          <div className="screen1__cards">
            <div className="screen1__card">
              <img className="screen1__cards--image" alt="adoption-process-card-image" src={cardImage1} />
              <p className="screen1__cards--text">
                Adoption Made Easy Interested in adopting? Learn about our simple adoption process and requirements. We
                believe in finding loving homes for all our animals, and we're here to guide you every step of the
                way.
              </p>
              <a href='#' className="screen1__cards--button" onClick={handleProcessClick}>Adoption Process</a>
            </div>
            <div className="screen1__card">
              <img className="screen1__cards--image" alt="adoptable-pets-card-image" src={cardImage2} />
              <p className="screen1__cards--text">
                Meet Your New Best Friend! Browse through our gallery of adorable animals ready for adoption. Each furry
                friend comes with a unique story, personality, and a whole lot of love to give. Find your perfect match
                today!
              </p>
              <a href='#' className="screen1__cards--button" onClick={handleAdoptClick}>Adoptable Pets</a>
            </div>
            <div className="screen1__card">
              <img className="screen1__cards--image" alt="volunteer-card-image" src={cardImage3} />
              <p className="screen1__cards--text">
              Join Our Dedicated Team of Volunteers! Discover volunteer opportunities at San Jose Animal Shelter. Make a positive impact on the lives of animals by becoming a valued member of our community.              </p>
              <a href='#' className="screen1__cards--button" onClick={handleVolunteerClick}>Volunteer</a>
            </div>
          </div>
        </div>

        <div className="screen2">
          <h2 className="screen__title">Home Is Where the Pawprints Are: Heartwarming Adoption Stories</h2>
          <p className="screen__subtitle">
            🐾 Explore heart-touching adoption stories that prove love has no bounds.Each story is a testament to the joy
            of finding forever homes. Join our community, adopt a friend, and be part of the journey where love and
            companionship thrive.🏡 #AdoptLove 🐾
          </p>
          <div className="screen2__cards">
            <div className="screen2__card">

              <img className="screen2__cards--image" alt="charlie-card-image" src={cardImage4} />
              <div className='screen2__cards--content'><h3 className="screen2__cards--title">Charlie's Second Chance</h3>
                <p className="screen2__cards--text">
                  Meet Charlie, a resilient pup who overcame adversity with a wagging tail. Adopted from our shelter,
                  Charlie now enjoys a life filled with love, long walks, and the occasional belly rub. His story reminds
                  us that every pet deserves a second chance.
                </p></div>

            </div>
            <div className="screen2__card">
              <img className="screen2__cards--image" alt="whisker-card-image" src={cardImage5} />
              <div className='screen2__cards--content'><h3 className="screen2__cards--title">Whiskers' Tale of Transformation</h3>
                <p className="screen2__cards--text">
                  Whiskers, a shy kitty, found her voice in the loving home of the Johnson family. Through patience and
                  care, she blossomed into a playful, confident companion. Whiskers' journey exemplifies the
                  transformative power of adoption.
                </p></div>
            </div>
            <div className="screen2__card">
              <img className="screen2__cards--image" alt="buddy-card-image" src={cardImage6} />
              <div className='screen2__cards--content'><h3 className="screen2__cards--title">Buddy: From Stray to Family</h3>
                <p className="screen2__cards--text">
                  Buddy, once a lonely stray, discovered warmth and belonging when the Rodriguez family opened their hearts.
                  Now a cherished member of the family, Buddy's story illustrates the profound impact of adoption on
                  both pets and their human companions.
                </p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="quote">
        <p className="quote__text">
          “If having a soul means being able to feel love and loyalty and gratitude, then animals are better off
          than a lot of humans.”
        </p>
        <p className="quote__resource">
          ― James Herriot, <i>All Creatures Great and Small</i>
        </p>
      </div>

      <ModalForm />
    </div>


  );
};

export default Home;