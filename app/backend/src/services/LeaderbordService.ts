import MatchService from "./MatchService";

export default class LeaderbordService {
  static async getLeaderboard() {
    const generalMatches = await MatchService.getMatchesNotInProgress();
    return generalMatches;
  }
}
