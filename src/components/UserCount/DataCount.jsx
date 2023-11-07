import React, { useState } from "react";
import { useCount } from "../../context/CountContext";

function DataCount() {
    const { count, incrementCount, decrementCount } = useCount();

    return (
        <div className="bg-blue-500 p-4 rounded-lg text-white text-center">
            <p className="text-2xl font-bold">User Id</p>
            <span className="mb-4 mt-4">{count}</span>
            <div className="flex items-center mt-4 justify-center">
                <button onClick={incrementCount} className="bg-green-500 text-white px-4 py-2 rounded mr-4">
                    Increment
                </button>
                <button onClick={decrementCount} className="bg-red-500 text-white px-4 py-2 rounded">
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default DataCount;
