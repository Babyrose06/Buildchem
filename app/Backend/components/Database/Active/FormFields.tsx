"use client";

import React, { useState, useEffect } from "react";

interface FormFieldsProps {
    postData: any;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => void;
    setPostData: React.Dispatch<React.SetStateAction<any>>;
    setShowForm: (show: boolean) => void;
    setIsEditMode: (edit: boolean) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isEditMode: boolean;
    initialFormState: any;
}

const FormFields: React.FC<FormFieldsProps> = ({
    postData,
    handleChange,
    setPostData,
    setShowForm,
    setIsEditMode,
    handleSubmit,
    isEditMode,
    initialFormState,
}) => {

    return (
        <form onSubmit={handleSubmit} className="text-xs space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                    <label className="block text-xs font-bold mb-1">Company Name</label>
                    <input
                        name="CompanyName"
                        value={postData.CompanyName || ""}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="border rounded p-2 text-xs w-full"
                        required
                    />
                </div>

                 <div>
                    <label className="block text-xs font-bold mb-1">Contact Person</label>
                    <input
                        name="ContactPerson"
                        value={postData.ContactPerson || ""}
                        onChange={handleChange}
                        placeholder="Contact Person"
                        className="border rounded p-2 text-xs w-full"
                    />
                </div>

              <div>
                <label className="block p-1 text-xs font-bold mb-1">Type of Customer </label>
                <select
                    name="CustomerType"
                    value={postData.CustomerType || ""}
                    onChange={handleChange}
                    className="border rounded p-2 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Client
                    </option>
                    <option value="Top 50"> Top 50</option>
                    <option value="Next 30"> Next 30</option>
                    <option value="Balance 20"> Balance 20 </option>
                    <option value="CSR Client"> CSR Client </option>
                    <option value="TSA Client"> TSA Client</option>
                </select>
            </div>
               
                 <div>
                    <label className="block text-xs font-bold mb-1">Complete Address</label>
                    <input
                        name="Address"
                        value={postData.Address || ""}
                        onChange={handleChange}
                        placeholder="Address"
                        className="border rounded p-2 text-xs w-full"
                    />
                </div>
  <div>
                <label className="block p-1 text-xs font-bold mb-1">Area</label>
                <select
                    name="Region"
                    value={postData.Region || ""}
                    onChange={handleChange}
                    className="border rounded p-2 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Area
                    </option>
                    <option value="Region I"> Region I - Ilocos Region</option>
                    <option value="Region II"> Region II - Cagayan Valley  </option>
                    <option value="Region III"> Region III - Central Luzon </option>
                    <option value="Region IV"> Region IV - CALABARZON </option>
                    <option value="Region V"> Region V - Bicol Region</option>
                </select>
            </div>

            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
                <button
                    type="submit"
                    className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-green-700 text-xs"
                >
                    {isEditMode ? "Update" : "Saved"}
                </button>
                <button
                    type="button"
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600 text-xs"
                    onClick={() => {
                        setShowForm(false);
                        setIsEditMode(false);
                        setPostData(initialFormState);
                    }}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default FormFields;