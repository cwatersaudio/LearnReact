import Photo from './assets/photo.png';
import PersonalInfo from './components/PersonalInfo';
import Buttons from './components/Buttons';


function App() {
  return(
    <div className="container">
    {/* Need to change photo once better picture is available */}
    <img src={Photo} className="self-photo"/> 
    <div className="text--container">
    <PersonalInfo />
    <Buttons />
    </div>
    </div>
  )
}

export default App
