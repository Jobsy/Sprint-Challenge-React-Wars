// import React from 'react';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Wrapper } from "./components/style";
import { MappedArrays } from "./components/MappedArrays";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [data1, setData] = useState({ results: [] });
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.co/api/people")
        .then(res => {
          setData(res.data);
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
          <MappedArrays dataArr={data1.results} />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
