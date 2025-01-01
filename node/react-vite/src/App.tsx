import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FilterList from "./pages/FIlterList";
import TicTacToe from "./pages/TicTacToe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/filter-list",
    element: <FilterList />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  },
]);

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/filter-list">Filter List</a>
            </li>
            <li>
              <a href="/tic-tac-toe">Tic Tac Toe</a>
            </li>
          </ul>
        </nav>
      </header>
      <RouterProvider router={router} />
      <footer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sed!
        </p>
      </footer>
    </>
  );
}

export default App;
