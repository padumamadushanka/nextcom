"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import logoImage from "@/public/images/logo.png";
import Image from "next/image";


export default function TopNav() {
  const { data, status, loading } = useSession();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
                  <Image loading="lazy" src={logoImage} alt="Car" width={200} height={50} />
        </Link>
        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content that collapses on mobile */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {status === "authenticated" ? (
              <div className="d-flex">
                <Link
                  className="nav-link"
                  href={`/dashboard/${data?.user?.role === "admin" ? "admin" : "user"}`}
                >
                  {data?.user?.name} ({data?.user?.role})
                </Link>
                <a
                  className="nav-link pointer"
                  onClick={() => signOut({ callbackUrl: "/login" })}
                >
                  Logout
                </a>
              </div>
            ) : (
              <div className="d-flex">
                <Link className="nav-link" href="/login">
                  Login
                </Link>
                <Link className="nav-link" href="/register">
                  Register
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
