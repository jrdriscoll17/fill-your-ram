import type {GetStaticProps, NextPage} from "next";
import { useEffect, useState } from "react";
import useRainbowify from "../hooks/useRainbowify";

const Home: NextPage = () => {
  const text = useRainbowify("Filling your ram");

  useEffect(() => {
    const arrays = [];

    const interval = setInterval(() => {
      const arr = new Array(1024 * 1024 * 100).fill("1")
      arrays.push(arr);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-6xl">
      <p className="">
      {text}
      </p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
}

export default Home;