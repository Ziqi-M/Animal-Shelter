import React, { useState } from 'react';
import './Volunteer.css';
import heroimage from '../images/volunteer-hero.png';
import VolunteerModalForm from '../components/VolunteerModalForm';

const Volunteer = () => {

  return (
    <div className='volunteer__page'>
      <h1 className='page__title'>Join Our Dedicated Team of Volunteers</h1>
      <p className='page__subtitle'>At San Jose Animal Shelter, volunteers are the backbone of our mission. We welcome individuals who share our passion for animals and are committed to making a positive impact on their lives.</p>
      <img className='page__image' src={heroimage} alt='adoption-process-hero-image' />
      <div className='volunteer__panel'>
        <div className='volunteer__step'>
          <h2 className='volunteer__step--title'>Why Volunteer?</h2>
          <p className='volunteer__step--content'>Volunteering at our shelter is a rewarding experience that allows you to:</p>
          <ul className='volunteer__step--list'>
            <li>Make a Difference: Contribute to the well-being of animals in need.</li>
            <li>Gain Experience: Learn new skills and gain valuable experience in animal care.</li>
            <li>Community: Join a community of like-minded individuals who share your love for animals.</li>
            <li>Positive Impact: Be part of success stories and witness the positive impact your efforts have on the lives of animals.</li>
          </ul>
        </div>
        <div className='volunteer__step'>
          <h2 className='volunteer__step--title'>Volunteer Opportunities</h2>
          <p className='volunteer__step--content'>Explore various volunteer opportunities, including:</p>
          <ol className='volunteer__step--list'>
            <li>Animal Care: Assist with feeding, grooming, and socializing with our residents.</li>
            <li>Adoption Events: Help organize and participate in adoption events to find loving homes for our pets.</li>
            <li>Administrative Support: Provide assistance with administrative tasks and office operations.</li>
            <li>Community Outreach: Represent the shelter at community events and promote responsible pet ownership.</li>
          </ol>
        </div>
        <div className='volunteer__step'>
          <h2 className='volunteer__step--title'>How to Volunteer</h2>
          <ol className='volunteer__step--list'>
            <li>Complete the Volunteer Application Form: Click the "Volunteer Now" button to access our volunteer application form.</li>
            <li>Submit Your Application: Once you've completed the form, submit your application for review.</li>
            <li>Orientation and Training: Attend an orientation session to learn more about our shelter and receive training based on your chosen volunteer role.</li>
            <li>Get Involved: Start volunteering and make a positive impact on the lives of animals in our community.</li>
          </ol>
        </div>
      </div>
      <VolunteerModalForm />

    </div>
  );
};

export default Volunteer;