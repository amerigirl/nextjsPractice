import React from "react";
//the interface for the object that will be passed as props to the page component
function getPredictedAge = async(name: string) => {
const res = await fetch(`https://api.agify.io?name=${name}`)
return res.json();
}
function getPredictedGender= async(name: string) => {
const res = await fetch(`https://api.genderize.io?name=${name}`)
return res.json();
}
function getPredictedCountry = async(name: string) => {
const res = await fetch(`https://api.nationalize.io?name=${name}`)
return res.json();
}
interface Params {
  params: {name: string}
}


const page = ({ params }: Params) => {
  return <div>{params.name} </div>;
};

export default page;
