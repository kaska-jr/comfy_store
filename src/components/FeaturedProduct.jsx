import React from "react";
import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

function FeaturedProduct() {
  return (
    <div className="pt-24">
      <SectionTitle text="Featured Product" />
      <ProductsGrid />
    </div>
  );
}

export default FeaturedProduct;
