import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from '../../../utils/sample-data';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    const {method} = req;

    if(!Array.isArray(sampleUserData)) {
        throw new Error('Cannot find user data')
    }

    if (method === 'GET') {
      res.status(200).json([sampleUserData, method])
    } else {
      res.status(405).json({ message: 'Metodo não suportado.' });
    }


  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'error' });
  }
};

export default handler;