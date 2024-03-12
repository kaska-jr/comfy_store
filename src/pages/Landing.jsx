import React from "react";
import Hero from "../components/Hero";
import { customFetch } from "../utils";
import { FeaturedProduct } from "../components";

const url = "/products?featured=true";

export const loader = (queryClient) => async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  console.log({ products });
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProduct />
    </>
  );
};

export default Landing;
