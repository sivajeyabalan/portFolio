import { useEffect , useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [images , setImages] = useState([])
  const [loading , setLoading] = useState(true)
  const [currentScore , setCurrentScore] = useState(0)
  const [bestScore , setBestScore] = useState(0)
  const [selectedCards , setSelectedCards] = useState([])
  const [showToast, setShowToast] = useState(false); 

  useEffect( () => {
    const fetchData = async () => {
      setLoading(true);
      console.log("Fetching data...");
      try{
      const uniqueId = new Set();
      
      while ( uniqueId.size < 8){
        const id = Math.floor(Math.random() * 541 + 1);
        uniqueId.add(id);
      }
      const images = Array.from(uniqueId).map(
        (id) => `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const fetchedData = await Promise.all(
        images.map((url) => fetch(url).then((res) => res.json()))
      );
      const pictures = fetchedData.map((data) => ({
        id: data.id,
        image: data.sprites.front_default,
      }));
      setImages(pictures);
      console.log(pictures)
      console.log("Data fetched successfully");
      setLoading(false);
    } catch (error){
      console.error("Error fetching img "+ error);
      setLoading(false);

    }
  }
  fetchData();
  } , []);

  const shuffeCards = (cards) => {
    return [...cards].sort(() => Math.random() - 0.5);
    
  }

  const handleCardClick = (id) => {
    if ( selectedCards.includes(id)){
      setCurrentScore(0);
      setSelectedCards([]);
      showToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    else {
      setSelectedCards([...selectedCards , id]);
      setCurrentScore(currentScore + 1);
    }

    if ( currentScore + 1 > bestScore){
      setBestScore(currentScore + 1);
    }
  setImages(shuffeCards(images));
  }
  return (
    <div className="App">
      <h1>Memory Card Game By SJB</h1>
      <div className="scores">
        <p className='scr'>Current Score: {currentScore}</p>
        <p className='scr'>Best Score: {bestScore}</p>
      </div>
      {/* Toast Notification */}
      {showToast && (
        <div className="toast">
          <p>You lost! Try again!</p>
        </div>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="memory-cards">
          {images.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleCardClick(card.id)}
            >
              <img src={card.image} alt="Pokémon" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App
