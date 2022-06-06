import React from 'react';

function Nav() {

    const categories = [
        {
            name: "commercial",
            description: "photos of grocery stores, food trucks, and other commercial projects.",
        },
        { name: "portraits", description: "portraits of people in my life" },
        { name: "food", description: "delicious delicacies" },
        {
            name: "landscape",
            description: "fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`);
    }

    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="about" href='#about'>
                            about me
                        </a>
                    </li>
                    <li>
                        <span>contact</span>
                    </li>
                    {categories.map((category) => (
                    <li 
                        className="mx-1"
                        key={category.name}
                        >
                        <span onClick={() => categorySelected(category.name)}>
                            {category.name}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;