 
import './App.css';
import background from './images/mac.jpg';
import GlassCard from './glasscard';

function App() {
  return (
    <div className="App"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
    <GlassCard />
    </div>
  );
}

export default App;
