

const Register = () => {


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                {/* {error && <p className="text-red-500">{error}</p>} */}
                <form  className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Photo URL</label>
                        <input
                            type="text"
                            id="photoURL"
                            className="w-full px-3 py-2 mt-1 border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded"
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        Register
                    </button>
                </form>
                <p className="text-center">
                    Already have an account? <a href="/auth/signin" className="text-blue-500 hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    );
};

export default Register;