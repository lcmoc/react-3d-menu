const MenuLinks = () => 
  <div className="flex items-center justify-center bg-blue-900 w-96 rounded-3xl bg-opacity-80 text-white">
    <a href="/home" className="p-2 pr-7 flex flex-col itmes-center justify-center hover:text-blue-300 text-lg cursor-pointer">
      <img className="h-10 w-auto" src="https://assets.codepen.io/907368/home.svg" alt=""/>
      Home
    </a>
    <a href className="p-2 pr-7 flex flex-col itmes-center justify-center hover:text-blue-300 cursor-pointer">
      <img className="h-10 w-auto" src="https://assets.codepen.io/907368/globe.svg" alt=""/>
      Globe
    </a>
    <a href className="p-2 pr-7 flex flex-col itmes-center justify-center hover:text-blue-300 cursor-pointer">
      <img className="h-10 w-auto" src="https://assets.codepen.io/907368/meteor_1.svg" alt=""/>
      Meteor
    </a>
    <a href className="p-2 flex flex-col itmes-center justify-center hover:text-blue-300 cursor-pointer">
      <img className="h-10 w-auto" src="https://assets.codepen.io/907368/rocket_1.svg" alt=""/>
      Rocket
    </a>
  </div>

export default MenuLinks