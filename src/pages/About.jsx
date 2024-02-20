import BgDiv from "../components/BgDiv";
import { useParams } from "react-router-dom";
import NotFound404 from "./404";

const About = () => {
  const { title } = useParams();
  if(title !== "about"){
    return <NotFound404 />
  } else {
    return <BgDiv bgColor={"bg-green-300"} title={title.charAt(0).toUpperCase() + title.slice(1)} />;
  }
};

export default About;
