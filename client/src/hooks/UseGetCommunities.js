import { useEffect, useState } from "react";
import { useEtherContext } from "../contexts/etherContext";

export default function useGetCommunities() {
  const { instance } = useEtherContext();

  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await instance.contract.getAllCommunity();

        setCommunities(res);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { communities, loading, error };
}
