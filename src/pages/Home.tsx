import { useEffect } from "react";
import { IUser } from "../interfaces/User/User";
import { useNavigate } from "react-router-dom";

function Home() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const userFounded = JSON.parse(user) as IUser;
      if (userFounded.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    } else {
      navigate("/login");
    }
  }, []);
  return <div>Home</div>;
}

export default Home;
