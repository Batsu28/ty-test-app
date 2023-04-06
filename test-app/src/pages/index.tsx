// import Loading from "@/components/Loading";
import { MovieType } from "@/util/Types";
import axios from "axios";
import { useState } from "react";
import Card from "../components/Card";

export default function Home(props: { movies: MovieType[] }): JSX.Element {
  const [Movies, setAllMovies] = useState<MovieType[]>(props.movies);

  // useEffect(() => {
  //   try {
  //     axios.get("http://localhost:2000/movies?limit=0").then((res) => {
  //       setMovies(res.data);
  //       console.log(res.data);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  function LoadMore() {
    // if (allMovies)
    console.log(Movies.length);

    axios
      .get(`http://localhost:2000/movies?limit=${Movies.length}`)
      .then((res) => {
        setAllMovies([...Movies, ...res.data]);
      });
    console.log(Movies);
  }

  // if (!allMovies) return <Loading />;

  return (
    <>
      <div className="flex justify-around gap-10 flex-wrap">
        {Movies.map((movie: MovieType, i: number) => (
          <Card {...movie} key={i} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button
          className="w-[200px] h-[40px] rounded-xl m-20 bg-black text-white"
          onClick={LoadMore}
        >
          Load more
        </button>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:2000/movies?limit=0");
  const movies = await res.data;
  console.log(movies);

  return {
    props: {
      movies,
    },
  };
}
