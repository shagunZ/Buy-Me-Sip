import React,{useState} from 'react'
import TypeIt from "typeit-react";
import './home.css'



const HomePage = () => {

  const [buttonText, setButtonText] = useState("Buy Me Sip");
  const [instance, setInstance] = useState(null);

  const toggleFreeze = () => {
    if (instance.is("frozen")) {
      instance.unfreeze();
      setButtonText("Buy ME Sip");
      return;
    }

    instance.freeze();
    setButtonText("Unfreeze");
  };

  return (
    <div style={{ 
      backgroundImage: `url("https://media.istockphoto.com/id/1400648198/photo/interior-of-empty-modern-cafe-or-restaurant-during-the-day-round-tables-and-yellow-chairs-in.webp?b=1&s=170667a&w=0&k=20&c=PEOXIGWfnNHsVnPF3vojqMzTlSDRpE1uhOdPj7e3Z4g=")` }}>
   

{/* <div class="cup">
	<div class="home"></div> */}



  <div> 
 <button onClick={toggleFreeze}>{buttonText}</button>

<TypeIt
  options={{ loop: true }}
  getAfterInit={(instance) => {
    setInstance(instance);
    return instance;
  }}
>
Great Ideas Comes after a Great Sip.
</TypeIt>
</div>   
    {/* </div> */}
    </div>
  )
}

export default HomePage