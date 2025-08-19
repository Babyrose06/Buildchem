import React, { useState, useEffect } from "react";
import Select from "react-select";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

interface CompaniesTabProps {
    postData: any;
    handleChange: (
        e:
            | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            | { target: { name: string; value: any } }
    ) => void;
}

const CompanyTab: React.FC<CompaniesTabProps> = ({ postData, handleChange }) => {

    const [isInput, setIsInput] = useState(false);
    const [companies, setCompanies] = useState<any[]>([]);

    const inputClass = "border-b p-4 text-xs w-full";
    const selectClass = "border-b p-4 text-xs w-full";

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await fetch("/api/Backend/Activities/companies");
                const data = await res.json();
                setCompanies(data);
            } catch (err) {
                console.error("Error fetching companies:", err);
            }
        };
        fetchCompanies();
    }, []);

    const CompanyOptions = companies.map((c) => ({
        value: c.CompanyName,
        label: c.CompanyName
    }));

    const handleCompanyChange = async (selectedOption: any) => {
        const selectedCompany = selectedOption ? selectedOption.value : "";

        if (!selectedCompany) {
            // Reset all related fields kapag walang company na selected
            handleChange({ target: { name: "CompanyName", value: "" } });
            handleChange({ target: { name: "Email", value: "" } });
            handleChange({ target: { name: "ContactPerson", value: "" } });
            handleChange({ target: { name: "Address", value: "" } });
            handleChange({ target: { name: "ContactNumber", value: "" } });
            return;
        }

        handleChange({ target: { name: "CompanyName", value: selectedCompany } });

        try {
            const res = await fetch(
                `/api/Backend/Activities/companies?CompanyName=${encodeURIComponent(selectedCompany)}`
            );
            if (!res.ok) return;
            const details = await res.json();

            handleChange({ target: { name: "Email", value: details.Email || "" } });
            handleChange({ target: { name: "ContactPerson", value: details.ContactPerson || "" } });
            handleChange({ target: { name: "Address", value: details.Address || "" } });
            handleChange({ target: { name: "ContactNumber", value: details.ContactNumber || "" } });
        } catch (err) {
            console.error("Error fetching company details:", err);
        }
    };


    return (
        <div>
            <div>
                <label className="block text-xs font-bold mb-1">Activity ID</label>
                <input
                    type="hidden"
                    name="ActivityID"
                    value={postData.ActivityID || ""}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-xs font-bold mb-1 mt-1">Company Name</label>
                <div className="flex items-center gap-1">
                    <button
                    type="button"
                    onClick={() => setIsInput(!isInput)}
                    className="text-xs px-3 py-2 border rounded hover:bg-blue-500 hover:text-white transition"
                >
                    <HiOutlineSwitchHorizontal size={15} />
                </button>
                {isInput ? (
                    <input
                        type="text"
                        name="CompanyName"
                        value={postData.CompanyName || ""}
                        onChange={handleChange}
                        className="border-b p-4 text-xs w-full capitalize"
                        placeholder="Enter Company Name"
                    />
                ) : (
                    <Select
                        options={CompanyOptions}
                        onChange={handleCompanyChange}
                        className="pt-4 pb-4 text-xs w-full"
                        placeholder="Select Company"
                        isClearable
                    />
                )}

                </div>
                
            </div>

            <div>
                <label className="block p-1 text-xs font-bold mb-1">Email</label>
                <input
                    name="Email"
                    value={postData.Email || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                />
            </div>

            <div>
                <label className="block p-1 text-xs font-bold mb-1">Contact Person</label>
                <input
                    name="ContactPerson"
                    value={postData.ContactPerson || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                />
            </div>

            <div>
                <label className="block p-1 text-xs font-bold mb-1">Address</label>
                <input
                    name="Address"
                    value={postData.Address || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                />
            </div>

            <div>
                <label className="block p-1 text-xs font-bold mb-1">Contact Number</label>
                <input
                    name="ContactNumber"
                    value={postData.ContactNumber || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                />
            </div>
        </div>
    );
};

export default CompanyTab;