import axios from 'axios';
import md5 from 'md5';
import moment from 'moment';
import * as ApiResponse from './util/apiResponse';

export class API {
    private serviceUrl: string = 'https://api.paladins.com/paladinsapi.svc';
    private sessionCache: { [key: string]: any; } = {};
    private totalRequestsMade: number | null = null;
    private totalRequests: number | null = null;

    constructor(private options: {
        devId: string;
        authKey: string;
        languageId?: number;
    }) {
        this.options = { languageId: 1, ...options };
        this.setSession();
    }

    /**
     * Get the number of requests made and requests left from your 
     * data usage this method initially makes a `getDataUsage` call to 
     * paladins API internally to know your initial request count
     */
    public async getRequestsInfo(): Promise<ApiResponse.GetRequestsInfo> {
        if (this.totalRequestsMade === null || this.totalRequests === null) {
            // get data usage from paladins API
            const response = await this.getDataUsage();

            this.totalRequestsMade = response.Total_Requests_Today;
            this.totalRequests = response.Request_Limit_Daily - this.totalRequestsMade;
        }

        return {
            requestsMade: this.totalRequestsMade,
            requestsLeft: this.totalRequests - this.totalRequestsMade,
            totalRequests: this.totalRequests
        };
    }

    /**
     * Get match ids for a queue on the given hour and date.
     * 
     * `date` in YYYYMMDD format eg. 20210207
     * 
     * `hour` in 24H format 0-23 eg. 4 or 12 or 23
     */
    public async getMatchIdsByQueue(hour: string, date: string, queue: number) {
        const session = await this.getSession();
        const url = `${this.serviceUrl}/getmatchidsbyqueueJson/${this.options['devId']}/${this.getSignature('getmatchidsbyqueue')}/${session}/${this.getTimestamp()}/${queue}/${date}/${hour}`;

        const { data } = await axios.get<ApiResponse.GetMatchIDSByQueue>(url);
        if (this.totalRequestsMade) this.totalRequestsMade++;

        return data;
    }

    /**
     * Get all the champions currently in the game.
     */
    public getChampions() {
        return this.endpoint<ApiResponse.GetChampions>('getchampions', [null, this.options['languageId']]);
    }

    /**
     * Get the cards for the requested champion.
     */
    public getChampionCards(championId: number) {
        return this.endpoint<ApiResponse.GetChampionCards>('getchampioncards', [null, this.options['languageId'], null, championId]);
    }

    /**
     * Get all the skins associated with the champion.
     */
    public getChampionSkins(championId: number) {
        return this.endpoint<ApiResponse.GetChampionSkins>('getchampionskins', [null, this.options['languageId'], null, championId]);
    }

    /**
     * Get all the items available for purchase in the game.
     * Also gets the cards and talents for all champions
     */
    public getItems() {
        return this.endpoint<ApiResponse.GetItems>('getitems', [null, this.options['languageId']]);
    }

    /**
     * Get a player and their details.
     */
    public async getPlayer(playerId: number): Promise<ApiResponse.GetPlayer | null> {
        const data = await this.endpoint<ApiResponse.GetPlayer[]>('getplayer', [playerId]);
        const player = data[0];
        if (!player) return null;
        return player;
    }

    /**
     * Get player information for a batch of players.
     *
     * @param {number[]} playerIds
     * @returns {Promise<ApiResponse.GetPlayerBatch>}
     * @memberof API
     */
    public getPlayerBatch(playerIds: number[]) {
        return this.endpoint<ApiResponse.GetPlayerBatch>('getplayerbatch', [playerIds.join(',')]);
    }

    /**
     * Get all the relationships for the requested player, includes both blocked and friends.
     *
     * @param {number} playerId
     * @returns {Promise<ApiResponse.GetPlayerRelationships>}
     * @memberof API
     */
    public getPlayerRelationships(playerId: number) {
        return this.endpoint<ApiResponse.GetPlayerRelationships>('getfriends', [playerId]);
    }

    /**
     * Get all the champion ranks for the requested player.
     *
     * @param {number} playerId
     * @returns {Promise<ApiResponse.GetPlayerChampionRanks>}
     * @memberof API
     */
    public getPlayerChampionRanks(playerId: number) {
        return this.endpoint<ApiResponse.GetPlayerChampionRanks>('getchampionranks', [playerId]);
    }

    /**
     * Get all the champion loadouts for the requested player.
     *
     * @param {number} playerId
     * @returns {Promise<ApiResponse.GetPlayerLoadouts>}
     * @memberof API
     */
    public getPlayerLoadouts(playerId: number) {
        return this.endpoint<ApiResponse.GetPlayerLoadouts>('getplayerloadouts', [playerId, this.options['languageId']]);
    }

    /**
     * Get the current status of the player.
     *
     * @param {number} playerId
     * @returns {Promise<ApiResponse.GetPlayerStatus>}
     * @memberof API
     */
    public getPlayerStatus(playerId: number): Promise<ApiResponse.GetPlayerStatus> {
        return this.endpoint<ApiResponse.GetPlayerStatus>('getplayerstatus', [playerId], true);
    }

