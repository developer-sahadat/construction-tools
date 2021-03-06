import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const {
    image,
    description,
    minimumQuantity,
    name,
    price,
    availableQuantity,
    _id,
  } = service;

  return (
    <div className=" w-72 cursor-pointer border border-gray-100 service_container  mx-auto ">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text-service p-3 ">
        <h2 className="mt-5 text-lg font-bold mb-3 service-title">{name}</h2>
        <p className="text-sm text-gray-400">{description}</p>
        <h4 className="mt-3 font-bold text-xl">Price ${price}</h4>

        <Link to={`/purchase/${_id}`}>
          <button className="mt-5 service_btn border border-primary px-10 py-2 custom_btn font-medium">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
