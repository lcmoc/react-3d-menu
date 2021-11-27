import classNames from "classnames";

const Navigation = ({ linkPrev, linkNext }) => {
  return (
    <div className="flex items-center justify-center my-14 text-center">
      <a
        href={linkPrev}
        className={classNames("rounded px-2 w-28 text-lg", {
          "bg-gray-200 cursor-default": !linkPrev,
          "hover:bg-blue-700 hover:text-white transition ease-out duration-200":
            linkPrev,
        })}
      >
        &#8249; zurück
      </a>
      <a
        href="/dreieck"
        className="rounded px-2 w-28 hover:bg-blue-700 hover:text-white transition ease-out duration-200 text-lg"
      >
        Home
      </a>
      <a
        href={linkNext}
        className={classNames("rounded px-2 w-28 text-lg", {
          "bg-gray-200 cursor-default": !linkNext,
          "hover:bg-blue-700 hover:text-white transition ease-out duration-200":
          linkNext,
        })}
      >
        nächstes &#8250;
      </a>
    </div>
  );
};

export default Navigation;
