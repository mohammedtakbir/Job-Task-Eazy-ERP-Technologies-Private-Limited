import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers/routes";

function App() {
  return (
    <>
      <RouterProvider router={routers} />
      <Toaster />
    </>
  );
}

export default App;
