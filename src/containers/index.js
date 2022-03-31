import { Outlet} from "react-router-dom";
import Header from "../component/Header/header.js";
import Footer from "../component/Footer/footer.js";
const Index = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default Index;