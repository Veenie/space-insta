
import '../styles/App.scss';
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Cards from "./Cards";


function App() {

  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(

      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;


  return (
    <div className="App">
      <Navigation />
      <main>
        <div className="sub">
          <Cards data={photoData}/>
        </div>
      </main>
 
    </div>
  );
}

export default App;
