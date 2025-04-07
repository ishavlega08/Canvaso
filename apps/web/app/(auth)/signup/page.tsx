"use client";

import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { EyeIcon, EyeOffIcon, KeyIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { HTTP_URL } from "../../../config";
import { useRouter } from "next/navigation";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function handleSignUp(e: React.FormEvent) {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        setIsLoading(true);

        try {
            await axios.post(`${HTTP_URL}/signup`, {
                username,
                password
            });
            
            router.push("/signin");
        } catch (error) {
            alert("There was an error creating your account.")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center bg-background p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="flex justify-center">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-2xl">D</span>
                        </div>
                    </div>

                    <h2 className="mt-6 text-3xl font-bold">Create an account</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Join DrawTogether and start creating with your team
                    </p>
                </div>

                <div className="mt-8 bg-card shadow-sm p-6 pt-8 border border-muted rounded-xl">
                    <form className="space-y-6" onSubmit={handleSignUp}>
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <UserIcon className="h-5 w-5 text-muted-foreground" />
                                </div>

                                <Input 
                                    id="username"
                                    name="username"
                                    type={"text"}
                                    value={username}
                                    className="pl-10"
                                    placeholder="Choose a username"
                                    required
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <KeyIcon className="h-5 w-5 text-muted-foreground" />
                                </div>

                                <Input 
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    className="pl-10 outline-none"
                                    placeholder="Create a password"
                                    required
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />

                                <button 
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5 text-muted-foreground" />
                                    )} 
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <KeyIcon className="h-5 w-5 text-muted-foreground" />
                                </div>

                                <Input 
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    className="pl-10 outline-none"
                                    placeholder="Confirm your password"
                                    required
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                    }}
                                />

                                <button 
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => {
                                        setShowConfirmPassword(!showConfirmPassword);
                                    }}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5 text-muted-foreground" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? "Creating account..." : "Create account"}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-primary hover:underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}