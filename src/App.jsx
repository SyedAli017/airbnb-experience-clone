import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <main className="conent">
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </main>
  );
}

export default App;
