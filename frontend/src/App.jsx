import { useState } from "react";
import C1 from "./C1"
import C2 from "./C2"
import C3 from "./C3"


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
  };


  return (
    <>
      <div className="grid-container">
        <C1 onLanguageChange={handleLanguageChange} />
        <C2 language={selectedLanguage} />
        <C3 language={selectedLanguage} />
      </div>
    </>
  )
}

export default App
