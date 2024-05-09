import { RouteObject } from 'react-router-dom'

import Stage from "@pages/stage";
import Login from "@pages/stage/Login";
import Workspace from "@pages/stage/workspace";
import WorkspaceGrid from "@pages/stage/workspace/Grid";
import WorkspaceUser from "@pages/stage/workspace/User";

import Movies from "@pages/stage/movies";

const StageRouter: RouteObject = {
  path: "/stage",
  element: <Stage />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "workspace",
      element: <Workspace />,
      children: [
        {
          path: "",
          element: <WorkspaceGrid />,
        },
        {
          path: "user",
          element: <WorkspaceUser />,
        },
      ]
    },
    {
      path: "movies",
      element: <Movies />
    }
  ]
}


export default StageRouter