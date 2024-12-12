import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "@workos-inc/authkit-react";
import WorkosWithHistory from "./components/WorkosWithHistory";

const ORGANIZATIONS = (import.meta.env.VITE_ORGANIZATION_IDS || "")
  .split(",")
  .filter(Boolean);

function App() {
  const {
    user,
    organizationId,
    switchToOrganization,
    signIn,
    isLoading,
    signOut,
  } = useAuth();

  const handleSwitchOrg = async (newOrgId) => {
    try {
      await switchToOrganization({
        organizationId: newOrgId,
      });
    } catch (error) {
      console.error("Failed to switch organization:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Please sign in</h1>
        <button
          onClick={() => signIn()}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <h1>Hello {user.email}</h1>
          <p>Organization ID: {organizationId}</p>
          <div style={{ marginTop: "10px" }}>
            <select
              value={organizationId}
              onChange={(e) => handleSwitchOrg(e.target.value)}
              style={{
                padding: "8px",
                fontSize: "14px",
                marginRight: "10px",
                borderRadius: "4px",
              }}
            >
              {ORGANIZATIONS.map((orgId) => (
                <option key={orgId} value={orgId}>
                  {orgId}
                </option>
              ))}
            </select>
            <span style={{ fontSize: "14px", color: "#666" }}>
              Switch Organization
            </span>
          </div>
          <a
            href={window.location.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "8px 16px",
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            Open in New Tab
          </a>
        </div>
        <button
          onClick={() => signOut()}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#ff4444",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WorkosWithHistory>
        <App />
      </WorkosWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
