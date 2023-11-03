import React from "react";
import { useEtherContext } from "../../contexts/etherContext";
import Community from "../Communities/Community";
import { Hero } from "./Hero";

export const Landing = () => {
  const { instance } = useEtherContext();
  const { account } = instance;
  return (
    <div>
      Landing
      <Hero />
      {account !== null && <Community />}
    </div>
  );
};
