import { Routes, Route } from 'react-router-dom';
import { AdmDetails } from '../Pages/AdmDetails';
import { AdmHome } from '../Pages/AdmHome';
import { AddDish } from '../Pages/AddDish';
import { UpdateDish } from '../Pages/UpdateDish';
import { HeaderAdm } from '../Components/HeaderAdm';
import { Footer } from '../Components/Footer';
import { useState } from 'react';
import { AdmOrder } from '../Pages/AdmOrder';

export function AppAdmRoutes() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <HeaderAdm onSearch={(query) => {
        setSearchQuery(query);
 }}/>
      <Routes>
        <Route path="/" element={<AdmHome searchQuery={searchQuery} />} />
        <Route path="/addDish" element={<AddDish />} />
        <Route path="/AdmOrder" element={<AdmOrder />} />
        <Route path="/admDetails/:dish_id" element={<AdmDetails />} />
        <Route path="/updateDish/:dish_id" element={<UpdateDish />} />
      </Routes>
      <Footer />
    </>
  );
}
