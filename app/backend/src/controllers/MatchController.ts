import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  static async getMatches(req: Request, res: Response) {
    try {
      const matches = await MatchService.getMatches();
      return res.status(200).json(matches);
    } catch (error) {
      return res.status(500).json({ error: 'Failed' });
    }
  }
}