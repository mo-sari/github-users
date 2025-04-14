import { useAppSelector } from "../hooks";
import { ExampleChart, Pie3D } from "./Charts";

const Repos = () => {
  const { repos } = useAppSelector((store) => store.user);
  const chartData = [
    {
      label: "HTML",
      value: "13",
    },
    {
      label: "CSS",
      value: "160",
    },
    {
      label: "Javascript",
      value: "80",
    },
  ];
  return (
    <>
      {/* <ExampleChart data={chartData} /> */}
      <Pie3D data={chartData} />
    </>
  );
};
export default Repos;
