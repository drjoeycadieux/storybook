import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  age: number;
  hobbies: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  const responseData: Data = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "traveling", "coding"]
  };

  res.status(200).json(responseData);
}
