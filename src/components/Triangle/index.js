import Fläche from "./components/Fläche/index";
import DescriptionTriangle from "./components/DescriptionTriangle/index";

const Triangle = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-row items-center justify-center mt-14">
          <div className="w-full flex items-center justify-center">
            <h2 className="text-blue-400 text-4xl">Dreieck Berechnungen</h2>
          </div>
        </div>
      </div>
      <DescriptionTriangle />
      <Fläche />
    </>
  );
};

export default Triangle;
