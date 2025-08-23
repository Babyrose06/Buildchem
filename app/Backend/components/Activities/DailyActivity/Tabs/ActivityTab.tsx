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
                <label className="block p-1 text-xs font-bold mb-1">Region</label>
                <select
                    name="Region"
                    value={postData.Region || ""}
                    onChange={handleChange}
                    className="border-b p-2 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Region
                    </option>
                    <option value="Region I"> Region I - Ilocos Region</option>
                    <option value="Region II"> Region II - Cagayan Valley  </option>
                    <option value="Region III"> Region III - Central Luzon </option>
                    <option value="Region IV"> Region IV - CALABARZON </option>
                    <option value="Region V"> Region V - Bicol Region</option>
                </select>
            </div>


            <div>
                <label className="block p-1 text-xs font-bold mb-1">Type of Customer </label>
                <select
                    name="CustomerType"
                    value={postData.CustomerType || ""}
                    onChange={handleChange}
                    className="border-b p-2 text-xs w-full"
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
                <label className="block p-1 text-xs font-bold mb-1">Customer Status </label>
                <select
                    name="CustomerStatus"
                    value={postData.CustomerStatus || ""}
                    onChange={handleChange}
                    className="border-b p-2 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Client Status
                    </option>
                    <option value="Active"> Active </option>
                    <option value="New Client"> New Client </option>
                    <option value="Non-Buying"> Non-Buying </option>
                    <option value="Inactive"> Inactive  </option>

                </select>
            </div>


            <div>
                <label className="block p-1 text-xs font-bold mb-1"> Source </label>
                <select
                    name="Source"
                    value={postData.Source || ""}
                    onChange={handleChange}
                    className="border-b p-2 text-xs w-full"
                    required
                >
                    <option value="" disabled hidden>
                        Select Type
                    </option>
                    <option value="Existing"> Existing Client </option>
                    <option value="CSR Inquiries"> CSR Inquiries </option>
                    <option value="Outbound - Follow-Up"> Outbound - Follow-Up </option>
                    <option value="Outbound - Touchbase"> Outbound - Touchbase </option>
                    <option value="Government"> Government  </option>
                    <option value="Philgeps - Website"> Philgeps - Website  </option>
                    <option value="Philgeps"> Philgeps  </option>
                    <option value="Distributor"> Distributor  </option>
                    <option value="Modern Trade"> Modern Trade  </option>
                    <option value="Facebook Marketplace"> Facebook Marketplace  </option>
                    <option value="Walk-in / Showroom"> Walk-in / Showroom  </option>
                </select>
            </div>

            <div>
                <label className="block p-1 text-xs font-bold mb-1">Type of Activity</label>
                <select name="TypeActivity"
                    value={postData.TypeActivity || ""}
                    onChange={handleChange}
                    className="border-b p-2 text-xs w-full"
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
                        className="border-b p-2 text-xs w-full"
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
                        className="border-b p-2 text-xs w-full"
                        required
                    />
                    <div>
                        <label className="block p-1 text-xs font-bold mb-1"> Item Category </label>
                        <input
                            name="ItemCategory"
                            value={postData.ItemCategory || " "}
                            onChange={handleChange}
                            className="border-b p-2 text-xs w-full"
                            required
                        />
                        <div>
                            <label className="block p-1 text-xs font-bold mb-1">Customer Type </label>
                            <select
                                name="CustomerType"
                                value={postData.CustomerType || ""}
                                onChange={handleChange}
                                className="border-b p-2 text-xs w-full"
                                required
                            >
                                <option value="" disabled hidden>
                                    Select Project Type
                                </option>
                                <option value="B2B"> B2B </option>
                                <option value="B2C"> B2C </option>
                                <option value="B2G"> B2G </option>
                                <option value="General Trade"> General Trade </option>
                                <option value="Personal"> Personal  </option>
                                <option value="Building Maintenance"> Building Maintenance </option>
                            </select>

                            <label className="block p-1 text-xs font-bold mb-1">Quotation Number</label>
                            <input
                                name="QuotationNumber"
                                value={postData.QuotationNumber || ""}
                                onChange={handleChange}
                                className="border-b p-2 text-xs w-full"
                            />

                            <label className="block p-1 text-xs font-bold mb-1">Quotation Amount</label>
                            <input
                                name="QuotationAmount"
                                value={postData.QuotationAmount || ""}
                                onChange={handleChange}
                                className="border-b p-2 text-xs w-full"

                            />

                            <label className="block p-1 text-xs font-bold mb-1">Type </label>
                            <select
                                name="Type"
                                value={postData.Type || ""}
                                onChange={handleChange}
                                className="border-b p-2 text-xs w-full"
                                required
                            >
                                <option value="" disabled hidden>
                                    Select Status
                                </option>
                                <option value="Standard Quotation">Sent Quotation - Standard </option>
                                <option value=" Sent Quotation - With Special Price"> Sent Quotation - With Special Price </option>
                                <option value="Sent Quotation - With SPF">Sent Quotation - With SPF</option>
                                <option value="With SPFS"> With SPFS </option>
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
                        className="border-b p-2 text-xs w-full"
                    />

                    <label className="block p-1 text-xs font-bold mb-1">SO Amount </label>
                    <input
                        name="SOAmount"
                        value={postData.SOAmount || ""}
                        onChange={handleChange}
                        className="border-b p-2 text-xs w-full"
                    />

                    <label className="block p-1 text-xs font-bold mb-1">Type </label>
                    <select
                        name="Type"
                        value={postData.Type || ""}
                        onChange={handleChange}
                        className="border-b p-2 text-xs w-full"
                        required
                    >
                        <option value="" disabled hidden>
                            Select Status
                        </option>
                        <option value="Regular SO">Regular SO </option>
                        <option value="Willing To Wait"> Willing To Wait </option>
                        <option value="SPF - Special Project">SPF - Special Project</option>
                        <option value="SPF - Local"> SPF - Local </option>
                        <option value="SPF - Foreign">SPF - Foreign </option>
                        <option value="Promo"> Promo </option>
                        <option value="FB Marketplace">FB Marketplace</option>
                        <option value="Internal Order"> Internal Order </option>
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
                        className="border-b p-2 text-xs w-full"
                        required
                    >
                        <option value="" disabled hidden>
                            Select Type of Call
                        </option>
                        <option value="After Sales (Warranty, Replacement, Certificates)">After Sales (Warranty, Replacement, Certificates)</option>
                        <option value="Delivery Concern"> Delivery Concern </option>
                        <option value="Accounting Concern"> Accounting Concern </option>
                    </select>
                </div>
            )}

            {postData.TypeActivity === "Outbound Calls" && (

                <div>
                    <label className="block p-1 text-xs font-bold mb-1">Callbacks </label>
                    <select
                        name="Callbacks"
                        value={postData.Callbacks || ""}
                        onChange={handleChange}
                        className="border-b p-2 text-xs w-full"
                        required
                    >
                        <option value="" disabled hidden>
                            Select Callback
                        </option>
                        <option value="CallbackTomorrow">Callback Tomorrow</option>
                        <option value="Callback3Days"> Callback after 3 Days </option>
                        <option value="CallbackWeek"> Callback after a Week </option>
                        <option value="PickDate"> Pick a Date </option>
                    </select>

                    <label className="block p-1 text-xs font-bold mb-1">Call Status </label>
                    <select
                        name="CallStatus"
                        value={postData.CallStatus || ""}
                        onChange={handleChange}
                        className="border-b p-2 text-xs w-full"
                        required
                    >
                        <option value="" disabled hidden>
                            Select status
                        </option>
                        <option value="CallbackTomorrow">Successful</option>
                        <option value="Callback3Days"> Unsuccessful </option>
                    </select>

                    <label className="block p-1 text-xs font-bold mb-1">Type of Call </label>
                    <select
                        name="TypeCall"
                        value={postData.TypeCall || ""}
                        onChange={handleChange}
                        className="border-b p-2 text-xs w-full"
                        required
                    >
                        <option value="" disabled hidden>
                            Select Type
                        </option>
                        <option value="CallbackTomorrow">Ringing Only</option>
                        <option value="Callback3Days"> No Requirements </option>
                        <option value="CallbackTomorrow">Cannot Be Reached</option>
                        <option value="Callback3Days"> Not Connected with the Company </option>
                        <option value="Callback3Days"> Waiting for future Projects </option>
                    </select>
                </div>
            )}

            {postData.Callbacks === "PickDate" && (

                <div>
                    <label className="block p-1 text-xs font-bold mb-1">Callbacks </label>
                    <input
                    type="datetime-local"
                    value={postData.Callbacks || " "}
                    onChange={handleChange}
                    className="border-b p-2 text-xs w-full"
                    required
                />
                </div>
            )}

             <div>
                 <label className="block p-1 text-xs font-bold mb-1">Remarks</label>
                    <input
                        name="Remarks"
                        value={postData.Remarks || ""}
                        onChange={handleChange}
                        className="border-b p-2 text-xs w-full"
                />
            </div>


            <div>
                <label className="block p-1 text-xs font-bold mb-1"> Status </label>
                <select
                    name="Status"
                    value={postData.Status || ""}
                    onChange={handleChange}
                    className="border-b p-2 text-xs w-full"
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