import { useEffect, useState } from "react";
import { useEtherContext } from "../contexts/etherContext";

export default function useGetCommunity(communityId) {
  const { instance } = useEtherContext();

  const [community, setCommunity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await instance.contract.getACommunity(communityId);

        setCommunity(res);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { community, loading, error };
}
