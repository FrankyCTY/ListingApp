import React from "react";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";

const useRouter = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();

  return React.useMemo(() => {
    return {
      push: history.push,
      matchPath: match.path,
      param: match.params,
      pathName: location.pathname,
      match,
    };
  }, [history.push, location.pathname, match]);
};

export default useRouter;
