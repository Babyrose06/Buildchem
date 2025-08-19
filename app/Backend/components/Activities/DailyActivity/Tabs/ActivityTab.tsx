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
                <label className="block p-1 text-xs font-bold mb-1">Type of Customer </label>
                <select
                    name="CustomerType"
                    value={postData.CustomerType || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Client
                    </option>
                    <option value="Top50"> Top 50</option>
                    <option value="Next30"> Next 30</option>
                    <option value="Balance20"> Balance 20 </option>
                    <option value="CSRClient"> CSR Client </option>
                    <option value="TSAClient"> TSA Client</option>
                </select>
            </div>

            <div>
                <label className="block p-1 text-xs font-bold mb-1">Customer Status </label>
                <select
                    name="CustomerStatus"
                    value={postData.CustomerStatus || ""}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Client Status
                    </option>
                    <option value="Active"> Active </option>
                    <option value="NewClient"> New Client </option>
                    <option value="NonBuying"> Non-Buying </option>
                    <option value="Inactive"> Inactive  </option>

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
                    <option value="Existing"> Existing Client </option>
                    <option value="CSRInquiries"> CSR Inquiries </option>
                    <option value="OutboundFollowUp"> Outbound - Follow-Up </option>
                    <option value="OutboundTouchbase"> Outbound - Touchbase </option>
                    <option value="Government"> Government  </option>
                    <option value="PhilgepsWebsite"> Philgeps - Website  </option>
                    <option value="Philgeps"> Philgeps  </option>
                    <option value="Distributor"> Distributor  </option>
                    <option value="ModernTrade"> Modern Trade  </option>
                    <option value="Marketplace"> Facebook Marketplace  </option>
                    <option value="Showroom"> Walk-in / Showroom  </option>
                </select>
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

            {postData.TypeActivity === "Fb-Marketplace" && (

                <div>
                    <label className="block p-1 text-xs font-bold mb-1">Type </label>
                    <select
                        name="Type"
                        value={postData.Type || ""}
                        onChange={handleChange}
                        className="border-b p-3 text-xs w-full"
                        required
                    >
                        <option value="" disabled hidden>
                            Select Status
                        </option>
                        <option value="Posting">Posting </option>
                        <option value="Reply"> Reply Message </option>
                    </select>
                </div>
            )}

            {postData.TypeActivity === "Quotation Prepation" && (

                <div>
                    <label className="block p-1 text-xs font-bold mb-1">Project Name</label>
                    <input
                        name="ProjectName"
                        value={postData.ProjectName || " "}
                        onChange={handleChange}
                        className="border-b p-3 text-xs w-full"
                        required
                    />
                    <div>
                        <label className="block p-1 text-xs font-bold mb-1"> Item Category </label>
                        <input
                            name="ItemCategory"
                            value={postData.ItemCategory || " "}
                            onChange={handleChange}
                            className="border-b p-3 text-xs w-full"
                            required
                        />
                        <div>
                            <label className="block p-1 text-xs font-bold mb-1">Customer Type </label>
                            <select
                                name="CustomerType"
                                value={postData.CustomerType || ""}
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

                            <label className="block p-1 text-xs font-bold mb-1">Quotation Number</label>
                            <input
                                name="QuotationNumber"
                                value={postData.QuotationNumber || ""}
                                onChange={handleChange}
                                className="border-b p-3 text-xs w-full"
                            />

                            <label className="block p-1 text-xs font-bold mb-1">Quotation Amount</label>
                            <input
                                name="QuotationAmount"
                                value={postData.QuotationAmount || ""}
                                onChange={handleChange}
                                className="border-b p-3 text-xs w-full"

                            />

                            <label className="block p-1 text-xs font-bold mb-1">Type </label>
                            <select
                                name="Type"
                                value={postData.Type || ""}
                                onChange={handleChange}
                                className="border-b p-3 text-xs w-full"
                                required
                            >
                                <option value="" disabled hidden>
                                    Select Status
                                </option>
                                <option value="StandardQuotation">Sent Quotation - Standard </option>
                                <option value="SpecialPrice"> Sent Quotation - With Special Price </option>
                                <option value="QuotationWithSPF">Sent Quotation - With SPF</option>
                                <option value="WithSPF"> With SPFS </option>
                            </select>

                        </div>
                    </div>
                </div>
            )}

            {postData.TypeActivity === "Sales Order Preparation" && (

                <div>

                    <label className="block p-1 text-xs font-bold mb-1">SO Number </label>
                    <input
                        name="SONumber"
                        value={postData.SONumber || ""}
                        onChange={handleChange}
                        className="border-b p-3 text-xs w-full"
                    />

                    <label className="block p-1 text-xs font-bold mb-1">SO Amount </label>
                    <input
                        name="SOAmount"
                        value={postData.SOAmount || ""}
                        onChange={handleChange}
                        className="border-b p-3 text-xs w-full"
                    />

                    <label className="block p-1 text-xs font-bold mb-1">Type </label>
                    <select
                        name="Type"
                        value={postData.Type || ""}
                        onChange={handleChange}
                        className="border-b p-3 text-xs w-full"
                        required
                    >
                        <option value="" disabled hidden>
                            Select Status
                        </option>
                        <option value="RegularSO">Regular SO </option>
                        <option value="WillingToWait"> Willing To Wait </option>
                        <option value="SpecialProject">SPF - Special Project</option>
                        <option value="SPFLocal"> SPF - Local </option>
                        <option value="SPFForeign">SPF - Foreign </option>
                        <option value="Promo"> Promo </option>
                        <option value="FBMarketplace">FB Marketplace</option>
                        <option value="InternalOrder"> Internal Order </option>
                    </select>

                </div>
            )}

             {postData.TypeActivity === "Inbound Call" && (

                <div>
                    <label className="block p-1 text-xs font-bold mb-1">Type of Call </label>
                    <select
                        name="Calltype"
                        value={postData.Calltype || ""}
                        onChange={handleChange}
                        className="border-b p-3 text-xs w-full"
                        required
                    >
                        <option value="" disabled hidden>
                            Select Type of Call
                        </option>
                        <option value="AfterSales">After Sales (Warranty, Replacement, Certificates)</option>
                        <option value="DeliveryConcern"> Delivery Concern </option>
                        <option value="DeliveryConcern"> Accounting Concern </option>
                    </select>
                </div>
            )}

            <div>
                <label className="block p-1 text-xs font-bold mb-1">Remarks</label>
                <input
                    name="Enter Remarks Here.."
                    value={postData.Remarks || " "}
                    onChange={handleChange}
                    className="border-b p-3 text-xs w-full"
                    required
                />
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
                        Select Status
                    </option>
                    <option value="Assisted">⚪ Assisted (Client Assistance - Touchbase such as Calls) </option>
                    <option value="Paid"> 🟢 Paid (Identity - Have SO#) </option>
                    <option value="Delivered"> 🔵 Delivered (All Fields - SI & DR) </option>
                    <option value="Collected"> 🟤 Collected </option>
                    <option value="QuoteDone"> 🟣 Quote-Done </option>
                    <option value="SODone"> 🟠 SO-Done </option>
                    <option value="Cancelled"> ⛔ Cancelled </option>
                    <option value="Loss"> 🔴 Loss </option>
                    <option value="Ongoing"> 🟡 Ongoing</option>
                    <option value="Done"> 💚 Done </option>
                </select>
            </div>
        </div>
    );
};

export default TicketTab;