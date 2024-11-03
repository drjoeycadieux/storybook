import type { NextApiRequest, NextApiResponse } from "next";

interface Location {
  city: string;
  state: string;
}

interface Data {
  name: string;
  age: number;
  hobbies: string[];
  email: string;
  occupation: string;
  location: Location;
  skills: string[];
  isActive: boolean;
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  const responseData: Data = {
    name: "Joey Cadieux",
    age: 26,
    hobbies: ["reading", "traveling", "coding"],
    email: "joeycadieux161@gmail.com",
    occupation: "Junior Software Engineer",
    location: {
      city: "Montreal, QC",
      state: "CA",
    },
    skills: ["JavaScript", "TypeScript", "React", "Vue"],
    isActive: true,
  };



  res.status(200).json(responseData);
}