    /**
     * Get the match history of the requested player.
     *
     * @param {number} playerId
     * @returns {Promise<ApiResponse.GetPlayerMatchHistory>}
     * @memberof API
     */
    public getPlayerMatchHistory(playerId: number): Promise<ApiResponse.GetPlayerMatchHistory> {
        return this.endpoint<ApiResponse.GetPlayerMatchHistory>('getmatchhistory', [playerId]);
    }

    /**
     * Get the queue stats of a player.
     */
    public getPlayerQueueStats(playerId: number, queueId: number) {
        return this.endpoint<ApiResponse.GetPlayerQueueStats>('getqueuestats', [playerId, null, null, null, queueId]);
    }

    /**
     * Get details of multiple matches
     */
    public async getMatchDetailsBatch(matchIds: number[]): Promise<ApiResponse.GetMatchDetailsBatch> {
        return this.endpoint<ApiResponse.GetMatchDetailsBatch>('getmatchdetailsbatch', [matchIds.join(',')]);
    }

    /**
     * Get match details from an ended match.
     * 
     * NOTE: ids of cards, talents returned by this api
     * are obtained from `getItems` api instead of 
     * `getChampionCards` api
     */
    public getMatchDetails(matchId: number) {
        return this.endpoint<ApiResponse.GetMatchDetails>('getmatchdetails', [null, null, matchId]);
    }

    /**
     * Get basic info for a live, active match.
     */
    public getActiveMatchDetails(matchId: number) {
        return this.endpoint<ApiResponse.GetActiveMatchDetails>('getmatchplayerdetails', [null, null, matchId]);
    }

    /**
     * Get all the current bounty store info.
     */
    public getBountyItems() {
        return this.endpoint<ApiResponse.GetBountyItems>('getbountyitems', [], false);
    }

    /**
     * Get the current data usage.
     */
    public async getDataUsage(): Promise<ApiResponse.GetDataUsage> {
        const data: ApiResponse.GetDataUsage | ApiResponse.GetDataUsage[] = await this.endpoint('getdataused', [], true);

        let response: ApiResponse.GetDataUsage;
        if (data.constructor === Array) {
            response = data[0] as ApiResponse.GetDataUsage;
        } else {
            response = data as ApiResponse.GetDataUsage;
        }

        this.totalRequests = response.Request_Limit_Daily;
        this.totalRequestsMade = response.Total_Requests_Today;

        return response;
    }

    /**
     * Gets the search results from the player name
     */
    public searchPlayers(name: string) {
        return this.endpoint<ApiResponse.SearchPlayers>('searchplayers', [name]);
    }


    private async endpoint<T>(endpoint: string, args: Array<any>, returnFirstElement: boolean = false): Promise<T> {
        let fArgs = <any>[endpoint].concat(args);
        let url = await this.buildUrl.apply(this, fArgs);

        const { data } = await axios.get(url);
        if (this.totalRequestsMade) this.totalRequestsMade++;

        if (data.length > 0 && data[0]['ret_msg'] != null && data[0]['ret_msg'].toLowerCase() == 'invalid session id.') {
            await this.setSession();
            return this.endpoint(endpoint, args);
        }
        if (returnFirstElement && data.length > 0) {
            return data[0];
        }
        return data;
    }


    private getTimestamp() {
        return moment().utc().format('YYYYMMDDHHmmss');
    }


    private getSignature(method: string) {
        return md5(`${this.options['devId']}${method}${this.options['authKey']}${this.getTimestamp()}`);
    }


    private async setSession(): Promise<string> {
        const url = `${this.serviceUrl}/createsessionJson/${this.options['devId']}/${this.getSignature('createsession')}/${this.getTimestamp()}`;
        const { data } = await axios.get(url);
        if (this.totalRequestsMade) this.totalRequestsMade++;

        if (data['ret_msg'].indexOf('Exception while validating developer access') > -1) {
            throw new Error('Invalid developer id/auth key.');
        }

        this.sessionCache = {
            sessionId: data['session_id'],
            createdAt: this.getTimestamp(),
            data
        };

        return this.sessionCache['sessionId'];
    }


    private async getSession(): Promise<string> {
        if (!this.sessionCache['sessionId']) {
            return await this.setSession();
        }

        return this.sessionCache['sessionId'];
    }


    private async buildUrl(method: string, player?: any, lang?: number, matchId?: number, champId?: number, queue?: number, tier?: number, season?: number, platform?: number) {
        let session = await this.getSession();
        let baseUrl = `${this.serviceUrl}/${method}Json/${this.options['devId']}/${this.getSignature(method)}/${session}/${this.getTimestamp()}`;

        if (platform) baseUrl += `/${platform}`;
        if (player) baseUrl += `/${player}`;
        if (champId) baseUrl += `/${champId}`;
        if (lang) baseUrl += `/${lang}`;
        if (matchId) baseUrl += `/${matchId}`;
        if (queue) baseUrl += `/${queue}`;
        if (tier) baseUrl += `/${tier}`;
        if (season) baseUrl += `/${season}`;

        return baseUrl;
    }
}