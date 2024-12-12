import { useHistory } from "react-router-dom";
import { AuthKitProvider } from "@workos-inc/authkit-react";
import constants from "../constants";

const WorkosWithHistory = ({ children }) => {
  const history = useHistory();

  const onRedirectCallback = (appState) => {
    setTimeout(() => {
      const { state } = appState || {};
      if (state?.returnTo) {
        const search = state.search || "";
        history.push({ pathname: state.returnTo, search });
      } else {
        history.push(window.location.pathname);
      }
    });
  };

  return (
    <AuthKitProvider
      clientId={constants.VITE_WORKOS_CLIENT_ID}
      onRedirectCallback={onRedirectCallback}
      redirectUri={window.location.origin}
      apiHostname="identity.softledger.com"
      devMode={constants.VITE_WORKOS_DEV_MODE ?? false}
      onRefreshFailure={() => {
        console.log("onRefreshFailure");
      }}
    >
      {children}
    </AuthKitProvider>
  );
};

export default WorkosWithHistory;
