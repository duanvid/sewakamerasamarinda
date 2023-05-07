import { Navigate } from "react-router-dom";

export default function AdminPage({ admin }) {
  if (!admin) {
    return <Navigate to={`/`} replace />;
  }

  return <h2>Admin Page</h2>
};