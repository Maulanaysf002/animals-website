const DetailCards = () => {
  return (
    <div className="bg-white p-3 sm:p-5 mt-3 flex flex-col md:flex-row">
      <img src="images/Kucing-Persia.jpg" className="w-full md:w-1/2 lg:w-1/3 h-auto md:h-96 mt-3 object-cover"></img>
      <div className="bg-gray-100 p-3 sm:p-5 mt-3 md:ml-3 flex-1">
        <h3 className="text-sm sm:text-base">
          Umur harapan hidup : <span className="font-bold">15-20 tahun</span>
        </h3>
        <h3 className="text-sm sm:text-base">
          Asal : <span className="font-bold">IRAN</span>
        </h3>
        <p className="mt-3 mb-5 text-sm sm:text-base">
          Kucing persia adalah ras kucing domestik berbulu panjang dengan karakter wajah bulat dan moncong pendek. Namanya mengacu pada Persia, nama lama Iran, di mana kucing serupa ditemukan. Sejak akhir abad 19, kucing jenis ini
          dikembangkan di Britania Raya dan Amerika Serikat usai Perang Dunia II.[1] Di Britania Raya, ras ini disebut kucing bulu panjang persia, dibagi dalam dua jenis, yaitu Chinchilla dengan warna perak cerah dan yang agak gelap.
          Seperti halnya dengan ras siam, telah ada upaya oleh beberapa peternak untuk melestarikan ras kucing yang lebih tua, ras tradisional, yang memiliki moncong lebih jelas, yang lebih akrab dengan masyarakat umumnya.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm">manis</span>
          <span className="bg-green-400 px-3 py-1 rounded-full text-xs sm:text-sm">lembut</span>
          <span className="bg-red-400 px-3 py-1 rounded-full text-xs sm:text-sm">penyayang</span>
        </div>
        <div className="flex justify-end mt-3">
          <a href="/" className="bg-gray-400 px-3 py-2 text-sm sm:text-base">
            Kembali
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailCards;
