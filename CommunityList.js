// Gather Application - Community List Storage
// Authors:
// Srikar Dabbara, Nick Morgan, Megan Richardson, Josh Seaman
// ------------------
// !!Work Breakdown!!
// Created by: Srikar Dabbara

import React from "react";

const communityList = [
  "LGBTQ+",
  "Native American",
  "Living with Disabilities",
  "BIPOC",
  "Asian Pacific Islander",
  "Comunidad!"
];

const CommunityList = ({ communityList = [] }) => {
  return (
    <>
      {communityList.map((data, index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default CommunityList;
