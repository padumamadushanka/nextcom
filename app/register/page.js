"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(`${process.env.API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.err);
        setLoading(false);
      } else {
        toast.success(data.success);
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="col-lg-5 col-md-8 col-sm-10 bg-light p-5 shadow rounded">
          <h2 className="mb-4 text-center">Create Your Account</h2>
          <p className="text-center text-muted">
            Already have an account? <a href="/login" className="text-primary">Sign in here</a>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="bi bi-person" /></span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="bi bi-envelope" /></span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="bi bi-lock" /></span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Your password"
                required
              />
            </div>
            <button
              className="btn btn-primary w-100"
              disabled={loading || !name || !email || !password}
            >
              {loading ? "Please wait..." : "Register"}
            </button>
          </form>
          <p className="text-muted text-center mt-3 small">
            By registering, I agree to Riyalanka's <a href="#">Terms of Use</a> and <a href="#">Policies</a> and consent to marketing communications.
          </p>
        </div>
      </div>
    </main>
  );
}
