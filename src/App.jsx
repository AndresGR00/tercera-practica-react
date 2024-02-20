import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="h-[93.9%]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
