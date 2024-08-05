import { useEffect } from 'react';
import Navbar from '../Components/Layouts/navbar';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Halaman Home';
  }, []);

  return (
    <>
      <Navbar title="Halaman Utama" />
      <section className="w-full bg-gray-200 mt-5 p-5 flex gap-5">
        <div className="bg-white p-5 w-6/12 flex justify-center flex-col">
          <img src="images/Kucing-Persia.jpg" className="w-6/12"></img>
          <p className="mt-3 text-2xl font-bold">Kucing persia</p>
          <p className="mt-2">
            Kucing persia menjadi jenis kucing ras asing yang pertama diimpor ke Thailand. Jenis kucing ini juga menjadi salah satu ras kucing yang paling populer dijadikan hewan peliharan baik lokal maupun internasional. Kucing persia
            memiliki kepala dan dahi yang bulat lebar dan telinga kecil yang ujungnya membulat. Bentuk ekornya pun pendek dan kaki yang pendek.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
