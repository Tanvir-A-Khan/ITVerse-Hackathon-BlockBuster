import React from "react";
import { useEtherContext } from "../../contexts/etherContext";
import Community from "../Communities/Community";

export const Landing = () => {
  const { instance } = useEtherContext();
  const { account } = instance;
  return <div>{account !== null && <Community />}</div>;
};
