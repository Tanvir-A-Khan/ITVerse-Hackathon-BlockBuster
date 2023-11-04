import { useEffect, useState } from "react";
import { useEtherContext } from "../contexts/etherContext";

export default function useGetArt(com, ar) {
  const { instance } = useEtherContext();

  const [data, setCommunities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await instance.contract.getCommunityArt(com, ar);

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

  return { data, loading, error };
}
