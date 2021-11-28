import "./styles.css";

const TriangleHome = () => {
  return (
    <div className="TriangleHomeImage MainContainer mb-20 mt-32">
      <h2 className="text-blue-400 text-4xl">Wähle ein Dreieck aus</h2>
      <div className="MainContainer mt-32 p-10">
        <a href="/gleichschenklig" className="MainContainer">
          <div className="IsoscelesTriangle"></div>
          <p className="p-text mt-10 hover:text-blue-500">Gleichschenkliges Dreieck</p>
        </a>
        <a href="/gleichseitigesdreieck" className="MainContainer">
          <div className="EquilateralTriangle mt-40"></div>
          <p className="p-text mt-10 hover:text-blue-500">Gleichseitiges Dreieck</p>
        </a>
        <a href="/rechtwinklig" className="MainContainer">
          <div className="RightAngledTriangle mt-40"></div>
          <p className="p-text mt-10 hover:text-blue-500">Rechtwinkliges Dreieck</p>
        </a>
      </div>
    </div>
  );
};

export default TriangleHome;
