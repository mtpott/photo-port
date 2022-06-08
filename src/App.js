import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: "commercial", description: "photos of grocery stores, food trucks, and other commercial projects" },
    { name: "portraits", description: "portraits of people in my life" },
    { name: "food", description: "delicious delicacies" },
    { name: "landscape", description: "fields, farmhouses, waterfalls, and the beauty of nature" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //set initial value of cS to false, to prevent the contact form from showing what a use initially navigates to the homepage
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
