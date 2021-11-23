import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="HomeImage flex items-start justify-start mt-36 relative">
        <div className="flex flex-col items-start justify-center w-full h-80 p-24 mb-96">
          <h2 className="text-white text-6xl mb-4">Welcome to Geo-Rechner</h2>
          <p className="font-bold text-white text-lg">Herzlich Willkommen zu unserer Website dem: Geo-Rechner.</p>
          <p className="font-bold text-white text-lg">
            Mit dieser Website werdet ihr keine Probleme mehr haben um
            Dreickseigenschaften auszurechnen oder Probleme bei
            trigonometrischen Funktionen.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
