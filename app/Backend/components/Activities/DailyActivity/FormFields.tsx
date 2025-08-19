"use client";

import React, { useEffect } from "react";
import CompaniesTab from "./Tabs/CompaniesTab";
import ActivityTab from "./Tabs/ActivityTab";

interface FormFieldsProps {
    postData: any;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | { target: { name: string; value: any } }
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

    const generateTicketReferenceNumber = () => {
    const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
    return `ID-Buildchem-${randomNumber}`;
  };

  useEffect(() => {
    if (!isEditMode && !postData.ActivityID) {
      setPostData((prev: any) => ({
        ...prev,
        ActivityID: generateTicketReferenceNumber(),
      }));
    }
  }, [isEditMode, postData.ActivityID, setPostData]);

    return (
        <form onSubmit={handleSubmit} className="text-xs space-y-4">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                {/*CompaniesTab*/}
                <CompaniesTab postData={postData} handleChange={handleChange} />
                {/*ActivityTab*/}
                <ActivityTab postData={postData} handleChange={handleChange} />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
                <button
                    type="submit"
                    className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue- text-xs"
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