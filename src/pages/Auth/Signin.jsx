import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row-reverse justify-center items-center">
            <div className="card bg-white/60 w-full max-w-lg shrink-0 rounded-none p-10">
                <form className="card-body">
                    <div className="form-control">
                        <h3 className="text-2xl text-accentDark font-semibold text-center pb-4">
                            Sign In Now!
                        </h3>

                        {/* email */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        {/* {error?.login && (
                            <label className="label text-red-500 text-sm">
                                {error.login}
                            </label>
                        )} */}

                        <label className="label">
                            <Link
                                to="/auth/forgot-password"
                                className="label-text-alt link link-hover text-orange-500"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>

                    <div className="form-control mt-6 space-y-2">
                        <button className="btn bg-primary text-white px-6 py-2 rounded-full">
                            Sign In
                        </button>

                        {/* sign up with google */}
                        {/* <GoogleLogin /> */}
                    </div>
                </form>
                <p className="text-center">
                    Already Have An Account?{" "}
                    <Link
                        to="/auth/register"
                        className="text-accent font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;
