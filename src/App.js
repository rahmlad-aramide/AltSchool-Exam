import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import {
  Contact,
  Home,
  Navbar,
  ErrorPage,
  UserDetails,
  Users,
} from "./Components";
import { ThemeContext, theme } from "./Context";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const color = darkMode ? theme.dark : theme.light;
  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="font-body">
      <ThemeContext.Provider value={theme}>
        <Navbar
          darkMode={darkMode}
          color={color}
          handleTheme={handleTheme}
          setDarkMode={setDarkMode}
        />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/users" element={<Users darkMode={darkMode} />}>
            <Route
              path=":telephone"
              element={
                <ErrorBoundary FallBackComponent={ErrorFallback}>
                  <UserDetails color={color} darkMode={darkMode} />
                </ErrorBoundary>
              }
            />
          </Route>
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="*" element={<ErrorPage darkMode={darkMode} />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
