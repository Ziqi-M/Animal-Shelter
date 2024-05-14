import React, { useState } from 'react';
import './AnimalGallery.css';


const AnimalGallery = ({ animals }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortCriteria, setSortCriteria] = useState('age');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (criteria) => {
        if (criteria === sortCriteria) {
            setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortCriteria(criteria);
            setSortOrder('asc');
        }
    };

    const filteredAnimals = selectedCategory === 'all' ? animals : animals.filter((animal) => animal.category === selectedCategory);
    const sortedAnimals = filteredAnimals.sort((a, b) => {
        const aValue = a[sortCriteria];
        const bValue = b[sortCriteria];

        if (sortOrder === 'asc') {
            return aValue - bValue;
        } else {
            return bValue - aValue;
        }
    });


    return (
        <div className="animal__gallery">
            <div className="category__buttons">
                    <button className='category__buttons--all' onClick={() => handleCategoryClick('all')}>
                        All
                    </button>
                    <button className='category__buttons--dogs' onClick={() => handleCategoryClick('Dog')}>
                        Dogs
                    </button>
                    <button className='category__buttons--cats' onClick={() => handleCategoryClick('Cat')}>
                        Cats
                    </button>
                    <button className='category__buttons--small' onClick={() => handleCategoryClick('Small Animal')}>
                        Small
                    </button>
            </div>

            <div className="sorting__part">
                <button className='sorting__part--button' onClick={() => handleSortChange('age')}>Sort by Age</button>
            </div>

            <div className="header__row">
                <p>Image</p>
                <p></p>
                <p>Name</p>
                <p>Category</p>
                <p>Age</p>
                <p>Gender</p>
                <p>Size</p>
                <p>Time at Shelter</p>
            </div>

            <div className="animal__cards">
                {filteredAnimals.map((animal) => (
                    <div key={animal.id} className="animal__card">
                        <img src={animal.image} alt={animal.name} className='animal__card--item animal__image' />
                        <p className='animal__card--item'>{animal.name}</p>
                        <p className='animal__card--item'>{animal.category}</p>
                        <p className='animal__card--item'>{animal.age}</p>
                        <p className='animal__card--item'>{animal.gender}</p>
                        <p className='animal__card--item'>{animal.size}</p>
                        <p className='animal__card--item'>{animal.timeAtShelter}</p>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default AnimalGallery;
