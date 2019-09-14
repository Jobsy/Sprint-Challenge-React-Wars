
import React from "react";
import { Header } from "./Header";
import { Bio } from "./Bio";
import { Films } from "./Films";
import { Species } from "./Species";
import { Starships } from "./Starships";
import { Vehicles } from "./Vehicles";
import { InfoStyle, BioStyle, FilmsUrlStyle } from "./style";



export const MappedArrays = function (props) {

    return (

        props.dataArr.map(item => (
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
              <div>
                {item.species.map(item3 => (
                  <Species specie={item3} />
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
              </div>
            </>
          ))
    );
};