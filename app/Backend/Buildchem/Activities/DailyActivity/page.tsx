"use client";

import React, { useState, useEffect } from "react";
import ParentLayout from "../../../components/Layouts/ParentLayout";
import SessionChecker from "../../../components/Session/SessionChecker";
import { ToastContainer, toast } from "react-toastify";
import Form from "../../../components/Activities/DailyActivity/Form";
import Table from "../../../components/Activities/DailyActivity/Table";
import Filters from "../../../components/Activities/DailyActivity/Filters";
import Pagination from "../../../components/Activities/DailyActivity/Pagination";
import { FiSearch, FiX, FiPlus } from "react-icons/fi";

export default function Post() {
    const [userDetails, setUserDetails] = useState({
        UserId: "",
        ReferenceID: "",
        Firstname: "",
        Lastname: "",
        Email: "",
        Role: "",
    });

    const [posts, setPosts] = useState<any[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingPostId, setEditingPostId] = useState<string | null>(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [postsPerPage, setPostsPerPage] = useState(5);

    const initialFormState = {
        CompanyName: "", 
        AffiliateName: "",
        ContactPerson: "",
        ContactNumber: "",
        Email: "",
        Address: "",
        Status: "",
        createdAt: "",

    };

    const [postData, setPostData] = useState(initialFormState);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchPosts = async (refId: string) => {
        try {
            const res = await fetch(`/api/Backend/Activities/fetch?id=${refId}`);
            const json = await res.json();
            setPosts(json.data || []);
        } catch (err) {
            toast.error("Failed to fetch brand.");
        }
    };

    useEffect(() => {
        const userId = new URLSearchParams(window.location.search).get("id");
        if (!userId) return;

        (async () => {
            try {
                const res = await fetch(`/api/Backend/user?id=${encodeURIComponent(userId)}`);
                const data = await res.json();
                setUserDetails({
                    UserId: data._id,
                    ReferenceID: data.ReferenceID ?? "",
                    Firstname: data.Firstname ?? "",
                    Lastname: data.Lastname ?? "",
                    Email: data.Email ?? "",
                    Role: data.Role ?? "",
                });
                fetchPosts(data.ReferenceID);
            } catch (err) {
                toast.error("Failed to fetch user data.");
            }
        })();
    }, []);

    //Searchbar
    useEffect(() => {
        let filtered = posts;

        // Filter by search term (CompanyName)
        if (searchTerm) {
            filtered = filtered.filter((post) =>
                post.CompanyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.Status.toLowerCase().includes(searchTerm.toLowerCase())

            );
        }

        // Filter by date range
        if (startDate || endDate) {
            filtered = filtered.filter((post) => {
                const postDate = post?.createdAt ? new Date(post.createdAt) : null;
                if (!postDate) return false;

                const meetsStartDate = !startDate || postDate >= new Date(startDate);
                const meetsEndDate = !endDate || postDate <= new Date(endDate + "T23:59:59");

                return meetsStartDate && meetsEndDate;
            });
        }

        setFilteredPosts(filtered);
    }, [posts, searchTerm, startDate, endDate]);

    //Pagination

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handleEdit = (posts: any) => {
        setPostData(posts);
        setEditingPostId(posts._id);
        setIsEditMode(true);
        setShowForm(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete the activity?")) return;
        try {
            const res = await fetch(`/api/Backend/Activities/delete?id=${id}`, { method: "DELETE" });
            const result = await res.json();
            if (res.ok) {
                toast.success("Data deleted");
                fetchPosts(userDetails.ReferenceID);
            } else {
                toast.error(result.message || "Delete failed");
            }
        } catch (err) {
            toast.error("Error deleting data");
        }
    };

    return (
        <SessionChecker>
            <ParentLayout>
                <div className="container mx-auto p-4 text-gray-900">
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        <h1 className="text-2xl font-bold mb-3">Activities - Daily Activity</h1>
                        <h1 className="text-xs mb-6">The Active Company Accounts section displays all currently active accounts.
                             Users can filter and explore accounts by client type, date range, and other criteria, making it easier to manage and analyze up-to-date company data.</h1>


                        {showForm && (
                            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-hidden">
                                {/* Overlay background */}
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
                                    onClick={() => {
                                        setShowForm(false);
                                        setIsEditMode(false);
                                        setEditingPostId(null);
                                    }}
                                />

                                {/* Centered floating modal */}
                                <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out overflow-y-auto p-4">

                                    {/* Header with close button */}
                                    <div className="sticky top-0 z-10 flex justify-between p-2 bg-white border-b">
                                        <h3 className=" text-center text-lg font-bold text-gray-800 uppercase">
                                            {isEditMode ? "Edit Record" : "Fill out Form"}
                                        </h3>

                                        <button
                                            onClick={() => {
                                                setShowForm(false);
                                                setIsEditMode(false);
                                                setEditingPostId(null);
                                            }}
                                            className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                                        >
                                            <FiX className="text-xl" />
                                        </button>
                                    </div>

                                    {/* Form content - scrollable area */}
                                    <div className="p-6">
                                        <Form
                                            showForm={showForm}
                                            isEditMode={isEditMode}
                                            postData={postData}
                                            initialFormState={initialFormState}
                                            setPostData={setPostData}
                                            setShowForm={setShowForm}
                                            setIsEditMode={setIsEditMode}
                                            editingPostId={editingPostId}
                                            setEditingPostId={setEditingPostId}
                                            fetchPosts={fetchPosts}
                                            userDetails={userDetails}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className=" mb-4 p-10 bg-white shadow-md rounded-lg text-gray-900">
                            <Filters
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                startDate={startDate}
                                setStartDate={setStartDate}
                                endDate={endDate}
                                setEndDate={setEndDate}
                                postsPerPage={postsPerPage}
                                setPostsPerPage={setPostsPerPage}
                                onAddClick={() => setShowForm(true)}

                            />

                            <Table
                                currentPosts={currentPosts}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}

                            />

                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={(page) => setCurrentPage(page)}
                            />
                        </div>

                    </div>
                </div>

                <ToastContainer className="text-xs" autoClose={1000} />
            </ParentLayout>
        </SessionChecker>
    );
}