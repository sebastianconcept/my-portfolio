import { NextApiRequest, NextApiResponse } from 'next'
import { operations } from '../../../utils/basic-data'

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(operations)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(operations)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
