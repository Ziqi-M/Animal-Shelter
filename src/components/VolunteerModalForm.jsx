import React, { useState } from 'react';
import './VolunteerModalForm.css';

const VolunteerModalForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [availability, setAvailability] = useState('');
    const [experience, setExperience] = useState('');
    const [preferredRoles, setPreferredRoles] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phoneNumber');

        if (!emailInput.checkValidity() || !phoneInput.checkValidity()) {
            return;
        }

        if (!name || !email || !phoneNumber || !availability || !experience || preferredRoles.length === 0) {
            return;
        }

        setName('');
        setEmail('');
        setPhoneNumber('');
        setAvailability('');
        setExperience('');
        setPreferredRoles([]);

        // Set submitted to true
        setSubmitted(true);
    };

    return (
        <div className="volunteer__form">
            <div className="volunteer__form--main">
                <h2 className='volunteer__form--title'>Volunteer Sign-Up</h2>
                {submitted ? (
                    <p className="success__message">Form submitted successfully! Thank you for volunteering.</p>
                ) : (
                    <form className="volunteer__form--content" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            className='volunteer__form--input'
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            className='volunteer__form--input'
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            required
                        />

                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            className='volunteer__form--input'
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter your phone number"
                            pattern="[0-9]{10}"
                            required
                        />

                        <label htmlFor="availability">Availability:</label>
                        <select
                            className='volunteer__form--select'
                            id="availability"
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                            required
                        >
                            <option value="">Select Availability</option>
                            <option value="Weekdays">Weekdays</option>
                            <option value="Weekends">Weekends</option>
                            <option value="Flexible">Flexible Schedule</option>
                        </select>

                        <label htmlFor="preferredRoles">Preferred Volunteer Role(s):</label>
                        <select
                            className='volunteer__form--select'
                            id="preferredRoles"
                            value={preferredRoles}
                            onChange={(e) => setPreferredRoles(e.target.value)}
                            required
                        >
                            <option value="AnimalCare">Animal Care</option>
                            <option value="AdoptionEvents">Adoption Events</option>
                            <option value="AdministrativeSupport">Administrative Support</option>
                            <option value="CommunityOutreach">Community Outreach</option>
                        </select>

                        <label htmlFor="experience">Experience:</label>
                        <textarea
                            className='volunteer__form--textarea'
                            id="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            placeholder="Tell us about your volunteer experience"
                            required
                        />



                        <button className='volunteer__form--button' type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default VolunteerModalForm;