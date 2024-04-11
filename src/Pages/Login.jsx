import React, { useState } from "react";

export default function Login({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("username or password should not be empty");
    } else {
      handleLogin(username, password);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5" style={{ 
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            border: '1px solid #dee2e6'
          }}>
            <div className="card-body" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <h1 className="card-title text-center" style={{
                marginBottom: '20px',
                fontSize: '2rem'
              }}>Login</h1>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label" style={{
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ 
                      borderRadius: '5px',
                      padding: '10px',
                      border: '1px solid #ced4da',
                      width: '100%'
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label" style={{
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ 
                      borderRadius: '5px',
                      padding: '10px',
                      border: '1px solid #ced4da',
                      width: '100%'
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100" style={{
                  borderRadius: '5px',
                  padding: '10px',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
