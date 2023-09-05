import React from 'react';

function Navbar( text, onPress ) {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <h1 className="text-white text-2xl font-semibold">Mon Projet</h1>
                {/* Ajoutez ici vos liens de navigation */}
            </div>
        </nav>
    );
}

export default Navbar;
