/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from "src/utils/database";


export default async (req: NextApiRequest, res: NextApiResponse) => {

    const {method, body} = req;

    switch (method) {
        case 'GET':
            try {
              const query = "SELECT * FROM tasks2";
              const response = await conn.query(query);
              // throw new Error("something goes wrong");
              return res.status(200).json(response.rows);
            } catch (error: any) {
              return res.status(400).json({ error: error.message });
            }
        case 'POST':
          try {
            const { title, description } = body

            const query = 'INSERT INTO tasks2(title, description) VALUES ($1, $2) RETURNING *'
            const values = [title, description]
            
            const response = await conn.query(query, values)
            throw new Error("something goes wrong");
            return res.json(response.rows[0]);

          } catch(error:any) {
            return res.status(400).json({ error: error.message });
          }

        default:
            return res.status(400).json('method not allowed')

    }
};

