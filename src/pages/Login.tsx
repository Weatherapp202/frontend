import React from "react";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Button, TextField } from "@mui/material";

function Login() {
  return (
    <div className="w-full h-full flex flex-col p-2 justify-center min-h-[100vh] gap-4">
      <section className="flex flex-col gap-4 w-full items-center justify-center">
        <h2 className="font-bold text-2xl">Iniciar Sesión</h2>
        <div className="rounded-full p-2 bg-black w-max">
          <VpnKeyIcon sx={{ color: "white" }} fontSize="large" />
        </div>
      </section>
      <section className="flex flex-col gap-4 justify-center items-center mt-5">
        <TextField label="Usuario" variant="outlined" required />
        <TextField label="Contraseña" variant="outlined" type="password" required />
        <Button variant="outlined">Ingresar</Button>
      </section>
    </div>
  );
}

export default Login;
