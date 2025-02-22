import Link from "next/link";

export default function NotFound() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 text-center bg-light">
      <div className="container">
        <img src="/images/notfound.png" alt="Page Not Found" width={400} height={300} className="img-fluid mb-4" />
        <h1 className="display-4 text-danger fw-bold">404</h1>
        <h2 className="mb-3">Oops! Page Not Found</h2>
        <p className="text-muted">The page you are looking for does not exist. It might have been moved or deleted.</p>
        <Link href="/" className="btn btn-primary mt-3">
          Go to Home
        </Link>
      </div>
    </div>
  ); }