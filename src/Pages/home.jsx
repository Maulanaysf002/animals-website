import { useEffect } from 'react';
import Navbar from '../Components/Layouts/navbar';
import AnimalCards from '../Components/Layouts/animalCards';
// import NavAnimal from '../Components/Fragments/navAnimals';
// import animals from '../data/animals.json';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Halaman Home';
  }, []);

  return (
    <>
      <Navbar title="Jenis Kucing">{/* <NavAnimal datas={animals} /> */}</Navbar>
      <AnimalCards />
    </>
  );
};

export default HomePage;
