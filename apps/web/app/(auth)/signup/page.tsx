import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { EyeIcon, KeyIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Signup() {
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
                    <form className="space-y-6">
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
                                    className="pl-10"
                                    placeholder="Choose a username"
                                    required
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
                                    type={"password"}
                                    className="pl-10 outline-none"
                                    placeholder="Create a password"
                                    required
                                />

                                <button 
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {<EyeIcon className="h-5 w-5 text-muted-foreground" />}
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
                                    type={"password"}
                                    className="pl-10 outline-none"
                                    placeholder="Confirm your password"
                                    required
                                />

                                <button 
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {<EyeIcon className="h-5 w-5 text-muted-foreground" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <button
                                className="flex items-center text-xs text-muted-foreground hover:text-primary"
                                title="Fill test credentials"
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
                        >
                            Create Account
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