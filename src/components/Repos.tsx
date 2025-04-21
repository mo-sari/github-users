import { useAppSelector } from "../hooks";
import { Pie3D, Doughnut2D, Column3D, Bar3D } from "./Charts";

type LanguageStat = {
  label: string;
  value: number;
  stars: number;
};

type StatEntry = {
  label: string;
  value: number;
};

type Accumulator = {
  stars: Record<number, StatEntry>;
  forks: Record<number, StatEntry>;
};

const Repos = () => {
  const { repos } = useAppSelector((store) => store.user);

  let languages = repos.reduce<Record<string, LanguageStat>>((total, curr) => {
    const { language, stargazers_count } = curr;
    if (!language) return total;
    if (total[language]) {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
      return total;
    } else {
      total[language] = { label: language, value: 1, stars: stargazers_count };
      return total;
    }
  }, {});

  let mostUsed = Object.values(languages);
  mostUsed = mostUsed.sort((l) => l.value).slice(0, 5);

  // most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((i) => {
      return { ...i, value: i.stars };
    });

  let { stars, forks } = repos.reduce<Accumulator>(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = {
        label: name,
        value: stargazers_count,
      };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  let newStars = Object.values(stars)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  let newForks = Object.values(forks)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <>
      {/* <ExampleChart data={chartData} /> */}
      <Pie3D data={mostUsed} />
      <Column3D data={newStars} />
      <Bar3D data={newForks} />
      <Doughnut2D data={mostPopular} />
    </>
  );
};
export default Repos;
