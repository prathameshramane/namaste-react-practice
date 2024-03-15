import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ContactUs = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Contact Us</h1>
      <h3>{user.name} - {user.email}</h3>
    </>
  );
};

export default ContactUs;
