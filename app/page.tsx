import Hero from "./component/hero";
import Projects from "./Project/page";
import About from "./About/page";
import Skills from "./Servi/page";
import Contact from "./contact/page";
export default function Home() {
  return (
  
<div className="bg-black">
<Hero />
<Projects/>
<About /> 
<Skills /><br />
<Contact /> 



</div>

  
  );
}
