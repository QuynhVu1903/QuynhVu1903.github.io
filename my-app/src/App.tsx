import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

export type Person = {
  address: string;
  country: string;
};
// export const data: Person = {
//   address: "Hanoi",
//   country: "Vietnam"
// }

const App = () => {
  return (
    <>
      <Header />

      <Outlet />
      {/* Tất cả component con sẽ được render ở Outlet */}
      <Footer />
    </>
  );
};

export default App;
