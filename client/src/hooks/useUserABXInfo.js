import { useEffect, useState } from "react";
import { useEtherContext } from "../contexts/etherContext";

export default function useUserABXInfo() {
  const { instance } = useEtherContext();
  const { account } = instance;

  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await instance.contract.getUserABXInfo();

        // console.log(res);

        setValue(Number(res));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { value, loading, error };
}
