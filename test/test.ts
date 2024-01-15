import chai from "chai";
import { API } from '../src/paladins';
import { testData } from './data';

const { PALADINS_DEV_ID, PALADINS_API_KEY } = process.env;

let api: API;
let requestsMadeInitially: number = 0;

const expect = chai.expect;

describe('Tests for pe-paladins.js apis', () => {

  it("Create API for testing", () => {
    expect(PALADINS_DEV_ID).to.be.a("string");
    expect(PALADINS_API_KEY).to.be.a("string");

    api = new API({
      devId: PALADINS_DEV_ID as string,
      authKey: PALADINS_API_KEY as string,
    });
  });
  it("Test getDataUsage", async () => {
    const response = await api.getDataUsage();
    expect(response).to.be.a("object");
    expect(response).to.have.property("Total_Requests_Today");
    expect(response.Total_Requests_Today).to.have.be.a("number");
    expect(response.ret_msg).to.be.equal(null);

    requestsMadeInitially = response.Total_Requests_Today;
  });
  it("Test getChampionCards", async () => {
    const response = await api.getChampionCards(testData.getChampionCards);
    expect(response).to.be.a("array");
  });
  it("Test getPlayerChampionRanks", async () => {
    const response = await api.getPlayerChampionRanks(testData.getPlayerChampionRanks);
    expect(response).to.be.a("array");
  });
  it("Test getChampions", async () => {
    const response = await api.getChampions();
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getMatchIdsByQueue", async () => {
    const response = await api.getMatchIdsByQueue(...testData.getMatchIdsByQueue);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getChampionSkins", async () => {
    const response = await api.getChampionSkins(testData.getChampionSkins);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getItems", async () => {
    const response = await api.getItems();
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getPlayer", async () => {
    const response = await api.getPlayer(testData.getPlayer);
    expect(response).to.be.a("object");
    expect(response).to.not.be.equal(null);
    expect(response).to.have.property("Id");
    expect(response!.Id).to.be.equal(testData.getPlayer);
    expect(response!.ret_msg).to.be.equal(null);
  });
  it("Test getPlayerBatch", async () => {
    const response = await api.getPlayerBatch(testData.getPlayerBatch);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getPlayerRelationships", async () => {
    const response = await api.getPlayerRelationships(testData.getPlayerRelationships);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getPlayerLoadouts", async () => {
    const response = await api.getPlayerLoadouts(testData.getPlayerLoadouts);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getPlayerStatus", async () => {
    const response = await api.getPlayerStatus(testData.getPlayerStatus);
    expect(response).to.be.a("object");
    expect(response).to.have.property("status");
    expect(response.status).to.have.be.a("number");
    expect(response.ret_msg).to.be.equal(null);
  });
  it("Test getPlayerMatchHistory", async () => {
    const response = await api.getPlayerMatchHistory(testData.getPlayerMatchHistory);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getPlayerQueueStats", async () => {
    const response = await api.getPlayerQueueStats(...testData.getPlayerQueueStats);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getPlayerQueueStatsBatch", async () => {
    const response = await api.getPlayerQueueStatsBatch(...testData.getPlayerQueueStatsBatch);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getLeaderboard", async () => {
    const response = await api.getLeaderboard(testData.getLeaderboard);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getMatchDetailsBatch", async () => {
    const response = await api.getMatchDetailsBatch(testData.getMatchModeDetailsBatch);
    expect(response).to.be.a("array");
  });
  it("Test getMatchDetails", async () => {
    const response = await api.getMatchDetails(testData.getMatchDetails);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getActiveMatchDetails", async () => {
    const response = await api.getActiveMatchDetails(testData.getActiveMatchDetails);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test searchPlayers", async () => {
    const response = await api.searchPlayers(testData.searchPlayers);
    expect(response).to.be.a("array");
    expect(response).to.not.have.length.lessThanOrEqual(0);
  });
  it("Test getRequestsInfo", async () => {
    const response = await api.getRequestsInfo();
    expect(response.requestsLeft).to.be.a("number");
    expect(response.requestsMade).to.be.a("number");
    expect(response.requestsMade).to.be.equal(requestsMadeInitially + 19);
  });
});