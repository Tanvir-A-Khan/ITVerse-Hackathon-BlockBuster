import { useEffect, useState } from "react";
import { useEtherContext } from "../contexts/etherContext";

export default function useGetCommunityArts(communityId) {
  const { instance } = useEtherContext();

  const [communityArts, setCommunityArts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await instance.contract.getCommunityArts(communityId);

        setCommunityArts(res);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { communityArts, loading, error };
}
