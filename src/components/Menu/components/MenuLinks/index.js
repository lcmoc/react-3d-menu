import TrianglePng from '../../../../assets/dreieck.png'
import SinusPng from '../../../../assets/sinus.png'
import KosinusPng from '../../../../assets/kosinus.png'

const MenuLinks = () => 
  <div className="flex items-center justify-center bg-blue-900 w-96 rounded-3xl bg-opacity-80 text-white">
    <a href="/" className="p-2 pr-7 flex flex-col itmes-center justify-center hover:text-blue-300 text-lg cursor-pointer">
      <img className="h-10 w-auto self-center" src="https://assets.codepen.io/907368/home.svg" alt=""/>
      Home
    </a>
    <a href="/dreieck" className="p-2 pr-7 flex flex-col itmes-center justify-center hover:text-blue-300 cursor-pointer">
      <img className="h-10 w-10 self-center" src={TrianglePng} alt=""/>
      Dreieck
    </a>
    <a href="/sinus" className="p-2 pr-7 flex flex-col itmes-center justify-center hover:text-blue-300 cursor-pointer">
      <img className="h-10 w-10 self-center" src={SinusPng} alt=""/>
      Sinus
    </a>
    <a href="/kosinus" className="p-2 flex flex-col itmes-center justify-center hover:text-blue-300 cursor-pointer">
      <img className="h-10 w-10 self-center" src={KosinusPng} alt=""/>
      Kosinus
    </a>
  </div>

export default MenuLinks