
import { useHistory } from "react-router-dom"

const Logout = () => {

sessionStorage.clear();
alert("Successfully logout");

  return (
     
  <Redirect  to="/AllNews">
  </Redirect>
  
  );
};

export default Logout;