interface Request {
    body: string;
    method: string;
  }
  
  interface Response {
    json: (data: any) => void;
    status: (code: number) => void;
  }
  

  export default async function handler(req: Request, res: Response): Promise<void> {
    const { firstName, lastName, email }: {
      firstName: string;
      lastName: string;
      email: string;
    } = JSON.parse(req.body);
  
    if (!email || !firstName || !lastName) {
      return res.status(400).json({ error: "Missing Fields" });
    }
  
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const request = await fetch();
  }
  