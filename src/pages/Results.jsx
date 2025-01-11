// src/pages/Results.js
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import "tailwindcss/tailwind.css";

const results = [
    {
        name: "John Doe",
        time: "2:45:30",
        position: 1,
        category: "Men's",
        event: "Marathon 2024",
    },
    {
        name: "Jane Smith",
        time: "3:05:10",
        position: 2,
        category: "Women's",
        event: "Marathon 2024",
    },
    {
        name: "Steve Brown",
        time: "3:15:20",
        position: 3,
        category: "Men's",
        event: "Marathon 2024",
    },
    // Add more sample results here
];

const Results = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredResults = results.filter((result) => {
        return (
            result.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory ? result.category === selectedCategory : true)
        );
    });

    return (
        <div className="max-w-screen-xl mx-auto px-6 lg:px-0  py-12">
            <h6 className="text-xl font-raleway font-bold text-center text-textSecondary mb-4 uppercase">
                Marathon Results
            </h6>
            <h3 className="text-3xl font-raleway font-semibold text-center text-textPrimary mb-10 uppercase">
                Check out the results of the latest marathon events here
            </h3>

            {/* Search and Filter Section */}
            <div className="flex justify-between mb-5 items-center">
                <div className="flex items-center space-x-2">
                    <FaSearch className="text-gray-500" />
                    <input
                        type="text"
                        className="input input-bordered w-64"
                        placeholder="Search by Name"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <IoFilterOutline className="text-gray-500" />
                    <select
                        className="select select-bordered"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Filter by Category</option>
                        <option value="Men's">Men&apos;s</option>
                        <option value="Women's">Women&apos;s</option>
                    </select>
                </div>
            </div>

            {/* Results Table */}
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Category</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredResults.map((result, index) => (
                        <tr key={index}>
                            <td>{result.position}</td>
                            <td>{result.name}</td>
                            <td>{result.time}</td>
                            <td>{result.category}</td>
                            <td>{result.event}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* No Results Found */}
            {filteredResults.length === 0 && (
                <p className="text-center text-lg text-gray-500 mt-5">
                    No results found
                </p>
            )}
        </div>
    );
};

export default Results;
