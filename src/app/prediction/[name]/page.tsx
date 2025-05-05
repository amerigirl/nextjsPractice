import React from "react";
interface Params {
  params: {name: string}
}


const page = ({ params }: Params) => {
  return <div>{params.name} </div>;
};

export default page;
