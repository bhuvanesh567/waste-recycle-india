"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-[12rem] font-black text-white/5 leading-none select-none">
          404
        </div>
        <h1 className="text-4xl font-bold text-white -mt-8 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-green"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => history.back()}
            className="flex items-center gap-2 px-6 py-3 glass border border-white/10 text-slate-300 font-semibold rounded-xl transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
