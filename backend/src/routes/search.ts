import express, { Request, Response } from 'express';
import { Hotel } from '../models'; // Adjust the path if necessary

const searchRouter = express.Router();

interface SearchQuery {
  type?: string;
  facilities?: string;
  adults?: string;
  children?: string;
  country?: string;
  city?: string;
  date?: string;
}

searchRouter.get('/', async (req: Request<{}, {}, {}, SearchQuery>, res: Response) => {
  try {
    const { type, facilities, adults, children, country, city, date } = req.query;
    const filters: Record<string, any> = {};

    if (type) {
      filters.type = { $in: type.split(',') };
    }

    if (facilities) {
      filters.facilities = { $all: facilities.split(',') };
    }

    if (adults) {
      const adultsNum = Number(adults);
      if (!isNaN(adultsNum)) {
        filters.adults = { $gte: adultsNum };
      }
    }

    if (children) {
      const childrenNum = Number(children);
      if (!isNaN(childrenNum)) {
        filters.children = { $gte: childrenNum };
      }
    }

    if (country) {
      filters.country = country;
    }

    if (city) {
      filters.city = city;
    }

    if (date) {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        filters.lastUpdated = { $gte: parsedDate };
      }
    }

    const hotels = await Hotel.find(filters);
    console.log('Hotels:', hotels);
    res.status(200).json(hotels);
  } catch (error) {
    console.error('Error fetching hotels:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default searchRouter;
