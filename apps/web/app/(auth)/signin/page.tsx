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

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function handleSignIn(e: React.FormEvent) {
        e.preventDefault();

        setIsLoading(true);

        try {
            const response = await axios.post(`${HTTP_URL}/signin`, {
                username,
                password
            });

            if(response && response.data && response.data.token ) {
                localStorage.setItem("token", response.data.token);
                router.push("/canvas");
            } else {
                alert("Signin failed. Invalid credentials");
            }
        } catch (error) {
            alert("Invalid username or password")
        } finally {
            setIsLoading(false);
        }
    }

    function fillTestCredentials() {
        setUsername("testuser");
        setPassword("testpassword");
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

                    <h2 className="mt-6 text-3xl font-bold">Sign in to DrawTogether</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Start collaborating on creative projects with your team
                    </p>
                </div>

                <div className="mt-8 bg-card shadow-sm p-6 pt-8 border border-muted rounded-xl">
                    <form className="space-y-6" onSubmit={handleSignIn}>
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

                        <div className="flex items-center justify-end">
                            <button
                                type="button"
                                className="flex items-center text-xs text-muted-foreground hover:text-primary"
                                title="Fill test credentials"
                                onClick={fillTestCredentials}
                            >
                                <span className="mr-1">Test account</span>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="14" 
                                height="14" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                >
                                    <path d="m12 15 2 2 4-4" />
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                </svg>
                            </button>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-primary hover:underline">
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}