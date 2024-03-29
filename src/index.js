/**
 * Traction Tools API - V1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountabilityGroup', 'model/CreateHeadline', 'model/CreateIssue', 'model/CreateIssue_', 'model/CreateMeasurable', 'model/CreateMeeting', 'model/CreateMilestone', 'model/CreateNewQuarter', 'model/CreateRock', 'model/CreateRockModel_', 'model/CreateTodo', 'model/CreateTodo_', 'model/CreatedMeeting', 'model/Headline', 'model/Issue', 'model/IssuesList', 'model/LocalDateTime', 'model/Measurable', 'model/MeasurableOrder', 'model/Meeting', 'model/MeetingNotes', 'model/Milestone', 'model/NameId', 'model/Page', 'model/PermissionDto', 'model/Picture', 'model/Position', 'model/Rock', 'model/Role', 'model/RoleGroup', 'model/Score', 'model/Scorecard', 'model/SearchResult', 'model/Seat', 'model/Settings', 'model/Team', 'model/Title', 'model/Todo', 'model/UpdateIssue', 'model/UpdateIssueModelCompletion', 'model/UpdateMeasurable', 'model/UpdateMilestone', 'model/UpdateRock', 'model/UpdateScore', 'model/UpdateTodo', 'model/User', 'model/Week', 'api/HeadlinesApi', 'api/IssuesApi', 'api/L10Api', 'api/Measurables_Api', 'api/MilestonesApi', 'api/PositionApi', 'api/PostQuarterApi', 'api/RocksApi', 'api/RoleApi', 'api/ScorecardApi', 'api/Scores_Api', 'api/SearchApi', 'api/SeatsApi', 'api/TeamsApi', 'api/TodosApi', 'api/Users_Api', 'api/Week_Api'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountabilityGroup'), require('./model/CreateHeadline'), require('./model/CreateIssue'), require('./model/CreateIssue_'), require('./model/CreateMeasurable'), require('./model/CreateMeeting'), require('./model/CreateMilestone'), require('./model/CreateNewQuarter'), require('./model/CreateRock'), require('./model/CreateRockModel_'), require('./model/CreateTodo'), require('./model/CreateTodo_'), require('./model/CreatedMeeting'), require('./model/Headline'), require('./model/Issue'), require('./model/IssuesList'), require('./model/LocalDateTime'), require('./model/Measurable'), require('./model/MeasurableOrder'), require('./model/Meeting'), require('./model/MeetingNotes'), require('./model/Milestone'), require('./model/NameId'), require('./model/Page'), require('./model/PermissionDto'), require('./model/Picture'), require('./model/Position'), require('./model/Rock'), require('./model/Role'), require('./model/RoleGroup'), require('./model/Score'), require('./model/Scorecard'), require('./model/SearchResult'), require('./model/Seat'), require('./model/Settings'), require('./model/Team'), require('./model/Title'), require('./model/Todo'), require('./model/UpdateIssue'), require('./model/UpdateIssueModelCompletion'), require('./model/UpdateMeasurable'), require('./model/UpdateMilestone'), require('./model/UpdateRock'), require('./model/UpdateScore'), require('./model/UpdateTodo'), require('./model/User'), require('./model/Week'), require('./api/HeadlinesApi'), require('./api/IssuesApi'), require('./api/L10Api'), require('./api/Measurables_Api'), require('./api/MilestonesApi'), require('./api/PositionApi'), require('./api/PostQuarterApi'), require('./api/RocksApi'), require('./api/RoleApi'), require('./api/ScorecardApi'), require('./api/Scores_Api'), require('./api/SearchApi'), require('./api/SeatsApi'), require('./api/TeamsApi'), require('./api/TodosApi'), require('./api/Users_Api'), require('./api/Week_Api'));
  }
}(function(ApiClient, AccountabilityGroup, CreateHeadline, CreateIssue, CreateIssue_, CreateMeasurable, CreateMeeting, CreateMilestone, CreateNewQuarter, CreateRock, CreateRockModel_, CreateTodo, CreateTodo_, CreatedMeeting, Headline, Issue, IssuesList, LocalDateTime, Measurable, MeasurableOrder, Meeting, MeetingNotes, Milestone, NameId, Page, PermissionDto, Picture, Position, Rock, Role, RoleGroup, Score, Scorecard, SearchResult, Seat, Settings, Team, Title, Todo, UpdateIssue, UpdateIssueModelCompletion, UpdateMeasurable, UpdateMilestone, UpdateRock, UpdateScore, UpdateTodo, User, Week, HeadlinesApi, IssuesApi, L10Api, Measurables_Api, MilestonesApi, PositionApi, PostQuarterApi, RocksApi, RoleApi, ScorecardApi, Scores_Api, SearchApi, SeatsApi, TeamsApi, TodosApi, Users_Api, Week_Api) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var TractionToolsApiV1 = require('index'); // See note below*.
   * var xxxSvc = new TractionToolsApiV1.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new TractionToolsApiV1.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new TractionToolsApiV1.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new TractionToolsApiV1.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountabilityGroup model constructor.
     * @property {module:model/AccountabilityGroup}
     */
    AccountabilityGroup: AccountabilityGroup,
    /**
     * The CreateHeadline model constructor.
     * @property {module:model/CreateHeadline}
     */
    CreateHeadline: CreateHeadline,
    /**
     * The CreateIssue model constructor.
     * @property {module:model/CreateIssue}
     */
    CreateIssue: CreateIssue,
    /**
     * The CreateIssue_ model constructor.
     * @property {module:model/CreateIssue_}
     */
    CreateIssue_: CreateIssue_,
    /**
     * The CreateMeasurable model constructor.
     * @property {module:model/CreateMeasurable}
     */
    CreateMeasurable: CreateMeasurable,
    /**
     * The CreateMeeting model constructor.
     * @property {module:model/CreateMeeting}
     */
    CreateMeeting: CreateMeeting,
    /**
     * The CreateMilestone model constructor.
     * @property {module:model/CreateMilestone}
     */
    CreateMilestone: CreateMilestone,
    /**
     * The CreateNewQuarter model constructor.
     * @property {module:model/CreateNewQuarter}
     */
    CreateNewQuarter: CreateNewQuarter,
    /**
     * The CreateRock model constructor.
     * @property {module:model/CreateRock}
     */
    CreateRock: CreateRock,
    /**
     * The CreateRockModel_ model constructor.
     * @property {module:model/CreateRockModel_}
     */
    CreateRockModel_: CreateRockModel_,
    /**
     * The CreateTodo model constructor.
     * @property {module:model/CreateTodo}
     */
    CreateTodo: CreateTodo,
    /**
     * The CreateTodo_ model constructor.
     * @property {module:model/CreateTodo_}
     */
    CreateTodo_: CreateTodo_,
    /**
     * The CreatedMeeting model constructor.
     * @property {module:model/CreatedMeeting}
     */
    CreatedMeeting: CreatedMeeting,
    /**
     * The Headline model constructor.
     * @property {module:model/Headline}
     */
    Headline: Headline,
    /**
     * The Issue model constructor.
     * @property {module:model/Issue}
     */
    Issue: Issue,
    /**
     * The IssuesList model constructor.
     * @property {module:model/IssuesList}
     */
    IssuesList: IssuesList,
    /**
     * The LocalDateTime model constructor.
     * @property {module:model/LocalDateTime}
     */
    LocalDateTime: LocalDateTime,
    /**
     * The Measurable model constructor.
     * @property {module:model/Measurable}
     */
    Measurable: Measurable,
    /**
     * The MeasurableOrder model constructor.
     * @property {module:model/MeasurableOrder}
     */
    MeasurableOrder: MeasurableOrder,
    /**
     * The Meeting model constructor.
     * @property {module:model/Meeting}
     */
    Meeting: Meeting,
    /**
     * The MeetingNotes model constructor.
     * @property {module:model/MeetingNotes}
     */
    MeetingNotes: MeetingNotes,
    /**
     * The Milestone model constructor.
     * @property {module:model/Milestone}
     */
    Milestone: Milestone,
    /**
     * The NameId model constructor.
     * @property {module:model/NameId}
     */
    NameId: NameId,
    /**
     * The Page model constructor.
     * @property {module:model/Page}
     */
    Page: Page,
    /**
     * The PermissionDto model constructor.
     * @property {module:model/PermissionDto}
     */
    PermissionDto: PermissionDto,
    /**
     * The Picture model constructor.
     * @property {module:model/Picture}
     */
    Picture: Picture,
    /**
     * The Position model constructor.
     * @property {module:model/Position}
     */
    Position: Position,
    /**
     * The Rock model constructor.
     * @property {module:model/Rock}
     */
    Rock: Rock,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The RoleGroup model constructor.
     * @property {module:model/RoleGroup}
     */
    RoleGroup: RoleGroup,
    /**
     * The Score model constructor.
     * @property {module:model/Score}
     */
    Score: Score,
    /**
     * The Scorecard model constructor.
     * @property {module:model/Scorecard}
     */
    Scorecard: Scorecard,
    /**
     * The SearchResult model constructor.
     * @property {module:model/SearchResult}
     */
    SearchResult: SearchResult,
    /**
     * The Seat model constructor.
     * @property {module:model/Seat}
     */
    Seat: Seat,
    /**
     * The Settings model constructor.
     * @property {module:model/Settings}
     */
    Settings: Settings,
    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team: Team,
    /**
     * The Title model constructor.
     * @property {module:model/Title}
     */
    Title: Title,
    /**
     * The Todo model constructor.
     * @property {module:model/Todo}
     */
    Todo: Todo,
    /**
     * The UpdateIssue model constructor.
     * @property {module:model/UpdateIssue}
     */
    UpdateIssue: UpdateIssue,
    /**
     * The UpdateIssueModelCompletion model constructor.
     * @property {module:model/UpdateIssueModelCompletion}
     */
    UpdateIssueModelCompletion: UpdateIssueModelCompletion,
    /**
     * The UpdateMeasurable model constructor.
     * @property {module:model/UpdateMeasurable}
     */
    UpdateMeasurable: UpdateMeasurable,
    /**
     * The UpdateMilestone model constructor.
     * @property {module:model/UpdateMilestone}
     */
    UpdateMilestone: UpdateMilestone,
    /**
     * The UpdateRock model constructor.
     * @property {module:model/UpdateRock}
     */
    UpdateRock: UpdateRock,
    /**
     * The UpdateScore model constructor.
     * @property {module:model/UpdateScore}
     */
    UpdateScore: UpdateScore,
    /**
     * The UpdateTodo model constructor.
     * @property {module:model/UpdateTodo}
     */
    UpdateTodo: UpdateTodo,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The Week model constructor.
     * @property {module:model/Week}
     */
    Week: Week,
    /**
     * The HeadlinesApi service constructor.
     * @property {module:api/HeadlinesApi}
     */
    HeadlinesApi: HeadlinesApi,
    /**
     * The IssuesApi service constructor.
     * @property {module:api/IssuesApi}
     */
    IssuesApi: IssuesApi,
    /**
     * The L10Api service constructor.
     * @property {module:api/L10Api}
     */
    L10Api: L10Api,
    /**
     * The Measurables_Api service constructor.
     * @property {module:api/Measurables_Api}
     */
    Measurables_Api: Measurables_Api,
    /**
     * The MilestonesApi service constructor.
     * @property {module:api/MilestonesApi}
     */
    MilestonesApi: MilestonesApi,
    /**
     * The PositionApi service constructor.
     * @property {module:api/PositionApi}
     */
    PositionApi: PositionApi,
    /**
     * The PostQuarterApi service constructor.
     * @property {module:api/PostQuarterApi}
     */
    PostQuarterApi: PostQuarterApi,
    /**
     * The RocksApi service constructor.
     * @property {module:api/RocksApi}
     */
    RocksApi: RocksApi,
    /**
     * The RoleApi service constructor.
     * @property {module:api/RoleApi}
     */
    RoleApi: RoleApi,
    /**
     * The ScorecardApi service constructor.
     * @property {module:api/ScorecardApi}
     */
    ScorecardApi: ScorecardApi,
    /**
     * The Scores_Api service constructor.
     * @property {module:api/Scores_Api}
     */
    Scores_Api: Scores_Api,
    /**
     * The SearchApi service constructor.
     * @property {module:api/SearchApi}
     */
    SearchApi: SearchApi,
    /**
     * The SeatsApi service constructor.
     * @property {module:api/SeatsApi}
     */
    SeatsApi: SeatsApi,
    /**
     * The TeamsApi service constructor.
     * @property {module:api/TeamsApi}
     */
    TeamsApi: TeamsApi,
    /**
     * The TodosApi service constructor.
     * @property {module:api/TodosApi}
     */
    TodosApi: TodosApi,
    /**
     * The Users_Api service constructor.
     * @property {module:api/Users_Api}
     */
    Users_Api: Users_Api,
    /**
     * The Week_Api service constructor.
     * @property {module:api/Week_Api}
     */
    Week_Api: Week_Api
  };

  return exports;
}));
