// import React from 'react';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  
  const [data1, setData] = useState([] );
    // const [query, setQuery] = useState("2019-09-11");
  
    useEffect(() => {
      const fetchData = () => {
        axios
          .get("https://swapik.co/api/people")
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
    console.log("ddddddd: ", data1)
  //   return (
  //     <>
  //       <Wrapper>
  //         <Container>
  //           <h1 className="">Astronomy Picture of the Day</h1>
  //           <Header headerTitleAndInput={data.title} error={data} query={query} setQuery={e => setQuery(e.target.value)} />
  //           <Body imgSrc={data.url} paragraph={data.explanation} />
  //           <Footer footerCopyright={data.copyright} footerDate={data.date} />
  //         </Container>
  //       </Wrapper>
  //     </>
  //   );
  // }
  
  // export default App;
  


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ul>
        {data1.map(item => (
          // console.log(">>>>: ", item)
          // <li key={item.objectID}>
            <div>{item.name} {item.gender} {item.birth_year} {item.height} {item.hair_color}{item.skin_color}{item.eye_color}</div>
          // </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
