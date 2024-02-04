
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResults/SearchResult";
import styled from "styled-components";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);

  const [filteredData, setFilteredData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);


  useEffect(() => {
    // Call the API when the component mounts

    const fetchFoodData = async () => {

      setLoading(true);

      try {
        const resposnse = await fetch(BASE_URL);
        const json = await resposnse.json();


        setData(json);
        setFilteredData(json);
        setLoading(false);

      } catch (error) {

        setError("Unable to fetch data.");
        setLoading(false);

      }
    };

    fetchFoodData();

  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if (searchValue == "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredData(filter);
  }


  if (error) return <di>{error}</di>;
  if (loading) return <div>Loading...</div>;

  return (

    <Container>
      <MainContainer>
        <TopSection>
          <div className="navbar">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Searc food ..." />
          </div>
        </TopSection>
        <div className="text_bg">
          <h2>The Traditional shop</h2>
          <p>The Traditional Shop offers a curated collection of timeless treasures, blending heritage and style. Explore our rich assortment that resonates with tradition and modern elegance.</p>
          <Button>Shop Now</Button>
        </div>

      </MainContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Snack</Button>
        <Button>Lunch</Button>
        <Button>Dessert</Button>
      </FilterContainer>

      <SearchResult data={filteredData} />

    </Container>
  );
};

export default App;

const Container = styled.div``;

export const Button = styled.button`
  padding:10px 25px;
  border-radius:9px;
  font-size:18px;
  background-color:#fca103;
  color:#fff;
  border:none;
  cursor: pointer;
  transition:0.6 ease-in-out;

  &:hover{
    background-color:#c77f04;
  }
  
`;

const MainContainer = styled.div`
  background-image:url('/public/images/bg_cross.jpg');
  background-size:cover;
  background-position:60%;
  display:flex;
  justify-content:space-between;
  
  flex-direction:column;
  
  height:700px;

  .text_bg{
    height:400px;
    width:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:100px;
    gap:20px;

    p{
      color:#fff;
      width:400px;
      line-height:1.5;
    }
    
    h2{
      font-size:3rem;
      color:#fff;
    }
    
  
}

`;

const TopSection = styled.section`

  display:flex;
  justify-content:space-between;
  margin:auto;
  align-items:center;
  padding:10px 20px;
  max-width:1100px;
 

.search input{
    background-color:rgba(92, 88, 90, 0.48);
    border:1px solid white;
    padding:5px 10px; 
    color:white;   
  }
  .search input::placeholder{
    color: #fff;
  }
.navbar{
  display:flex;
  justify-content:center;
  
}
.navbar ul li{
  display:inline;
  list-style:none;
  padding:12px 48px;
  font-size:18px;
  color: #f9f9f9;
  cursor:pointer;
}
`;

const FilterContainer = styled.section`
padding:40px 0;
display:flex;
justify-content:space-evenly;
`;


