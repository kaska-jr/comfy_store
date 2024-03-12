import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";

  console.log(isPageLoading);

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element mt-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
