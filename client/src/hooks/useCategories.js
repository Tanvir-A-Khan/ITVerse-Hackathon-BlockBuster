import { useEffect, useState } from "react";
import { useEtherContext } from "../contexts/etherContext";

export default function useCategories() {
  const { instance } = useEtherContext();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await instance.contract.getCategories();

        setCategories(res);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { categories, loading, error };
}
