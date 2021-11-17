import "./styles.css";

const TriangleHome = () => {
  return (
    <div className="flex items-center justify-center flex-col mb-20 mt-32">
      <h2 className="text-blue-400 text-4xl">Wähle ein Dreieck aus</h2>
      <div className="flex items-center justify-center flex-col mt-32 p-10">
        <div className="RightAngledTriangle cursor-pointer"></div>
        <a href="/gleichseitigesdreieck">
          <div className="EquilateralTriangle flex justify-center items-center mt-20">
            <h2 className="text-lg text-white w-full">Gleichseitiges Dreieck</h2>
          </div>
        </a>
        <div className="IsoscelesTriangle cursor-pointer"></div>
      </div>
    </div>
  );
};

export default TriangleHome;
