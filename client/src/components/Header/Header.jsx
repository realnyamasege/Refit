import React from "react";
import { link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Refit</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <link to="/" className="hover:underline">
                Home
              </link>
            </li>
            <li>
              <link to="/schedule" className="hover:underline">
                Class Schedule
              </link>
            </li>
            <li>
              <link to="/instructors" className="hover:underline">
                Instructors
              </link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <link to="/success-stories" className="hover:underline">
                Success Stories
              </link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;