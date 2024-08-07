import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import Header from "./Components/Header";

function App() {
    // State to manage the theme (dark or light mode)
    const [theme, setTheme] = useState(localStorage.getItem("portfolio-theme"));
    useEffect(() => {
        // Retrieve theme from local storage on initial load
        const localStorageTheme = localStorage.getItem("portfolio-theme");
        if (localStorageTheme) {
            setTheme(localStorageTheme);
        } else {
            // If no theme in local storage, check user's system preference
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
            } else {
                setTheme("light")
            }
        }
    }, []);
    useEffect(() => {
        // Update the classList of the document element based on theme changes
        if (theme === "dark") { document.documentElement.classList.add("dark") }
        else if (theme === "light") { document.documentElement.classList.remove("dark") }
    }, [theme]);
    // Function to toggle between light and dark themes
    function handleToggleTheme() {
        const tempTheme = theme;
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem("portfolio-theme", tempTheme === "dark" ? "light" : "dark");
    }
    return (
        <div className={theme}>
            <div className="text-black dark:text-white h-screen bg-blue-400 dark:bg-black">
                <Header theme={theme} handleToggleTheme={handleToggleTheme} />
                <Routes>
                    <Route path="/" element={<LobbyScreen />} />
                    <Route path="/room/:roomId" element={<RoomPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;