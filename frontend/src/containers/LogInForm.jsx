import React, { useState } from "react";
import { GoogleBtn } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context";


function LogInForm({ width, height }) {
    const [globalError, setGlobalError] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGlobalError('');

        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/sign-in`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("User logged in successfully");
                dispatch({ type: "LOGIN" });
                localStorage.setItem("isAuthenticated", "true");
                navigate('/');
            } else {
                const responseData = await response.json();
                setGlobalError(responseData.message);
            }
        } catch (error) {
            setGlobalError("Network error. Please try again later.");
        }
    };

    return (
        <form
            style={{ width, height }}
            className="grid grid-rows-6 gap-y-2"
            onSubmit={handleSubmit}
        >
            <div className="row-span-1 w-full h-full">
                <label htmlFor="email" className="text-sm font-semibold text__color-primary">Email</label>
                <input type="email" placeholder="Email" name="email" className="w-full focus:outline-none border p-2 rounded-xl text-[12px] text-black" required />
            </div>
            <div className="row-span-1 w-full h-full relative">
                <label htmlFor="password" className="text-sm font-semibold text__color-primary">Password</label>
                <input type="password" placeholder="Password" name="password" className="w-full focus:outline-none border p-2 rounded-xl text-[12px] text-black" required />
            </div>
            <div className="row-span-1 w-full h-full ml-1 flex items-center gap-x-2 max-lg:gap-x-1 relative">
                <button type="submit" className="hover:bg-black text-md font-bold w-20 h-9 text-white flex items-center justify-center rounded bg-primary duration-300 max-lg:w-24">
                    Log In
                </button>
                <p className="text-[13px]">
                    Don't have an account? <Link to="/" className="text-primary underline">Sign up</Link>
                </p>
                <p className="text-[9px] text-red-500 absolute top-[-2px] ml-1">{globalError}</p>
            </div>
            <div className="pl-1">
                <div className="flex items-center justify-between gap-x-3 mb-2">
                    <div className="h-[2px] w-full bg-black" />
                    <p className="text-sm font-bold text__color-primary">OR</p>
                    <div className="h-[2px] w-full bg-black" />
                </div>
                <GoogleBtn />
            </div>
        </form>
    );
}

export default LogInForm;
