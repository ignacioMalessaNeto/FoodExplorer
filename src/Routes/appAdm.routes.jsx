import { Routes, Route } from 'react-router-dom';
import { AdmDetails } from '../Pages/AdmDetails';
import { AdmHome } from '../Pages/AdmHome';
import { AddDish } from '../Pages/AddDish';
import { UpdateDish } from '../Pages/UpdateDish';
import { HeaderAdm } from '../Components/HeaderAdm';
import { Footer } from '../Components/Footer';
import { useState } from 'react';

export function AppAdmRoutes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('name');

  return (
    <>
      <HeaderAdm onSearch={(query, type) => {
        setSearchQuery(query);
        setSearchType(type); }}/>
      <Routes>
        <Route path="/" element={<AdmHome searchQuery={searchQuery} searchType={searchType} />} />
        <Route path="/addDish" element={<AddDish />} />
        <Route path="/admDetails/:dish_id" element={<AdmDetails />} />
        <Route path="/updateDish/:dish_id" element={<UpdateDish />} />
      </Routes>
      <Footer />
    </>
  );
}
