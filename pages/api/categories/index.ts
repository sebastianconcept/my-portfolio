import { NextApiRequest, NextApiResponse } from 'next'
import { categories } from '../../../utils/basic-data'

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(categories)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(categories)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
