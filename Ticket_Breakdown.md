# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. 
We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
 1 story point ~ approximately half of a standart working day (4 hours);

### TICKET 1 
- Add column for customIds for Connected Agent in the Facilities table
- Acceptance criteria: There is a column fullfilled with custom ids generated in ConnectedAgents table

- Time: 1 story point

### TICKET 2
- Extract Agent information from Shift which is connected with a certain Facility into a new table ConnectedAgents with a distinct column for customId
- Acceptance criteria: 
      Shift is connected with a certain Agent. We need to extract agents to a ConnectedAgents, where the customId for connected agent will be generated.
      We also need to make sure that create/update/delete operations for agents and facilities correclty modifies ConnectedAgents table
 
      Table can include 2 columns:
      id(customId), facilityId();

- Time: 5 story point

### TICKET 3
- Modify request in getShiftsByFacility for getting alongside with info about connected Agents from ConnectedAgents table
- Acceptance criteria: 
     this function should extract agents which are connected with Shifts of a certain Facility, put them into ConnectedAgents table for a certain Facility id;
- Time: 3 story point

### TICKET 4
- Modify generateReport function so it will include customIds from Connected Agents into a Report;
- Acceptance criteria: 
      There are custom ids for agents in Report;
- Time: 3 story point
