import PageTitle from '../Components/Elements/title';
import DetailCards from '../Components/Layouts/detailCards';

const DetailPage = () => {
  return (
    <div className="bg-slate-600 min-h-screen p-3 sm:p-5">
      <PageTitle title="Kucing Persia" />
      <DetailCards />
    </div>
  );
};

export default DetailPage;
