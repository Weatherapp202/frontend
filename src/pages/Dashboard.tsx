import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/User/User";

function Dashboard() {
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
  

  return (
    <div className="w-full p-8 px-4">
      <p className="font-bold text-xl">Bienvenido</p>
      <div className="border border-slate-500 mt-8 rounded-lg p-2">
        <p className="font-bold">Usuarios:</p>


      </div>
    </div>
  );
}

export default Dashboard;
