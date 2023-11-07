import { Link, Outlet } from "react-router-dom";
import { CountProvider } from "./context/CountContext";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(1)

    const incrementCount = () => {
      if (count > 9) return
      setCount((prev) => prev + 1)
    }

    const decrementCount = () => {
      if (count < 2) return 
      setCount((prev) => prev - 1)
    }

    return (
        <div className="px-4 py-4 text-xl text-blue-700">
            <Link to="/assignment-1" className="block mb-2 hover:underline">
                <h1 className="text-lg font-semibold">Assignment 1</h1>
            </Link>
            <Link to="/assignment-2" className="block mb-2 hover:underline">
                <h1 className="text-lg font-semibold">Assignment 2</h1>
            </Link>
            <Link to="/assignment-3" className="block hover:underline">
                <h1 className="text-lg font-semibold">Assignment 3</h1>
            </Link>
            <Link to="/assignment-4" className="block hover:underline">
                <h1 className="text-lg font-semibold">Assignment 4</h1>
            </Link>
            <div className="mt-4">
                <h1 className="text-black text-5xl text-center underline mb-5">Assignment</h1>
                <CountProvider value={{count, incrementCount, decrementCount}}>
                    <Outlet />
                </CountProvider>
            </div>
        </div>
    );
}

export default App;
