import { useContext } from "react";
import { noran } from "../context";

const Two = () => {
  const data = useContext(noran);

  return (
    <div>
      <h1>name :{data.name}</h1>
      <h2>age :{data.age}</h2>
    </div>
  );
};

export default Two;