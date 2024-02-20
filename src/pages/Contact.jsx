import BgDiv from "../components/BgDiv";
import { useParams } from "react-router-dom";
import NotFound404 from "./404";

const Contact = () => {
  const { title } = useParams();

  if( title !== "contact"){
    return <NotFound404 />
  } else {
    return <BgDiv bgColor={"bg-fuchsia-300"} title={title.charAt(0).toUpperCase() + title.slice(1)} />
  }
}

export default Contact