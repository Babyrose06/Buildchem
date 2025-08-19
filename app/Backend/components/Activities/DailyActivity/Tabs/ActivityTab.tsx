import React from "react";

interface TicketTabProps {
    postData: any;
    handleChange: (
        e:
            | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            | { target: { name: string; value: any } }
    ) => void;
}

const TicketTab: React.FC<TicketTabProps> = ({ postData, handleChange }) => {
    return (
        <div>
            <div>
                <label className="block p-1 text-xs font-bold mb-1">Project Name</label>
                <input
                    name="Project"
                    value={postData.Project || " "}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                />
            </div>

            <div>
                <label className="block p-1 text-xs font-bold mb-1">Type of Activity</label>
                <select name="TypeActivity"
                    value={postData.TypeActivity || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required>
                    <option value="" > Select Activity </option>
                     <option value="Customer Order" > Customer Order </option>
                     <option value="Customer Inquiry Sales" > Customer Inquiry Sales </option>
                     <option value="Documentation" > Documentation </option>
                     <option value="Follow Up" > Follow Up </option>
                     <option value="Fb-Marketplace" >Fb-Marketplace </option>
                     <option value="After Sales-Refund" > After Sales-Refund </option>
                     <option value="After Sales-Repair/Replacement" > After Sales-Repair/Replacement </option>
                    <option value="Quotation Prepation" > Quotation Prepation </option>
                    <option value="Sales Order Preparation" > Sales Order Preparation </option>
                     <option value="Delivery Concern" > Delivery Concern </option>
                    <option value="Accounting Concern" > Accounting Concern </option>
                     <option value="Admin-Supplier Accreditation" > Admin-Supplier Accreditation </option>
                    <option value="Admin-Credit Terms Application" > Admin-Credit Terms Application </option>
                    <option value="Inbound Call" > Inbound Call </option>
                     <option value="Outbound Calls" >Outbound Calls </option>
                    <option value="Site Visit" > Site Visit </option>
                    <option value="Read/Check Emails" > Read/Check Emails </option>
                    <option value="Bidding Preparation" > Bidding Preparation </option>
                     <option value="Viber Replies" > Viber Replies </option>
                    <option value="Technical Concern" > Technical Concern </option>
                    <option value="Sample Request" > Sample Request </option>
                </select>
            </div>

            {postData.TypeActivity === "Quotation Prepation" && (

                <div>
                <label className="block p-1 text-xs font-bold mb-1">SO Amount (Sales Order) </label>
                <input
                    name="SOAmount"
                    value={postData.SOAmount || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                />
                <label className="block p-1 text-xs font-bold mb-1">Quotation Amount (Sales Order) </label>
                    <input
                        name="QuotationAmount"
                        value={postData.QuotationAmount || ""}
                        onChange={handleChange}
                        className="border-b p-3 text-xs w-full"

                    />
                </div>

            )}

            <div>
                <label className="block p-1 text-xs font-bold mb-1">Project Category </label>
                <select
                    name="Category"
                    value={postData.Category || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Project Category
                    </option>
                    <option value="SI 97"> Buildchem(r) SI 97 </option>
                    <option value="SI 98"> Buildchem(r) SI 98 </option>
                    <option value="SI 99"> Buildchem(r) SI 99 </option>
                    <option value="SI 100"> Buildchem(r) SI 100 </option>
                    <option value="SI 101"> Buildchem(r) SI 101 </option>
                    <option value="SI 102"> Buildchem(r) SI 102 </option>
                </select>
            </div>

            <div>
                <label className="block p-1 text-xs font-bold mb-1">Project Type </label>
                <select
                    name="Type"
                    value={postData.Type || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Project Type
                    </option>
                    <option value="B2B"> B2B </option>
                    <option value="B2C"> B2C </option>
                    <option value="B2G"> B2G </option>
                    <option value="Trade"> General Trade </option>
                    <option value="Personal"> Personal  </option>
                    <option value="Building"> Building Maintenance </option>
                </select>
            </div>


            <div>
                <label className="block p-1 text-xs font-bold mb-1"> Source </label>
                <select
                    name="Source"
                    value={postData.Source || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Type
                    </option>
                    <option value="Existing"> Existing </option>
                    <option value="Inquiries"> CSR Inquiries </option>
                    <option value="Referral"> Referral </option>
                    <option value="NewClient"> New Client Development </option>
                    <option value="Database"> Ecoshift Database  </option>
                </select>
            </div>

            <div>
                <label className="block p-1 text-xs font-bold mb-1"> Status </label>
                <select
                    name="Status"
                    value={postData.Status || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Type
                    </option>
                    <option value="Pending"> Pending </option>
                    <option value="Ongoing"> Ongoing </option>
                    <option value="Done"> Done </option>
                </select>
            </div>
        </div>
    );
};

export default TicketTab;