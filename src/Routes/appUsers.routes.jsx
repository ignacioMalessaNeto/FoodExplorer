import { Routes, Route } from "react-router-dom";
import { UserDetails } from "../Pages/UserDetails";
import { UserHome } from "../Pages/UserHome";
import { UserFavorites } from "../Pages/UserFavorites";
import { UserOrder } from "../Pages/UserOrder";
import { HeaderUser } from "../Components/HeaderUser";
import { Footer } from "../Components/Footer";
import { useState } from "react";
import { DishContext } from "./../Hooks/dishContext";

export function AppUsersRoutes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [countDish, setCountDish] = useState(0);

  return (
    <>
      <DishContext.Provider value={{ countDish, setCountDish }}>
        <HeaderUser
          onSearch={(query) => {
            setSearchQuery(query);
          }}
        />
        <Routes>
          <Route path="/" element={<UserHome searchQuery={searchQuery} />} />
          <Route path="/UserOrder" element={<UserOrder />} />
          <Route path="/UserFavorites" element={<UserFavorites />} />
          <Route path="/UserDetails/:dish_id" element={<UserDetails />} />
        </Routes>
        <Footer />
      </DishContext.Provider>
    </>
  );
}