import UserCard from "./components/usercard";
import "./App.css"
function App() {
  const cards = Array.from({ length: 10 });

  return (
    <div className="card-grid">
      {cards.map((_, index) => (
        <UserCard key={index} />
      ))}
    </div>
  );
}

export default App;