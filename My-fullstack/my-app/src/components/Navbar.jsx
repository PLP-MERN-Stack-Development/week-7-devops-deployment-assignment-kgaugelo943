import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <Button variant="secondary" size="sm" onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
      </ul>
    </nav>
  );
}

