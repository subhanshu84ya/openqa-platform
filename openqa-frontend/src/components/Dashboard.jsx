import { useEffect, useState } from "react";
import { getProtectedData } from "../services/protectedService";

const Dashboard = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    getProtectedData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Unauthorized or token expired");
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{data}</p>
    </div>
  );
};

export default Dashboard;
