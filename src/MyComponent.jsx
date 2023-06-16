import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "./actions";
import { fetchData } from "./reducer";

function MyComponent() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
}

export default MyComponent;
