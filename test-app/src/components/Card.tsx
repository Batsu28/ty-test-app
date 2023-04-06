import { MovieType } from "@/util/Types";
import Link from "next/link";
import { useEffect, useState } from "react";
import NoImage from "./NoImage";

export default function Card(prop: MovieType): JSX.Element {
  const [imgChecker, setImgChecker] = useState<boolean>(true);

  useEffect(() => {
    if (!prop.poster) setImgChecker(false);
    const http = new XMLHttpRequest();
    http.open("HEAD", prop.poster, false);
    http.status != 404 ? setImgChecker(true) : setImgChecker(false);
  }, [prop.poster]);

  return (
    <>
      <Link href={`/movie/${prop._id}`}>
        <div className=" xl h-[350px] w-[200px] ">
          {prop.poster ? (
            imgChecker ? (
              <picture>
                <img
                  src={prop.poster}
                  alt={prop.title}
                  className="w-full h-[90%]"
                  onLoad={() => setImgChecker(true)}
                  onError={() => setImgChecker(false)}
                />
              </picture>
            ) : (
              <NoImage />
            )
          ) : (
            <NoImage />
          )}

          <h2 className="m-2">{prop.title.slice(0, 25)}...</h2>
        </div>
      </Link>
    </>
  );
}
