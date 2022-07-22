import React from "react";

import css from "./PlanetIllustration.module.css";

const PlanetIllustration = ({ randomPlanet }: { randomPlanet: number }) => {
  return (
    <div className={css.rootPlanetIllustration}>
      <div
        className={css.planet}
        style={{ filter: `hue-rotate(${randomPlanet}deg)` }}
      >
        <div className={css.wrap}>
          <div className={css.background} />
          <div className={css.clouds} />
        </div>
        <div className={css.mask} />
      </div>
    </div>
  );
};

export default PlanetIllustration;
