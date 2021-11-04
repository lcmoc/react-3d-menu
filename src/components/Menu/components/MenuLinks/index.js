import TrianglePng from "../../../../assets/dreieck.png";
import SinusPng from "../../../../assets/sinus.png";

const MenuLinks = () => {

  const Icon = ({ href, src, alt, txt }) => (
    <a
      href={href}
      className="p-2 pr-7 flex flex-col itmes-center justify-center hover:text-blue-300 text-lg cursor-pointer"
    >
      <img
        className="h-10 w-auto self-center"
        src={src}
        alt={alt}
      />
      {txt}
    </a>
  );

  return (
    <div className="flex items-center justify-center bg-blue-900 w-96 rounded-3xl bg-opacity-80 text-white">
      <Icon href="/dreieck" src={TrianglePng} alt="triangle" txt="Dreieck"/>
      <Icon href="/" src="https://assets.codepen.io/907368/home.svg" alt="home" txt="Home"/>
      <Icon href="/sinus" src={SinusPng} alt="sinus" txt="Sin Kos"/>
    </div>
  );
};

export default MenuLinks;
