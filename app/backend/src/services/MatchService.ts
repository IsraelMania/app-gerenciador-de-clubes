import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';

export default class MatchService {
  static async getMatches() {
    return Match.findAll({
      include: [
        {
          model: Team,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: Team,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
  }
}