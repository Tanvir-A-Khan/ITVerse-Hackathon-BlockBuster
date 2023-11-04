import { useEffect, useState } from "react";
import { useEtherContext } from "../contexts/etherContext";

export default function useGetUserCommunityFund(communityId) {
  const { instance } = useEtherContext();

  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await instance.contract.getUserCommunityFund(communityId);

        setRes(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { res, loading, error };
}
