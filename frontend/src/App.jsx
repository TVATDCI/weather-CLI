import WeatherComponent from "./components/WeatherComponent";
import ButtonGradient from "./assets/ButtonGradient";

function App() {
  return (
    <div className="app bg-gradient-to-r from-blue-800 via-purple-700 to-pink-800">
      <header className="p-4 bg-gradient-to-b from-[#4436BD] via-[#392679] to-[#050913] text-yellow-100 ">
        <h1 className="text-3xl font-bold">Weather App</h1>
      </header>
      <main className="p-4">
        <ButtonGradient />
        <WeatherComponent />
      </main>
    </div>
  );
}

export default App;
