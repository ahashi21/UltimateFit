import React, { useState } from 'react';

const RecipeFav = () => {
    // State to track whether the recipe is favorited or not
    const [isFavorited, setIsFavorited] = useState(false);

    // Function to toggle the favorite status
    const toggleFavorite = () => {
        setIsFavorited(prevState => !prevState);
    };

    return (
        <div className="recipe-fav">
            {/* Conditionally render different buttons based on whether recipe is favorited */}
            {isFavorited ? (
                <button onClick={toggleFavorite}>Remove from Favorites</button>
            ) : (
                <button onClick={toggleFavorite}>Add to Favorites</button>
            )}
        </div>
    );
};

export default RecipeFav;
