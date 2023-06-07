

import Direcory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
const Home = () => { 

  return (
    <div>
        <Outlet/>
        <Direcory/>
    </div>
    
  );
};

export default Home;
