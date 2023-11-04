import { useEffect, useState } from "react";
import { useEtherContext } from "../contexts/etherContext";

export default function useGetPendingArts(communityId) {
  const { instance } = useEtherContext();

  const [pendingArts, setPendingArts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await instance.contract.getPendingArts(communityId);

        setPendingArts(res);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { pendingArts, loading, error };
}
