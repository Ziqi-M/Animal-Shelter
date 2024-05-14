import React from 'react';
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className='about__page'>
      <div className="about__hero">
        <div className="about__hero--content">
          <h1 className='about__hero--title'>About Us</h1>
          <p className='about__hero--text'>At San Jose Animal Shelter, our mission is to create a compassionate community where every animal is valued, cared for, and finds a loving forever home. Since our establishment, we have been dedicated to the welfare of animals, working tirelessly to provide shelter, medical care, and a second chance at happiness.</p>
        </div>
      </div>
      <div className='main__page'>
        <div className='about__panel'>
          <p className='about__content'>Founded in 2023, San Jose Animal Shelter has grown from a small initiative to a thriving haven for animals in need. Our journey has been marked by passion, dedication, and the unwavering belief that every life deserves respect and kindness.</p>
          <div className='about__part'>
            <h2 className='about__part--title'>Our Team</h2>
            <p className='about__part--content'>Meet the heart and soul of our shelter – our dedicated team of professionals and volunteers. Committed to the well-being of our furry friends, they bring diverse skills and a shared love for animals, ensuring that each resident at our shelter receives the care and attention they deserve.</p>
          </div>
          <div className='about__part'>
            <h2 className='about__part--title'>Our Values</h2>
            <ul className='about__part--content'>
              <li>Compassion: We believe in treating every animal with kindness and empathy.</li>
              <li>Rescue: We are committed to rescuing animals from challenging situations and providing them with a safe haven.</li>
              <li>Education: We strive to educate the community on responsible pet ownership and animal welfare.</li>
              <li>Community: Our shelter is more than a place; it's a community where people come together to make a difference in the lives of animals.</li>
            </ul>
          </div>
          <div className='about__part'>
            <h2 className='about__part--title'>Our Achievements</h2>
            <p className='about__part--content'>Over the years, we have celebrated countless success stories – from finding forever homes for abandoned pets to providing medical care for those in need. Each adoption is a testament to the positive impact our shelter has on both animals and their human companions.</p>
          </div>
          <div className='about__part'>
            <h2 className='about__part--title'>How You Can Help</h2>
            <p className='about__part--content'>Join us in our mission to make a difference in the lives of animals. Whether through adoption, volunteering, or donations, your support helps us continue our vital work and create a better future for pets in need.
              Thank you for being a part of our journey. Together, we can build a world where every animal is cherished and loved.
              For more information, contact us or visit our Adoption Process page.</p>
          </div>
          <div className='about__founder'>
            <p className='about__founder--title'>Founder, a catlover from Northeastern University</p>
            <p className='about__founder--name'>Ziqi Meng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;