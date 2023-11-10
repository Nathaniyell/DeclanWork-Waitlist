  
import fetch from "node-fetch"
  export default async function handler(req, res) {
    const { firstName, lastName, email } = JSON.parse(req.body);
  
    if (!email || !firstName || !lastName) {
      return res.status(400).json({ error: "Missing Fields" });
    }
  
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const request = await fetch("https://api.airtable.com/v0/appBSlJgneh66juRc/Waitlist", {
        method: "POST",
        headers:{
            Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
            "Content-Type": "application/json"
        },
        body:JSON.stringify({fields: {firstName, lastName, email}})
    });
  }
  