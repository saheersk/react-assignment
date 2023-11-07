import React, { useEffect, useRef, useState } from "react";

function FormValidation() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputField">
                        Input Field
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="inputField"
                        type="text"
                        placeholder="Enter text"
                        value={inputValue}
                        onChange={handleInputChange}
                        ref={inputRef}
                    />
                </div>
                <div className="text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormValidation;
