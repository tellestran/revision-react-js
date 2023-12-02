import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/todo/");
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <h1>Hello World from Homepage</h1>
    </div>
  );
}

export default Home;
