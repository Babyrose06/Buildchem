import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/MongoDB";
import { ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const db = await connectToDatabase();
    const activitiesCollection = db.collection("Activities");
    const progressCollection = db.collection("Progress");

    // Kunin lahat mula sa body (hindi sa query)
    const body = req.body;
    const id = body.id || req.query.id;
    if (!id) {
      return res.status(400).json({ error: "Missing 'id'" });
    }

    // Normalize field names para kahit anong variation gumana
    const ActivityID =
      body.ActivityID ??
      null;

    const CompanyName =
      body.CompanyName ??
      null;

    const Project =
      body.Project ??
      null;

    const Email =
      body.Email ??
      null;

    const ContactPerson =
      body.ContactPerson ??
      null;

    const Address =
      body.Address ??
      null;

    const ContactNumber =
      body.ContactNumber ??
      null;

    const QuotationAmount =
      body.QuotationAmount ??
      null;

    const SOAmount =
      body.SOAmount ??
      null;

    const Category =
      body.Category ??
      null;

    const Type =
      body.Type ??
      null;

    const Source =
      body.Source ??
      null;

    const Status =
      body.Status ??
      null;

    // Prepare fields for Activities update
    const updateFields = { ...body };
    delete updateFields._id;
    delete updateFields.id;

    const result = await activitiesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateFields, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Activity not found" });
    }

    // Insert sa Progress kung may laman
    if (QuotationAmount !== null || SOAmount !== null) {
      const progressData = {
        ActivityID, CompanyName, Project, ContactPerson, Email, Address, ContactNumber, QuotationAmount, SOAmount, Category, Type, Source, Status,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await progressCollection.insertOne(progressData);
    }

    res.status(200).json({ message: "Post updated successfully", result });
  } catch (error) {
    console.error("Edit error:", error);
    res.status(500).json({ error: "Failed to update post" });
  }
}