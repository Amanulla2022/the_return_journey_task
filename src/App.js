import "./App.css";
import ItemsList from "./components/ItemsList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="text-4xl font-bold underline uppercase text-gray-700">
          Items
        </h1>
        <SearchBar />
      </div>
      <ItemsList />
    </>
  );
}

export default App;
