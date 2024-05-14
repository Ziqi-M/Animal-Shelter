import React, { useState } from 'react';
import './ModalForm.css';

const ModalForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adoptionWill, setAdoptionWill] = useState('not-now');
  const [animalPreference, setAnimalPreference] = useState('');
  const [volunteerWill, setVolunteerWill] = useState('not-now');
  const [infoPreferences, setInfoPreferences] = useState({
    latestEvents: false,
    newArrivalAnimals: false,
    petFamilyStories: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Form submitted with data:', {
      name,
      email,
      adoptionWill,
      animalPreference,
      volunteerWill,
      infoPreferences,
    });

    // Set the submitted state to true to show the success notice
    setSubmitted(true);
  };

  return (
    <div className="modal__form">
      <div className='form__title'>
        <h2 className='form__title--h2'>Paws & Whiskers Chronicles</h2>
        <p>🐾 Stay in the loop with our heartwarming stories, exciting events, and furry friend updates! Subscribe to "Paws & Whiskers Chronicles" for a front-row seat to the joyous tales unfolding at San Jose Animal Shelter. Be the first to know about new arrivals, adoption success stories, and upcoming activities. Join our community of animal lovers and embark on a journey filled with compassion, laughter, and the boundless love of our four-legged friends. Don't miss out — subscribe now and be part of our heartwarming adventure! 📬</p>
      </div>
      <div className={`form__content ${submitted ? 'submitted' : ''}`}>
        {submitted ? (
          <div className="success__notice">Form submitted successfully!</div>
        ) : (
          <form className="form__item" onSubmit={handleSubmit}>
            <label classname='form__item--label'>
              Name:
              <input classname='form__item--input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label classname='form__item--label'>
              Email:
              <input classname='form__item--input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label classname='form__item--label'>
              Adoption Interest:
              <select
                classname='form__item--select'
                value={adoptionWill}
                onChange={(e) => {
                  setAdoptionWill(e.target.value);
                  // Reset animalPreference if adoptionWill is set to 'not-now'
                  if (e.target.value === 'not-now') {
                    setAnimalPreference('');
                  }
                }}
              >
                <option value="not-now">Not Now</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            {adoptionWill === 'yes' && (
              <label classname='form__item--label'>
                Animal Preference:
                <select
                  classname='form__item--select'
                  value={animalPreference}
                  onChange={(e) => setAnimalPreference(e.target.value)}
                >
                  <option value="">Select Animal</option>
                  <option value="dogs">Dogs</option>
                  <option value="cats">Cats</option>
                  <option value="small-animals">Small Animals</option>
                </select>
              </label>
            )}
            <label classname='form__item--label'>
              Volunteer Interest:
              <select classname='form__item--select' value={volunteerWill} onChange={(e) => setVolunteerWill(e.target.value)}>
                <option value="not-now">Not Now</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            
            <button className='form__button' type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModalForm;