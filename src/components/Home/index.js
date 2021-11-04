import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="HomeImage flex items-start justify-start mt-36 w-full h-screen relative">
        <div class="custom-shape-divider-top-1636013276">
          <div class="custom-shape-divider-top-1636014374">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
            <div className="flex flex-col items-start justify-center w-full h-80 p-24">
              <h2 className="text-white text-6xl mb-4">Home</h2>
              <ul class="list-outside bg-rose-200 text-white list-disc p-2">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
