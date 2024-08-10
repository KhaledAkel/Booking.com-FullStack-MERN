import React, { useState } from "react";
import { GoogleBtn } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context";

function SignUpForm({ width, height }) {
    const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [globalError, setGlobalError] = useState('');
    const { dispatch } = useAuthContext();

    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(value.length < 8 ? "Password must contain at least 8 characters" : '');
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setConfirmPasswordError(value !== password ? "Passwords do not match" : '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGlobalError('');

        if (passwordError || confirmPasswordError) return;

        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
        };

        try {
            const response = await fetch(`${VITE_API_BASE_URL}/api/auth/sign-up`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                credentials: 'include',
            });

            if (response.ok) {
                console.log("User created successfully");
                dispatch({ type: "LOGIN" });
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
            <div className="row-span-1 w-full h-full flex items-center justify-between gap-x-2">
                <div className="flex flex-col text-sm text__color-primary w-1/2">
                    <label htmlFor="first_name" className="font-semibold">First Name</label>
                    <input type="text" placeholder="First Name" name="first_name" className="w-full focus:outline-none border p-2 rounded-xl text-[12px] text-black" required />
                </div>
                <div className="flex flex-col text-sm text__color-primary w-1/2">
                    <label htmlFor="last_name" className="font-semibold">Last Name</label>
                    <input type="text" placeholder="Last Name" name="last_name" className="w-full focus:outline-none border p-2 rounded-xl text-[12px] text-black" required />
                </div>
            </div>
            <div className="row-span-1 w-full h-full">
                <label htmlFor="email" className="text-sm font-semibold text__color-primary">Email</label>
                <input type="email" placeholder="Email" name="email" className="w-full focus:outline-none border p-2 rounded-xl text-[12px] text-black" required />
            </div>
            <div className="row-span-1 w-full h-full relative">
                <label htmlFor="password" className="text-sm font-semibold text__color-primary">Password</label>
                <input type="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} className="w-full focus:outline-none border p-2 rounded-xl text-[12px] text-black" required />
                <p className="text-[9px] text-red-500 absolute bottom-0 ml-2">{passwordError}</p>
            </div>
            <div className="row-span-1 w-full h-full relative">
                <label htmlFor="confirm_password" className="text-sm font-semibold text__color-primary">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" name="confirm_password" value={confirmPassword} onChange={handleConfirmPasswordChange} className="w-full focus:outline-none border p-2 rounded-xl text-[12px] text-black" required />
                <p className="text-[9px] text-red-500 absolute bottom-0 ml-2">{confirmPasswordError}</p>
            </div>
            <div className="row-span-1 w-full h-full ml-1 flex items-center gap-x-2 max-lg:gap-x-1 relative">
                <button type="submit" className="hover:bg-black text-md font-bold w-20 h-9 text-white flex items-center justify-center rounded bg-primary duration-300 max-lg:w-24">
                    Sign Up
                </button>
                <p className="text-[13px]">
                    Already have an account? <Link to="/sign-in" className="text-primary underline">Sign In</Link>
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

export default SignUpForm;
