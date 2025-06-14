import React from "react";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <AppRoutes />
      </main>
    </div>
  );
}


export default App;
