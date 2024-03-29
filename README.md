# tractiontools_api_v1

TractionToolsApiV1 - JavaScript client for traction_tools_api___v1
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: v1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install traction_tools_api___v1 --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your traction_tools_api___v1 from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('traction_tools_api___v1')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var api = new TractionToolsApiV1.HeadlinesApi()

var HEADLINE_ID = 789; // {Number} People headline ID

var opts = { 
  'includeOrigin': true, // {Boolean} 
  'includePermission': true // {Boolean} Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.headlinesGetHeadline(HEADLINE_ID, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://tt-devs.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TractionToolsApiV1.HeadlinesApi* | [**headlinesGetHeadline**](docs/HeadlinesApi.md#headlinesGetHeadline) | **GET** /api/v1/headline/{HEADLINE_ID} | Get a specific people headline
*TractionToolsApiV1.HeadlinesApi* | [**headlinesGetMineHeadlines**](docs/HeadlinesApi.md#headlinesGetMineHeadlines) | **GET** /api/v1/headline/users/mine | Get headlines you own
*TractionToolsApiV1.HeadlinesApi* | [**headlinesGetUserHeadlines**](docs/HeadlinesApi.md#headlinesGetUserHeadlines) | **GET** /api/v1/headline/users/{USER_ID} | Get all headlines owned by a user.
*TractionToolsApiV1.HeadlinesApi* | [**headlinesRemoveHeadlines**](docs/HeadlinesApi.md#headlinesRemoveHeadlines) | **DELETE** /api/v1/headline/{HEADLINE_ID} | Delete a people headline
*TractionToolsApiV1.HeadlinesApi* | [**headlinesUpdateHeadlines**](docs/HeadlinesApi.md#headlinesUpdateHeadlines) | **PUT** /api/v1/headline/{HEADLINE_ID} | Update a People Headline
*TractionToolsApiV1.IssuesApi* | [**issuesComplete**](docs/IssuesApi.md#issuesComplete) | **POST** /api/v1/issues/{ISSUE_ID}/complete | Mark issue as completed
*TractionToolsApiV1.IssuesApi* | [**issuesCreateIssue**](docs/IssuesApi.md#issuesCreateIssue) | **POST** /api/v1/issues/create | Create a new issue in for a Level 10
*TractionToolsApiV1.IssuesApi* | [**issuesEditIssue**](docs/IssuesApi.md#issuesEditIssue) | **PUT** /api/v1/issues/{ISSUE_ID} | Update an issue
*TractionToolsApiV1.IssuesApi* | [**issuesGet**](docs/IssuesApi.md#issuesGet) | **GET** /api/v1/issues/{ISSUE_ID} | Get a specific issue
*TractionToolsApiV1.IssuesApi* | [**issuesGetMineIssues**](docs/IssuesApi.md#issuesGetMineIssues) | **GET** /api/v1/issues/users/mine | Get all issues you own.
*TractionToolsApiV1.IssuesApi* | [**issuesGetUserIssues**](docs/IssuesApi.md#issuesGetUserIssues) | **GET** /api/v1/issues/users/{USER_ID} | Get all issues owned by a user.
*TractionToolsApiV1.IssuesApi* | [**issuesMoveFromVto**](docs/IssuesApi.md#issuesMoveFromVto) | **POST** /api/v1/issues/{ISSUE_ID}/movefromvto | Move issue from VTO
*TractionToolsApiV1.IssuesApi* | [**issuesMoveToMeeting**](docs/IssuesApi.md#issuesMoveToMeeting) | **POST** /api/v1/issues/{ISSUE_ID}/movetomeeting/{MEETING_ID} | Move issue to another meeting
*TractionToolsApiV1.IssuesApi* | [**issuesMoveToVto**](docs/IssuesApi.md#issuesMoveToVto) | **POST** /api/v1/issues/{ISSUE_ID}/movetovto | Move issue to VTO
*TractionToolsApiV1.L10Api* | [**l10AddAttendee**](docs/L10Api.md#l10AddAttendee) | **POST** /api/v1/L10/{MEETING_ID}/attendees/{USER_ID} | Add an existing user to a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10AttachMeasurableL10**](docs/L10Api.md#l10AttachMeasurableL10) | **POST** /api/v1/L10/{MEETING_ID}/measurables/{MEASURABLE_ID} | Add an existing scorecard measurable to a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10AttachRockMeetingL10**](docs/L10Api.md#l10AttachRockMeetingL10) | **POST** /api/v1/L10/{MEETING_ID}/rocks/{ROCK_ID} | Add an existing rock to a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10CreateHeadlineL10**](docs/L10Api.md#l10CreateHeadlineL10) | **POST** /api/v1/L10/{MEETING_ID}/headlines | Create a people headline for a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10CreateIssueL10**](docs/L10Api.md#l10CreateIssueL10) | **POST** /api/v1/L10/{MEETING_ID}/issues | Add an issue to a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10CreateL10**](docs/L10Api.md#l10CreateL10) | **POST** /api/v1/L10/create | Create a new Level 10 meeting.
*TractionToolsApiV1.L10Api* | [**l10CreateRockL10**](docs/L10Api.md#l10CreateRockL10) | **POST** /api/v1/L10/{MEETING_ID}/rocks | Create a new rock and move it to L10 meeting
*TractionToolsApiV1.L10Api* | [**l10CreateTodoL10**](docs/L10Api.md#l10CreateTodoL10) | **POST** /api/v1/L10/{MEETING_ID}/todos | Add a to-do to a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10EditL10**](docs/L10Api.md#l10EditL10) | **PUT** /api/v1/L10/{MEETING_ID} | Update a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10GetL10**](docs/L10Api.md#l10GetL10) | **GET** /api/v1/L10/{MEETING_ID} | Get information about a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10GetL10Attendees**](docs/L10Api.md#l10GetL10Attendees) | **GET** /api/v1/L10/{MEETING_ID}/attendees | Get a list of attendees
*TractionToolsApiV1.L10Api* | [**l10GetL10List**](docs/L10Api.md#l10GetL10List) | **GET** /api/v1/L10/list | Get a list of Level 10 meetings
*TractionToolsApiV1.L10Api* | [**l10GetL10Rocks**](docs/L10Api.md#l10GetL10Rocks) | **GET** /api/v1/L10/{MEETING_ID}/rocks | Get list of L10 rocks
*TractionToolsApiV1.L10Api* | [**l10GetRecurrenceHeadlines**](docs/L10Api.md#l10GetRecurrenceHeadlines) | **GET** /api/v1/l10/{MEETING_ID}/headlines | Get a list of people headlines in a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10GetRecurrenceIssues**](docs/L10Api.md#l10GetRecurrenceIssues) | **GET** /api/v1/l10/{MEETING_ID}/issues | Get a list of issues for a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10GetRecurrenceTodos**](docs/L10Api.md#l10GetRecurrenceTodos) | **GET** /api/v1/l10/{MEETING_ID}/todos | Get a list of to-dos in a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10GetUserHeadlines**](docs/L10Api.md#l10GetUserHeadlines) | **GET** /api/v1/l10/{MEETING_ID}/users/{USER_ID}/headlines | Get a list of headlines in a Level 10 meeting for a particular user
*TractionToolsApiV1.L10Api* | [**l10GetUserIssues**](docs/L10Api.md#l10GetUserIssues) | **GET** /api/v1/l10/{MEETING_ID}/users/{USER_ID}/issues | Get a list of issues in a Level 10 meeting for a particular user
*TractionToolsApiV1.L10Api* | [**l10GetUserL10List**](docs/L10Api.md#l10GetUserL10List) | **GET** /api/v1/L10/{USER_ID}/list | Get list of L10 meetings attended by a particular user
*TractionToolsApiV1.L10Api* | [**l10GetUserMeasurables**](docs/L10Api.md#l10GetUserMeasurables) | **GET** /api/v1/l10/{MEETING_ID}/users/{USER_ID}/measurables | Get a list of measurables in a Level 10 meeting for a particular user
*TractionToolsApiV1.L10Api* | [**l10GetUserRocks**](docs/L10Api.md#l10GetUserRocks) | **GET** /api/v1/l10/{MEETING_ID}/users/{USER_ID}/rocks | Get a list of rocks in a Level 10 meeting for a particular user
*TractionToolsApiV1.L10Api* | [**l10GetUserTodos**](docs/L10Api.md#l10GetUserTodos) | **GET** /api/v1/l10/{MEETING_ID}/users/{USER_ID}/todos | Get a list of todos in a Level 10 meeting for a particular user
*TractionToolsApiV1.L10Api* | [**l10RemoveHeadlineL10**](docs/L10Api.md#l10RemoveHeadlineL10) | **DELETE** /api/v1/L10/{MEETING_ID}/headlines/{HEADLINE_ID} | Remove a headline from a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10RemoveIssueL10**](docs/L10Api.md#l10RemoveIssueL10) | **DELETE** /api/v1/L10/{MEETING_ID}/issues/{ISSUE_ID} | Remove an issue from a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10RemoveL10**](docs/L10Api.md#l10RemoveL10) | **DELETE** /api/v1/L10/{MEETING_ID} | Delete a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10RemoveMeasurableL10**](docs/L10Api.md#l10RemoveMeasurableL10) | **DELETE** /api/v1/L10/{MEETING_ID}/measurables/{MEASURABLE_ID} | Remove a scorecard measurable from a Level 10 meeting
*TractionToolsApiV1.L10Api* | [**l10RemoveRockL10**](docs/L10Api.md#l10RemoveRockL10) | **DELETE** /api/v1/L10/{MEETING_ID}/rocks/{ROCK_ID} | Remove a rock from a Level 10 meeting
*TractionToolsApiV1.Measurables_Api* | [**measurablesCreateMeasurable**](docs/Measurables_Api.md#measurablesCreateMeasurable) | **POST** /api/v1/measurables/create | Create a new measurable
*TractionToolsApiV1.Measurables_Api* | [**measurablesGet**](docs/Measurables_Api.md#measurablesGet) | **GET** /api/v1/measurables/{MEASURABLE_ID} | Get a measurable
*TractionToolsApiV1.Measurables_Api* | [**measurablesGetMeasurableScores**](docs/Measurables_Api.md#measurablesGetMeasurableScores) | **GET** /api/v1/measurables/{MEASURABLE_ID}/scores | Get scores for a particular measurable
*TractionToolsApiV1.Measurables_Api* | [**measurablesGetMineMeasureables**](docs/Measurables_Api.md#measurablesGetMineMeasureables) | **GET** /api/v1/measurables/user/mine | Get measurables that you own
*TractionToolsApiV1.Measurables_Api* | [**measurablesGetUserMeasureables**](docs/Measurables_Api.md#measurablesGetUserMeasureables) | **GET** /api/v1/measurables/user/{USER_ID} | Get measurables for a particular user
*TractionToolsApiV1.Measurables_Api* | [**measurablesUpdateMeasurable**](docs/Measurables_Api.md#measurablesUpdateMeasurable) | **PUT** /api/v1/measurables/{MEASURABLE_ID} | Update a measureable
*TractionToolsApiV1.Measurables_Api* | [**measurablesUpdateScore**](docs/Measurables_Api.md#measurablesUpdateScore) | **PUT** /api/v1/measurables/{MEASURABLE_ID}/week/{WEEK_ID} | Update a score for a particular measureable
*TractionToolsApiV1.MilestonesApi* | [**milestonesGetMilestones**](docs/MilestonesApi.md#milestonesGetMilestones) | **GET** /api/v1/milestones/{MILESTONE_ID} | Get a particular milestone
*TractionToolsApiV1.MilestonesApi* | [**milestonesRemoveMilestones**](docs/MilestonesApi.md#milestonesRemoveMilestones) | **DELETE** /api/v1/milestones/{MILESTONE_ID} | Delete a milestone
*TractionToolsApiV1.MilestonesApi* | [**milestonesUpdateMilestones**](docs/MilestonesApi.md#milestonesUpdateMilestones) | **PUT** /api/v1/milestones/{MILESTONE_ID} | Update a milestone
*TractionToolsApiV1.PositionApi* | [**positionAddPositionRoles**](docs/PositionApi.md#positionAddPositionRoles) | **POST** /api/v1/positions/{POSITION_ID}/roles | Create a role for a position
*TractionToolsApiV1.PositionApi* | [**positionCreatePosition**](docs/PositionApi.md#positionCreatePosition) | **POST** /api/v1/positions/create | Create a new position
*TractionToolsApiV1.PositionApi* | [**positionGetMinePosition**](docs/PositionApi.md#positionGetMinePosition) | **GET** /api/v1/positions/mine | List all your positions at the organization
*TractionToolsApiV1.PositionApi* | [**positionGetPositionRoles**](docs/PositionApi.md#positionGetPositionRoles) | **GET** /api/v1/positions/{POSITION_ID}/roles | Get a list of roles for a particular position
*TractionToolsApiV1.PositionApi* | [**positionGetPositions**](docs/PositionApi.md#positionGetPositions) | **GET** /api/v1/positions/{POSITION_ID} | Get a particular position
*TractionToolsApiV1.PositionApi* | [**positionUpdatePositions**](docs/PositionApi.md#positionUpdatePositions) | **PUT** /api/v1/positions/{POSITION_ID} | Update a position
*TractionToolsApiV1.PostQuarterApi* | [**postQuarterCreate**](docs/PostQuarterApi.md#postQuarterCreate) | **POST** /api/v1/postquarter/create | Create a new post quarter
*TractionToolsApiV1.RocksApi* | [**rocksAddRocksMilestones**](docs/RocksApi.md#rocksAddRocksMilestones) | **POST** /api/v1/rocks/{ROCK_ID}/milestones | Add a milestone to a particular rock
*TractionToolsApiV1.RocksApi* | [**rocksArchiveRock**](docs/RocksApi.md#rocksArchiveRock) | **PUT** /api/v1/rocks/{ROCK_ID}/archive | Archive the rock
*TractionToolsApiV1.RocksApi* | [**rocksCreateRock**](docs/RocksApi.md#rocksCreateRock) | **POST** /api/v1/rocks/create | Create a new rock
*TractionToolsApiV1.RocksApi* | [**rocksDeleteRocks**](docs/RocksApi.md#rocksDeleteRocks) | **DELETE** /api/v1/rocks/{ROCK_ID} | Delete a rock
*TractionToolsApiV1.RocksApi* | [**rocksGetArchivedRocksForUser**](docs/RocksApi.md#rocksGetArchivedRocksForUser) | **GET** /api/v1/archivedrocks/user/{USER_ID} | Get a list of archived rocks for a user
*TractionToolsApiV1.RocksApi* | [**rocksGetRock**](docs/RocksApi.md#rocksGetRock) | **GET** /api/v1/rocks/{ROCK_ID} | Get a specific rock
*TractionToolsApiV1.RocksApi* | [**rocksGetRocksForUser**](docs/RocksApi.md#rocksGetRocksForUser) | **GET** /api/v1/rocks/user/{USER_ID} | Get a list of rocks for a user
*TractionToolsApiV1.RocksApi* | [**rocksGetRocksMilestones**](docs/RocksApi.md#rocksGetRocksMilestones) | **GET** /api/v1/rocks/{ROCK_ID}/milestones | Get milestones for a particular rock
*TractionToolsApiV1.RocksApi* | [**rocksGetYourArchivedRocks**](docs/RocksApi.md#rocksGetYourArchivedRocks) | **GET** /api/v1/archivedrocks/user/mine | Get a list of your archived rocks
*TractionToolsApiV1.RocksApi* | [**rocksGetYourRocks**](docs/RocksApi.md#rocksGetYourRocks) | **GET** /api/v1/rocks/user/mine | Get a list of your rocks
*TractionToolsApiV1.RocksApi* | [**rocksRestoreRock**](docs/RocksApi.md#rocksRestoreRock) | **PUT** /api/v1/rocks/{ROCK_ID}/restore | Restore a rock from the archive
*TractionToolsApiV1.RocksApi* | [**rocksUpdateRocks**](docs/RocksApi.md#rocksUpdateRocks) | **PUT** /api/v1/rocks/{ROCK_ID} | Update a rock
*TractionToolsApiV1.RoleApi* | [**roleGetRoles**](docs/RoleApi.md#roleGetRoles) | **GET** /api/v1/role/{ROLE_ID} | Get a particular role
*TractionToolsApiV1.RoleApi* | [**roleRemoveRoles**](docs/RoleApi.md#roleRemoveRoles) | **DELETE** /api/v1/role/{ROLE_ID} | Remove a role from a position
*TractionToolsApiV1.RoleApi* | [**roleUpdateRoles**](docs/RoleApi.md#roleUpdateRoles) | **PUT** /api/v1/role/{ROLE_ID} | Update a role
*TractionToolsApiV1.ScorecardApi* | [**scorecardGetMeasureablesForUser**](docs/ScorecardApi.md#scorecardGetMeasureablesForUser) | **GET** /api/v1/scorecard/user/{USER_ID} | 
*TractionToolsApiV1.ScorecardApi* | [**scorecardGetMineMeasureables**](docs/ScorecardApi.md#scorecardGetMineMeasureables) | **GET** /api/v1/scorecard/user/mine | 
*TractionToolsApiV1.ScorecardApi* | [**scorecardGetScorecardForMeeting**](docs/ScorecardApi.md#scorecardGetScorecardForMeeting) | **GET** /api/v1/scorecard/meeting/{MEETING_ID} | 
*TractionToolsApiV1.Scores_Api* | [**scoresGet**](docs/Scores_Api.md#scoresGet) | **GET** /api/v1/scores/{SCORE_ID} | Get a particular score
*TractionToolsApiV1.Scores_Api* | [**scoresPut**](docs/Scores_Api.md#scoresPut) | **PUT** /api/v1/scores/{SCORE_ID} | Update a score
*TractionToolsApiV1.SearchApi* | [**searchSearch**](docs/SearchApi.md#searchSearch) | **GET** /api/v1/search/all | Search for users, positions, or teams by name
*TractionToolsApiV1.SearchApi* | [**searchSearchUser**](docs/SearchApi.md#searchSearchUser) | **GET** /api/v1/search/user | Search for users
*TractionToolsApiV1.SeatsApi* | [**seatsAttachDirectReport**](docs/SeatsApi.md#seatsAttachDirectReport) | **POST** /api/v1/seats/{SEAT_ID}/directreport/{USER_ID} | Add a user below a seat
*TractionToolsApiV1.SeatsApi* | [**seatsAttachPosition**](docs/SeatsApi.md#seatsAttachPosition) | **POST** /api/v1/seats/{SEAT_ID}/position/{POSITION_ID} | Set the position for a seat
*TractionToolsApiV1.SeatsApi* | [**seatsAttachUser**](docs/SeatsApi.md#seatsAttachUser) | **POST** /api/v1/seats/{SEAT_ID}/user/{USER_ID} | Set a user for a seat
*TractionToolsApiV1.SeatsApi* | [**seatsDetachUser**](docs/SeatsApi.md#seatsDetachUser) | **DELETE** /api/v1/seats/{SEAT_ID}/user | Remove user from a seat
*TractionToolsApiV1.SeatsApi* | [**seatsGetPosition**](docs/SeatsApi.md#seatsGetPosition) | **GET** /api/v1/seats/{SEAT_ID}/position | Get the position attached to a seat
*TractionToolsApiV1.SeatsApi* | [**seatsGetSeat**](docs/SeatsApi.md#seatsGetSeat) | **GET** /api/v1/seats/{SEAT_ID} | Get a particular seat
*TractionToolsApiV1.SeatsApi* | [**seatsGetSeatUser**](docs/SeatsApi.md#seatsGetSeatUser) | **GET** /api/v1/seats/{SEAT_ID}/user | Get the user for a seat
*TractionToolsApiV1.SeatsApi* | [**seatsGetSeatsForMe**](docs/SeatsApi.md#seatsGetSeatsForMe) | **GET** /api/v1/seats/user/mine | Get your seats
*TractionToolsApiV1.SeatsApi* | [**seatsGetSeatsForUser**](docs/SeatsApi.md#seatsGetSeatsForUser) | **GET** /api/v1/seats/user/{USER_ID} | Get seats for a user
*TractionToolsApiV1.SeatsApi* | [**seatsRemovePosition**](docs/SeatsApi.md#seatsRemovePosition) | **DELETE** /api/v1/seats/{SEAT_ID}/position | Remove position for a seat
*TractionToolsApiV1.SeatsApi* | [**seatsRemoveSeat**](docs/SeatsApi.md#seatsRemoveSeat) | **DELETE** /api/v1/seats/{SEAT_ID} | Delete a seat from the accountability chart
*TractionToolsApiV1.TeamsApi* | [**teamsAddTeam**](docs/TeamsApi.md#teamsAddTeam) | **POST** /api/v1/teams/create | Create a new team
*TractionToolsApiV1.TeamsApi* | [**teamsAddTeamMember**](docs/TeamsApi.md#teamsAddTeamMember) | **POST** /api/v1/teams/{TEAM_ID}/member/{USER_ID} | Add a user to a team
*TractionToolsApiV1.TeamsApi* | [**teamsGetTeamMembers**](docs/TeamsApi.md#teamsGetTeamMembers) | **GET** /api/v1/teams/{TEAM_ID}/members | Get team members
*TractionToolsApiV1.TeamsApi* | [**teamsGetTeams**](docs/TeamsApi.md#teamsGetTeams) | **GET** /api/v1/teams/{TEAM_ID} | Get a particular team
*TractionToolsApiV1.TeamsApi* | [**teamsRemoveTeamMember**](docs/TeamsApi.md#teamsRemoveTeamMember) | **DELETE** /api/v1/teams/{TEAM_ID}/member/{USER_ID} | Remove a team member
*TractionToolsApiV1.TeamsApi* | [**teamsUpdateTeam**](docs/TeamsApi.md#teamsUpdateTeam) | **PUT** /api/v1/teams/{TEAM_ID} | Update a team
*TractionToolsApiV1.TodosApi* | [**todosCreateTodo**](docs/TodosApi.md#todosCreateTodo) | **POST** /api/v1/todo/create | Create a personal to-do
*TractionToolsApiV1.TodosApi* | [**todosEditTodo**](docs/TodosApi.md#todosEditTodo) | **PUT** /api/v1/todo/{TODO_ID} | Update a to-do
*TractionToolsApiV1.TodosApi* | [**todosGet**](docs/TodosApi.md#todosGet) | **GET** /api/v1/todo/{TODO_ID} | Get a particular to-do
*TractionToolsApiV1.TodosApi* | [**todosGetMineTodos**](docs/TodosApi.md#todosGetMineTodos) | **GET** /api/v1/todo/users/mine | Get your to-dos
*TractionToolsApiV1.TodosApi* | [**todosGetUserTodos**](docs/TodosApi.md#todosGetUserTodos) | **GET** /api/v1/todo/user/{USER_ID} | Get to-dos for a user
*TractionToolsApiV1.TodosApi* | [**todosMarkComplete**](docs/TodosApi.md#todosMarkComplete) | **POST** /api/v1/todo/{TODO_ID}/complete | Update the completion of a to-do
*TractionToolsApiV1.Users_Api* | [**usersGetDirectReports**](docs/Users_Api.md#usersGetDirectReports) | **GET** /api/v1/users/{userId}/directreports | Get direct reports for a particular user
*TractionToolsApiV1.Users_Api* | [**usersGetMineDirectReports**](docs/Users_Api.md#usersGetMineDirectReports) | **GET** /api/v1/users/minedirectreports | Get my direct reports
*TractionToolsApiV1.Users_Api* | [**usersGetMineUser**](docs/Users_Api.md#usersGetMineUser) | **GET** /api/v1/users/mine | 
*TractionToolsApiV1.Users_Api* | [**usersGetMineViewable**](docs/Users_Api.md#usersGetMineViewable) | **GET** /api/v1/users/mineviewable | Get all viewable users
*TractionToolsApiV1.Users_Api* | [**usersGetUser**](docs/Users_Api.md#usersGetUser) | **GET** /api/v1/users/{USER_ID} | 
*TractionToolsApiV1.Week_Api* | [**weekGet**](docs/Week_Api.md#weekGet) | **GET** /api/v1/weeks/current | Get the current week


## Documentation for Models

 - [TractionToolsApiV1.AccountabilityGroup](docs/AccountabilityGroup.md)
 - [TractionToolsApiV1.CreateHeadline](docs/CreateHeadline.md)
 - [TractionToolsApiV1.CreateIssue](docs/CreateIssue.md)
 - [TractionToolsApiV1.CreateIssue_](docs/CreateIssue_.md)
 - [TractionToolsApiV1.CreateMeasurable](docs/CreateMeasurable.md)
 - [TractionToolsApiV1.CreateMeeting](docs/CreateMeeting.md)
 - [TractionToolsApiV1.CreateMilestone](docs/CreateMilestone.md)
 - [TractionToolsApiV1.CreateNewQuarter](docs/CreateNewQuarter.md)
 - [TractionToolsApiV1.CreateRock](docs/CreateRock.md)
 - [TractionToolsApiV1.CreateRockModel_](docs/CreateRockModel_.md)
 - [TractionToolsApiV1.CreateTodo](docs/CreateTodo.md)
 - [TractionToolsApiV1.CreateTodo_](docs/CreateTodo_.md)
 - [TractionToolsApiV1.CreatedMeeting](docs/CreatedMeeting.md)
 - [TractionToolsApiV1.Headline](docs/Headline.md)
 - [TractionToolsApiV1.Issue](docs/Issue.md)
 - [TractionToolsApiV1.IssuesList](docs/IssuesList.md)
 - [TractionToolsApiV1.LocalDateTime](docs/LocalDateTime.md)
 - [TractionToolsApiV1.Measurable](docs/Measurable.md)
 - [TractionToolsApiV1.MeasurableOrder](docs/MeasurableOrder.md)
 - [TractionToolsApiV1.Meeting](docs/Meeting.md)
 - [TractionToolsApiV1.MeetingNotes](docs/MeetingNotes.md)
 - [TractionToolsApiV1.Milestone](docs/Milestone.md)
 - [TractionToolsApiV1.NameId](docs/NameId.md)
 - [TractionToolsApiV1.Page](docs/Page.md)
 - [TractionToolsApiV1.PermissionDto](docs/PermissionDto.md)
 - [TractionToolsApiV1.Picture](docs/Picture.md)
 - [TractionToolsApiV1.Position](docs/Position.md)
 - [TractionToolsApiV1.Rock](docs/Rock.md)
 - [TractionToolsApiV1.Role](docs/Role.md)
 - [TractionToolsApiV1.RoleGroup](docs/RoleGroup.md)
 - [TractionToolsApiV1.Score](docs/Score.md)
 - [TractionToolsApiV1.Scorecard](docs/Scorecard.md)
 - [TractionToolsApiV1.SearchResult](docs/SearchResult.md)
 - [TractionToolsApiV1.Seat](docs/Seat.md)
 - [TractionToolsApiV1.Settings](docs/Settings.md)
 - [TractionToolsApiV1.Team](docs/Team.md)
 - [TractionToolsApiV1.Title](docs/Title.md)
 - [TractionToolsApiV1.Todo](docs/Todo.md)
 - [TractionToolsApiV1.UpdateIssue](docs/UpdateIssue.md)
 - [TractionToolsApiV1.UpdateIssueModelCompletion](docs/UpdateIssueModelCompletion.md)
 - [TractionToolsApiV1.UpdateMeasurable](docs/UpdateMeasurable.md)
 - [TractionToolsApiV1.UpdateMilestone](docs/UpdateMilestone.md)
 - [TractionToolsApiV1.UpdateRock](docs/UpdateRock.md)
 - [TractionToolsApiV1.UpdateScore](docs/UpdateScore.md)
 - [TractionToolsApiV1.UpdateTodo](docs/UpdateTodo.md)
 - [TractionToolsApiV1.User](docs/User.md)
 - [TractionToolsApiV1.Week](docs/Week.md)


## Documentation for Authorization


### basic

- **Type**: HTTP basic authentication

