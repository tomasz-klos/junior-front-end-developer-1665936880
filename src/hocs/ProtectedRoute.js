import { useParams } from "react-router";

import { data } from "../data";
import { TASK_STATUS } from "../helpers/constants";
import { formatTitle } from "../utils/utils";

const ProtectedRoute = ({ children }) => {
  const { title } = useParams();
  const taskTitle = formatTitle(title);
  const element = data.find((task) => task.title === taskTitle);
  const status = element.status;
  if (status === TASK_STATUS.blocked) return;
  return children;
};

export default ProtectedRoute;
