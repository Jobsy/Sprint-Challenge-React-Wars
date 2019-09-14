// import React from 'react';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Header } from "./components/Header";
import { Bio } from "./components/Bio";
import { Films } from "./components/Films";
import { Spicies } from "./components/Spicies";
import { Starships } from "./components/Starships";
import { Vehicles } from "./components/Vehicles";
import { Container, Wrapper, InfoStyle, BioStyle, FilmsUrlStyle } from "./components/style";
// import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  

  // const [data1, setData] = useState([]);
  const [data1, setData] = useState({results: [] });
  // const [data1, setData] = useState({hits: [] });
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.co/api/people")
        // .get("https://hn.algolia.com/api/v1/search?")
        .then(res => {
          // console.log("eeeee: ", res);
          console.log("mmmmmm: ", res.data)
          // console.log("mmmmmm: ", res.data.results)
          // setData(res.data.results);
          setData(res.data);
        })
        .catch(error => {
          // setData(error.response.status)
        })
    };
    fetchData();
  }, []);
  // console.log("mjfkfkfkd: ", data1.hits)
  return (
    <>
      <Wrapper>
        <Container>
          <h1 className="Header">React Wars</h1>

          {data1.results.map(item => (
            // console.log(item)
            // <>{const item = data2 || []}</>
            
            <>
              <Header name={item.name} />
              <InfoStyle>
                <BioStyle>
                  <Bio gender={item.gender} dob={item.birth_year} height={item.height} hair={item.hair_color} skin={item.skin_color} eye={item.eye_color} />
                </BioStyle>
                <FilmsUrlStyle>
                  <h4>Films URL</h4>
                  {item.films.map(item2 => (
                    <Films filmUrl={item2} />
                  ))}
                </FilmsUrlStyle>
              </InfoStyle>
              {/* <div>
              {item.species.map(item3 => (
                <Spicies specie={item3} />
              ))}
            </div>
              <div>
              {item.starships.map(item4 => (
                <Starships starship={item4} />
              ))}
            </div>
              <div>
              {item.vehicles.map(item5 => (
                <Vehicles vehicle={item5} />
              ))}
            </div> */}
            </>

          ))}

        </Container>
      </Wrapper>
    </>
  );
}

export default App;
