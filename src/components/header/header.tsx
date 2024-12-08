const Header = () => {
  return (
    <>
      <div className="py-[30px] flex justify-center bg-gradient-to-r from-orange-400 from-10% via-orange-600 via-30% to-orange-400 to-90%">
        <div className="grid grid-cols-4 gap-4 text-white font-sans	">
          <div className="col-start-1 col-end-2 font-bold text-l">
            بهترین غذاها در سریع ترین زمان
          </div>
          <div className="col-start-4 col-end-5 flex font-bold text-2xl gap-2">
            فست فود آنلاین
            <img src="/src/assets/icon/pizza.svg" alt="pizza" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
