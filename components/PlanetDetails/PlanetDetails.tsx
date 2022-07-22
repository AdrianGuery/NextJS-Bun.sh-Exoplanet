import Link from "next/link";
import React from "react";
import { exoplanet } from "../../models/exoplanet";

import css from "./PlanetDetails.module.css";

interface PropTypes {
  planet: exoplanet;
  nextPlanetLink: string;
}
const PlanetDetails = ({ planet, nextPlanetLink, ...rest }: PropTypes) => {
  const description = `${planet.pl_name} is a planet discover with the ${planet.pl_discmethod} method and the ${planet.pl_facility} facility.`;
  return (
    <div className={css.rootPlanetDetails}>
      <div className={css.name}>
        <h1>{planet.pl_name}</h1>
      </div>
      <div className={css.description}>
        <p>{description}</p>
      </div>
      <div className={css.featureContainer}>
        <p className={css.featureName}>DISTANCE</p>
        <p className={css.featureData}>{planet.gaia_dist} ly</p>
      </div>
      <div className={css.featureContainer}>
        <p className={css.featureName}>Radius</p>
        <p className={css.featureData}>{planet.ra.toFixed(2)} R</p>
      </div>
      <div className={css.featureContainer}>
        <p className={css.featureName}>Temperature</p>
        <p className={css.featureData}>{planet.st_teff} K</p>
      </div>
      <div className={css.featureContainer}>
        <p className={css.featureName}>Rotation</p>
        <p className={css.featureData}>{planet.pl_orbper?.toFixed(0)} days</p>
      </div>
      <div className={css.featureContainer}>
        <p className={css.featureName}>Mass starr</p>
        <p className={css.featureData}>{planet.st_mass?.toFixed(0)} Sun</p>
      </div>
      <div className={css.featureContainer}>
        <p className={css.featureName}>Eccentricity</p>
        <p className={css.featureData}>{planet.pl_orbeccen}</p>
      </div>
      <div className={css.nextLink}>
        <a href={nextPlanetLink}>Next Planet &gt;</a>
      </div>
    </div>
  );
};

export default PlanetDetails;
