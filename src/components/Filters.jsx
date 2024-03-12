import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";
const Filters = () => {
  const { meta, params } = useLoaderData();

  //UPDATING THE VALUE OF THE INPUT TAGS
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        label="Search product"
        name="search"
        size="select-sm"
        defaultValue={search}
      />

      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        size="select-sm"
        list={meta.categories}
        defaultValue={category}
      />

      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        size="select-sm"
        list={meta.companies}
        defaultValue={company}
      />

      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        size="select-sm"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />

      {/* SHIPPING */}
      <FormCheckBox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to={"/products"} className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
