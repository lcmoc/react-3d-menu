import classNames from "classnames";


const MenuLinks = () => 
<div className={classNames({
  "fixed bottom-24 w-full": true,
  // "hidden": !active,
}
  )}>
  <div className="flex items-center justify-center">
    test
    <a href="/home" className="pr-7 flex flex-col itmes-center justify-center hover:text-blue-600 text-lg">
      <img className="h-10 w-auto" src="https://assets.codepen.io/907368/home.svg" alt=""/>
      Home
    </a>
    <a href className="pr-7 flex flex-col itmes-center justify-center">
      <img className="h-10 w-auto" src="https://assets.codepen.io/907368/globe.svg" alt=""/>
      Globe
    </a>
    <a href className="pr-7 flex flex-col itmes-center justify-center">
      <img className="h-10 w-auto" src="https://assets.codepen.io/907368/meteor_1.svg" alt=""/>
      Meteor
    </a>
    <a href className="flex flex-col itmes-center justify-center">
      <img className="h-10 w-auto" src="https://assets.codepen.io/907368/rocket_1.svg" alt=""/>
      Rocket
    </a>
  </div>
</div>

export default MenuLinks