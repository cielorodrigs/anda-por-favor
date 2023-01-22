import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { iconFront } from "./components/listIcon.js";
import { iconFrame } from "./components/listIcon.js";
import { listBD } from "./components/listIcon.js";
import TitleSection from "../utils/titleSection.js";

import "./skills.scss";

library.add(fas, fab);

const Skills= () => {
  return (
    <>
          <TitleSection
        title="skills-title"
        tipoTitle="global.title.singular"
      />

      <div className="iconos">
        <div className="iconos-caja">
          {iconFront.map((icono, ind) => (
            <div key={ind} className="iconos-caja_content">
              <FontAwesomeIcon
                icon={[`${icono.prefix}`, `${icono.icon}`]}
                size="3x"
                className="icon"
              />
              <span>{icono.name}</span>
            </div>
          ))}
        </div>
        <div className="iconos-caja">
          {iconFrame.map((icono, ind) => (
            <div key={ind} className="iconos-caja_content">
              <FontAwesomeIcon
                icon={[`${icono.prefix}`, `${icono.icon}`]}
                size="3x"
                className="icon"
              />
              <span>{icono.name}</span>
            </div>
          ))}
        </div>
        <div className="iconos-caja">
          {listBD.map((icono, ind) => (
            <div key={ind} className="iconos-caja_content">
              <FontAwesomeIcon
                icon={[`${icono.prefix}`, `${icono.icon}`]}
                size="3x"
                className="icon"
              />
              <span>{icono.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
