import React, { useState } from "react";
import { nanoid } from "nanoid";

const FullDesc = ({ listings }) => {
  const {
    img,
    price,
    beds,
    baths,
    area,
    location,
    type,
    built,
    address,
    interior,
    exterior,
    schoolInformation,
    otherDetails,
    greenFeatures,
    text,
  } = listings[0];

  return (
    <div className="fullpage">
      <div className="fullpage__heading">
        <div className="fullpage__img mb-sm">
          <img src={img} alt="photo of house" />
        </div>
        <div className="fullpage__head mb-sm">
          {" "}
          <p className="address mb-sm">{address}</p>
          <p>${price.toLocaleString()}</p>
        </div>
        <div className="fullpage__short-info">
          <p>
            <span>baths:</span>
            {baths}
          </p>
          <p>
            <span>beds:</span>
            {beds}
          </p>
          <p>
            <span>area:</span>
            {area.toLocaleString()} sqft
          </p>
          <p>
            <span>type:</span>
            {type}
          </p>
          <p>
            <span>built in: {built}</span>
          </p>
        </div>
      </div>

      <div className="fullpage__interior">
        <h2>Interior Features</h2>
        {interior.map((item) => {
          const id = nanoid();
          const {
            stories,
            bedrooms,
            totalBathrooms,
            fullBathrooms,
            interiorFeatures,
            appliances,
            laundryDescription,
            floorDescription,
            fireplace,
            fireplaceDescription,
            cooling,
            coolingDescription,
            heating,
            heatingDescription,
          } = item;

          return (
            <div className="fullpage__interior-text" key={id}>
              <p>
                <span>total stories:</span>
                {stories}
              </p>
              <p>
                <span>Bedrooms:</span> {bedrooms}
              </p>
              <p>
                <span>Total Bathrooms:</span> {totalBathrooms}
              </p>
              <p className="mb-sm">
                <span>Full Bathrooms:</span> {fullBathrooms}
              </p>
              <p className="mb-sm">
                <span>Features:</span>
                {interiorFeatures.map((item) => item.toString()).join(" ,")}
              </p>
              <p className="mb-sm">
                <span>Appliances:</span>
                {appliances.map((item) => item.toString()).join(" ,")}
              </p>
              <p>
                <span> Laundry Description:</span> {laundryDescription}
              </p>
              <p>
                {" "}
                <span>Floor Description: </span>
                {floorDescription}
              </p>
              <p>
                {" "}
                <span>Fireplace: </span>
                {fireplace ? "yes" : "no"}
              </p>
              <p>
                <span> Fireplace Description: </span>
                {fireplaceDescription}
              </p>
              <p>
                <span>Cooling: </span> {cooling ? "yes" : "no"}
              </p>
              <p>
                <span>Cooling Description:</span> {coolingDescription}
              </p>
              <p>
                <span>Heating:</span> {heating ? "yes" : "no"}
              </p>
              <p>
                <span>Heating Description:</span> {heatingDescription}
              </p>
            </div>
          );
        })}
      </div>
      <div className="fullpage__exterior">
        <h2>Exterior/Building Features</h2>
        {exterior.map((item) => {
          const {
            lotSize,
            exteriorFeatures,
            lotFeatures,
            architechturalStyle,
            roof,
            sewer,
          } = item;
          const id = nanoid();

          return (
            <div className="fullpage__exterior-text" key={id}>
              <p>
                <span>Lot Size:</span> {lotSize} Acres
              </p>
              <p>
                <span>Exterior Features:</span>
                {exteriorFeatures.map((item) => item.toString()).join(" ,")}
              </p>
              <p>
                <span>Lot Features:</span>
                {lotFeatures.map((item) => item.toString()).join(" ,")}
              </p>
              <p>
                <span>Architechtural Style:</span> {architechturalStyle}
              </p>
              <p>
                <span>Roof: </span>
                {(roof && roof) || "No Info"}
              </p>
              <p>
                <span>Sewer: </span>
                {sewer}
              </p>
            </div>
          );
        })}
      </div>

      <div className="fullpage__content-text">
        <p>{text}</p>
      </div>

      <div className="fullpage__others">
        <h2>Other Property Details</h2>
        {otherDetails.map((item) => {
          const {
            garage,
            garageSpaces,
            parking,
            parkingTotal,
            view,
            county,
            waterSource,
            pool,
            poolFeatures,
          } = item;
          const id = nanoid();

          return (
            <div className="fullpage__others-text" key={id}>
              <p>
                <span>Area Name:</span> {location}
              </p>
              <p>
                <span>Garage:</span> {garage ? "yes" : "no"}
              </p>
              <p>
                <span>Garage Spaces: </span>
                {garageSpaces}
              </p>
              <p>
                <span>Parking: </span>
                {parking.map((item) => item.toString()).join(" ,")}
              </p>
              <p>
                <span>Parking Total:</span> {parkingTotal}
              </p>
              <p>
                <span>View: </span>
                {view ? "yes" : "no"}
              </p>
              <p>
                <span>County:</span> {county}
              </p>
              <p>
                <span>Water Source: </span>
                {waterSource}
              </p>
              <p>
                <span>Pool:</span> {pool ? "yes" : "no"}
              </p>
              <p>
                <span> Pool Features:</span>
                {poolFeatures.map((item) => item.toString()).join(" ,")}
              </p>
            </div>
          );
        })}
      </div>

      <div className="fullpage__school-green">
        <div>
          <h2 className="mb-sm">School Information</h2>
          {(schoolInformation &&
            schoolInformation.map((item) => {
              const { schoolDistrict } = item;
              const id = nanoid();
              return <p key={id}>School District: {schoolDistrict}</p>;
            })) || <p>School District: N/A </p>}
        </div>
        <div>
          <h2 className="mb-sm">Green Building Features</h2>
          <p>
            Green Features:
            {(greenFeatures &&
              greenFeatures.map((item) => item.toString()).join(" ,")) ||
              "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullDesc;
