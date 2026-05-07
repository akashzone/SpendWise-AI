import { useParams } from "react-router-dom";

const Report = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Report Page</h1>
      <p>Report ID: {id}</p>
    </div>
  );
};

export default Report;