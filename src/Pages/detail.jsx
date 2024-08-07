const DetailPage = () => {
  return (
    <div className="bg-slate-600 min-h-screen p-5">
      <div className="bg-white min-h-14 flex justify-center items-center p-5">
        <h2 className="text-3xl">Kucing Persia</h2>
      </div>
      <div className="bg-white p-5 mt-3 flex">
        <img src="images/Kucing-Persia.jpg" className=" h-96 mt-3"></img>
        <div className="bg-gray-100 p-5 mt-3 ms-3">
          <h3>
            Umur harapan hidup : <span className="font-bold">15-20 tahun</span>
          </h3>
          <h3>
            Asal : <span className="font-bold">IRAN</span>
          </h3>
          <p className="mt-3 mb-5">
            Kucing persia adalah ras kucing domestik berbulu panjang dengan karakter wajah bulat dan moncong pendek. Namanya mengacu pada Persia, nama lama Iran, di mana kucing serupa ditemukan. Sejak akhir abad 19, kucing jenis ini
            dikembangkan di Britania Raya dan Amerika Serikat usai Perang Dunia II.[1] Di Britania Raya, ras ini disebut kucing bulu panjang persia, dibagi dalam dua jenis, yaitu Chinchilla dengan warna perak cerah dan yang agak gelap.
            Seperti halnya dengan ras siam, telah ada upaya oleh beberapa peternak untuk melestarikan ras kucing yang lebih tua, ras tradisional, yang memiliki moncong lebih jelas, yang lebih akrab dengan masyarakat umumnya.
          </p>
          <div className="flex gap-2">
            <span className="bg-blue-400 px-3 rounded-full">manis</span>
            <span className="bg-green-400 px-3 rounded-full">lembut</span>
            <span className="bg-red-400 px-3 rounded-full">penyayang</span>
          </div>
          <div className="flex justify-end">
            <a href="/" className="bg-gray-400 px-3 mt-3">
              Kembali
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
