import React from "react";

const communityList = [
  "LGBTQ+",
  "Native American",
  "Person with a Disability",
  "African American",
  "Asian American",
  "Hispanic"
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
