import { Navigate } from "react-router-dom";

export default function PrivateRoute({ user, children }) {
  if (!user) { // Kullanıcı giriş yapmamışsa
    return <Navigate to="/login" replace />;
  }
  // Kullanıcı giriş yapmışsa
  return children;
}
