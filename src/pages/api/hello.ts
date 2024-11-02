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
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "traveling", "coding"],
    email: "johndoe@example.com",
    occupation: "Software Developer",
    location: {
      city: "San Francisco",
      state: "CA",
    },
    skills: ["JavaScript", "TypeScript", "React"],
    isActive: true,
  };



  res.status(200).json(responseData);
}
