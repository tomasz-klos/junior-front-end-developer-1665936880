import { useEffect } from "react";
import { useNavigate } from "react-router";

import { data } from "../../data";
import { TASK_STATUS } from "../../helpers/constants";
import { formatTitleAsPath } from "../../utils/utils";


const Homepage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const element = data.find(task => task.status === TASK_STATUS.active);
      const title = formatTitleAsPath(element.title);
      console.log(title);
      navigate(`/tasks/${title}`)
    },[navigate])
    
    return null;
  }

  export default Homepage;