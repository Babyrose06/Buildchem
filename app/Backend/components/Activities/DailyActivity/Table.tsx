"use client";

import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

interface Product {
  _id: string;
  CompanyName: string;
  ContactPerson: string;
  ContactNumber: string;
  CustomerType: string;
  Status: string;
  ReferenceID: string;
  createdAt: string;
  updatedAt: string;
}

interface TableProps {
  currentPosts: Product[];
  handleEdit: (product: Product) => void;
  handleDelete: (id: string) => void;
}

const Table: React.FC<TableProps> = ({ currentPosts, handleEdit, handleDelete }) => {
  const handleExport = async () => {
    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Your App Name";
    workbook.created = new Date();

    // Add a worksheet
    const worksheet = workbook.addWorksheet("Customer Data");

    // Set columns
    worksheet.columns = [
      { header: "Company Name", key: "companyName", width: 25 },
      { header: "ContactPerson", key: "contactPerson", width: 25 },
      { header: "ContactNumber", key: "contactNumber", width: 20 },
      { header: "CustomerType", key: "customerType", width: 20 },
      { header: "Status", key: "status", width: 30 },
      { header: "Date Created", key: "createdAt", width: 20 },
      { header: "Reference ID", key: "referenceID", width: 15 }
    ];

    // Style the header row
    worksheet.getRow(1).eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF4472C4" }
      };
      cell.font = {
        bold: true,
        color: { argb: "FFFFFFFF" }
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" }
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });

    // Add data rows
    currentPosts.forEach((post) => {
      worksheet.addRow({
        companyName: post.CompanyName,
        contactPerson: post.ContactPerson,
        contactNumber: post.ContactNumber,
        customerType: post.CustomerType,
        status: post.Status,
        createdAt: new Date(post.createdAt).toLocaleString("en-PH", {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
        referenceID: post.ReferenceID
      });
    });

    // Style data rows
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        row.eachCell((cell) => {
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" }
          };
        });
      }
    });

    // Generate Excel file
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `Customer_Data_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const statusColors: { [key: string]: string } = {
    Ongoing: "bg-yellow-500",
    Existing: "bg-red-800",
    Done: "bg-green-800",
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Actvity Information</h2>
        <button
          onClick={handleExport}
          className={` ml-auto
    flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-all
    ${currentPosts.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md"
            }
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    active:scale-[0.98] transform transition-transform
  `}
          disabled={currentPosts.length === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Export to Excel
        </button>
      </div>
      <table className="text-left min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
          <tr>
            <th className="text-center px-6 py-3 text-left text-xs font-medium text-gray-700 tracking-wider">
              Actions
            </th>
            <th className="text-left px-6 py-3 text-left text-xs font-medium text-gray-700 tracking-wider">
              Company Name
            </th>
            <th className="text-left px-6 py-3 text-left text-xs font-medium text-gray-700 tracking-wider">
              Contact Person
            </th>
            <th className="text-left px-6 py-3 text-left text-xs font-medium text-gray-700 tracking-wider">
              Contact Number
            </th>
             <th className="text-left px-6 py-3 text-left text-xs font-medium text-gray-700 tracking-wider">
              Type of Client
            </th>
            <th className="text-left px-6 py-3 text-left text-xs font-medium text-gray-700 tracking-wider">
              Status
            </th>
            <th className="text-left px-6 py-3 text-left text-xs font-medium text-gray-700 tracking-wider">
              Date Created
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentPosts.length > 0 ? (
            currentPosts.map((post, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="text-indigo-600 hover:text-indigo-900 border border-indigo-600 rounded px-2 py-1 hover:bg-indigo-50 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="text-red-600 hover:text-red-900 border border-red-600 rounded px-2 py-1 hover:bg-red-50 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-xs font-medium text-gray-900 uppercase">
                      {post.CompanyName}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-xs text-gray-700">
                    {post.ContactPerson}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-xs text-gray-700">
                    {post.ContactNumber}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-xs text-gray-700">
                    {post.CustomerType || "-"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-xs text-gray-700">
                    <span
                      className={`text-white shadow-md text-[10px] px-2 py-1 mr-2 rounded-full ${statusColors[post.Status] || "bg-gray-400"
                        }`}
                    >
                      {post.Status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleString("en-PH", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="px-6 py-4 text-center text-sm text-gray-500">
                <div className="flex flex-col items-center justify-center py-8">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mt-2">No activity found</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;