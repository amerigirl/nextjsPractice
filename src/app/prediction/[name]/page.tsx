import React from "react";

//the interface for the object that will be passed as props to the page component
interface Params {
  params: { name: string };
}

const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};
const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};
const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

export default async function Page({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <div>
      <div>
        <div>Personal Info</div>
        <div>Age</div>
        <div>{age?.age}</div>
        <div>Gender</div>
        <div>{gender?.gender}</div>
        <div>Country</div>
        <div>{country?.country[0].country_id}</div>
      </div>
    </div>
  );
}
