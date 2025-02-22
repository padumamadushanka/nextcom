'use client';
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function UserDashboard() {
    const { data, status, loading } = useSession();
    // console.log(data.user)
    return (
      <div className="container">
        {/* <div className="row">
                <nav className="nav justify-content-center mb-3">
                
                <Link className="nav-link" href="/dashboard/user/ad">
                    Manage Ads
                </Link>
            </nav>
        </div> */}
        <div class="container-fluid">
        <div class="row">
            
            <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar py-3">
                <h4 class="text-center">User Dashboard</h4>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link className="nav-link" href="/dashboard/user/ad">
                            Post Your Ad
                         </Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" href="/dashboard/user/adManager">
                            My Ads
                         </Link>
                    </li>
                </ul>
            </nav>
            
            
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h2>Welcome, {data?.user?.name} </h2>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card shadow-sm p-3">
                        <a href="dashboard/user/ad" className="btn btn-primary btn-lg">Post Your Ad </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card shadow-sm p-3">
                        <a href="/dashboard/user/adManager" className="btn btn-primary btn-lg">Manage your ads </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm p-3">
                        <div class="card shadow-sm p-3">
                        <div className="card-body">
                        <h5 className="card-title">Safety and Security Tips</h5>
                        <p>
                            Only trade with sellers you can meet in person, and never send or wire money.{" "}
                            <Link href={'/safety'} ><span class="badge text-bg-secondary">Find more helpful hints here.</span></Link>
                        </p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

  </div>
  ); }