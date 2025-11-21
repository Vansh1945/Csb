import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <ToastContainer />
      <div className="max-w-md w-full space-y-8 mt-10">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 bg-gradient-to-r from-boutique-primary to-boutique-accent rounded-full flex items-center justify-center mb-6 shadow-lg">
            <svg className="h-10 w-10 text-boutique-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-boutique-textdark mb-3 tracking-tight">
            Admin Portal
          </h2>
          <p className="text-boutique-textdark/70 text-base md:text-lg">
            Sign in to access the admin dashboard
          </p>
        </div>
        <form className="mt-8 space-y-6 bg-boutique-secondary/95 backdrop-blur-sm py-10 px-8 shadow-2xl rounded-3xl border border-boutique-primary/20 hover:shadow-3xl transition-shadow duration-300" onSubmit={login}>
          <div className="space-y-6">
            <div className="animate-slide-up">
              <label htmlFor="email" className="block text-sm font-semibold text-boutique-textdark mb-3">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-boutique-primary group-focus-within:text-boutique-highlight transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full pl-12 pr-4 py-4 border-2 border-boutique-primary/30 placeholder-boutique-textdark/50 text-boutique-textdark rounded-xl focus:outline-none focus:ring-4 focus:ring-boutique-primary/20 focus:border-boutique-primary transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white/90"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="animate-slide-up animation-delay-100">
              <label htmlFor="password" className="block text-sm font-semibold text-boutique-textdark mb-3">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-boutique-primary group-focus-within:text-boutique-highlight transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full pl-12 pr-4 py-4 border-2 border-boutique-primary/30 placeholder-boutique-textdark/50 text-boutique-textdark rounded-xl focus:outline-none focus:ring-4 focus:ring-boutique-primary/20 focus:border-boutique-primary transition-all duration-300 bg-white"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="pt-4 animate-slide-up animation-delay-200">
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center items-center py-4 px-6 border border-transparent text-sm font-bold rounded-xl text-boutique-secondary transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ${
                isLoading
                  ? 'bg-boutique-textdark/50 cursor-not-allowed'
                  : 'bg-gradient-to-r from-boutique-primary to-boutique-accent hover:from-boutique-highlight hover:to-boutique-primary active:scale-95'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-boutique-secondary mr-3"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <svg className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Sign In
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
