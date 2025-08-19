import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/MongoDB";

export default async function createProduct(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") 
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  try {
    const db = await connectToDatabase();
    const activitiesCollection = db.collection("Activities");
    const customerCollection = db.collection("CustomerDatabase");

    const {
      ActivityID,
      CompanyName,
      Project,
      Email,
      ContactPerson,
      ContactNumber,
      Address,
      Category,
      Type,
      Status,
      Source,
      createdBy
    } = req.body;

    if (!CompanyName) {
      return res.status(400).json({ error: "Missing required fields: name of the company." });
    }

    const activityData = {
      ActivityID,
      CompanyName,
      Project,
      Email,
      ContactPerson,
      ContactNumber,
      Address,
      Category,
      Type,
      Source,
      Status,
      createdBy,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Insert into Tickets
    const { insertedId: ticketId } = await activitiesCollection.insertOne(activityData);

    // Insert selected fields into Accounts
    const customerData = {
      CompanyName,
      ContactNumber,
      Email,
      Address,
      ContactPerson,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await customerCollection.insertOne(customerData);

    res.status(201).json({ message: "Data created in Tickets and Accounts", ticketId });
  } catch (error) {
    console.error("Create post error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}