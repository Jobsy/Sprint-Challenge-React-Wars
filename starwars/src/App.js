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


  const [data1, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.co/api/people")
        .then(res => {
          console.log("mmmmmm: ", res.data.results)
          setData(res.data.results);
        })
        .catch(error => {
          // setData(error.response.status)
        })
    };
    fetchData();
  }, []);
  
  return (
    <>
      <Wrapper>
        <Container>
          <h1 className="Header">React Wars</h1>
          <ul>
            {data1.map(item => (
              <>
                <Header name={item.name} />
                <InfoStyle>
                  <BioStyle>
                    <Bio gender={item.gender} dob={item.birth_year} height={item.height} hair={item.hair_color} skin={item.skin_color} eye={item.eye_color} />
                  </BioStyle>
                  <FilmsUrlStyle>
                    {item.films.map(item2 => (
                      <Films filmUrl={item2} />
                    ))}
                  </FilmsUrlStyle>
                </InfoStyle>
                {/* <div>
              {item.spicies.map(item3 => (
                <Spicies spicie={item3} />
              ))}
            </div> */}
                {/* <div>
              {item.starships.map(item4 => (
                <Starships starship={item4} />
              ))}
            </div> */}
                {/* <div>
              {item.Vehicles.map(item5 => (
                <Vehicles Vehicle={item5} />
              ))}
            </div> */}
              </>

            ))}
          </ul>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
