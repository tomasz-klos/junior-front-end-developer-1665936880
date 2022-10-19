import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./hocs/ProtectedRoute";
import Homepage from "./components/Homepage/Homepage";
import MainContext from "./context/mainContext";
import { data } from "./data";

function App() {
  const [tasks, setTasks] = useState();
  const [businessContexts, setBusinessContexts] = useState();
  const [currentTask, setCurrentTask] = useState();
  const [currentContext, setCurrentContext] = useState();

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <MainContext.Provider
      value={{
        tasks,
        setTasks,
        businessContexts,
        setBusinessContexts,
        currentContext,
        setCurrentContext,
        currentTask,
        setCurrentTask,
      }}
    >
      <Routes>
        <Route
          path="/:title"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
