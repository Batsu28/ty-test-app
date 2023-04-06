import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { FullMovieType } from "@/util/Types";
import { useEffect, useState } from "react";
import NoImage from "@/components/NoImage";

export default function Movie(): JSX.Element {
  const [singleMovie, setSingleMovie] = useState<FullMovieType>();
  const [imgChecker, setImgChecker] = useState<boolean>(true);
  const router = useRouter();

  const { id } = router.query;

  console.log("movie", singleMovie);

  useEffect(() => {
    axios.get(`http://localhost:2000/movie/${id}`).then((res) => {
      setSingleMovie(res.data);
      console.log(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (!singleMovie?.poster) {
      setImgChecker(false);
    } else {
      const http = new XMLHttpRequest();
      http.open("HEAD", singleMovie.poster, false);
      // xhr.send();
      http.status != 404 ? setImgChecker(true) : setImgChecker(false);
    }
  }, [singleMovie?.poster]);

  return (
    <>
      <div className="w-full flex">
        <Link href={"/"}>
          <button className="w-[100px] h-[40px] bg-green-500 text-white rounded-lg m-3">
            Back
          </button>
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="w-[40%] m-3">
          {singleMovie?.poster ? (
            imgChecker ? (
              <picture>
                <img
                  src={singleMovie.poster}
                  alt={singleMovie.title}
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
        </div>
        <div className="w-60%">
          <h2>{singleMovie?.title}</h2>
        </div>
      </div>
    </>
  );
}
