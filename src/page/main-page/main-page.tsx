// import { useState } from "react";

import CardList from "../../components/card-list/card-list";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="mt-4 mr-12 font-bold text-xl">منو</div>
      <CardList />
      <Footer />
    </>
  );
};

export default MainPage;
