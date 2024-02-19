import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Backdrop } from "@mui/material";
import { useState } from "react";
import AppRoutes from "./app/routes/mainNavigation";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <BrowserRouter>
        <AppRoutes />
      <ToastContainer />
      {loading && <Backdrop className="backdrop" open />}
    </BrowserRouter>
  );
}

export default App;
