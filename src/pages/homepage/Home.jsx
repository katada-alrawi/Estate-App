import SearchBar from "../../components/Searchbar/SearchBar";
import "./home.scss";

function home() {
  return (
    <div className="home">
      <div className="textContainer">
        <div className="wrapper">
          <h1>
            Discover Your Dream Home: Find Your Perfect Place with Alrawi Real
            Estate
          </h1>
          <p>
            Discover your dream home with Alrawi Real Estate. Our expert team is
            dedicated to helping you find the perfect place, tailored to your
            unique needs and lifestyle, ensuring a seamless and satisfying
            home-buying experience.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h3>Years Of Experience</h3>
            </div>
            <div className="box">
              <h1>200</h1>
              <h3>Award Gained</h3>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h3>Property Ready</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default home;
