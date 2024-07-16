const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

const data = [
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    flightTypeCode: "charter",
    flightScheduledId: "8933-2024-05-15-DEN",
    flightOperationalId: "DL-8933-2024-05-15-DEN-MSP",
    flightCrewId: "8933-2024-05-15-11-DEN",
    flightCrewLocalDepartureId: "8933-2024-05-15-DEN",
    flightStatusCode: "initial",
    flightPhaseCode: null,
    flightPhaseNum: 0,
    boardingPct: 0,
    bagsLoadedPct: 0,
    closed: false,
    departureEndUtcTs: null,
    outUtcTs: null,
    offUtcTs: null,
    onUtcTs: null,
    inUtcTs: null,
    archived: false,
    crewCheckUtcTs: "2024-05-15T18:02:17Z",
    stubbed: false,
    cityPairRange: "678",
    id: "42024dl-0063d339-df74-386e-8580-627cc7ade681",
    cloaked: false,
    cloakInfo: {}
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#flightInfo"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#flightInfo#scheduledInfo",
    carrierCode: "DL",
    flightNum: "8933",
    localDepartureDate: "2024-05-15",
    flightOriginDate: "2024-05-15",
    departureAirportCode: "DEN",
    arrivalAirportCode: "MSP",
    departureUtcTs: "2024-05-15T17:00:00Z",
    departureUtcOffsetTime: "-PT360M",
    arrivalUtcTs: "2024-05-15T18:46:00Z",
    arrivalUtcOffsetTime: "-PT300M",
    lineOfFlightText: "DEN  01MSP  ",
    departureUtcOffsetHours: "-06:00",
    arrivalUtcOffsetHours: "-05:00"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#flightInfo#operationalInfo",
    carrierCode: "DL",
    flightNum: "8933",
    localDepartureDate: "2024-05-15",
    departureAirportCode: "DEN",
    arrivalAirportCode: "MSP",
    departureUtcTs: "2024-05-15T17:00:00Z",
    departureUtcOffsetTime: "-PT360M",
    arrivalUtcOffsetTime: "-PT300M",
    loadPlannerId: "CA",
    shipNum: "664",
    shipTypeCode: "75C",
    faaRegistrationNum: "N664DN",
    departureGateCode: "TBA",
    arrivalGateCode: "TBA",
    bdtFleetCode: "75C",
    nextLegId: "42024dl-df2cf9af-b2bc-3654-96a0-72cc7d3c892b",
    prevLegId: "42024dl-5169e8f8-beec-399d-b18a-0bd542853dc3",
    lineOfFlightText: "DEN  01MSP  ",
    departureUtcOffsetHours: "-06:00",
    arrivalUtcOffsetHours: "-05:00"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#topicsInfo"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#topicsInfo#maintenance",
    id: "maintenance",
    name: "Maintenance",
    canSend: false,
    offlineRoleCodes: ["PL", "LL"],
    toRoles: ["PL", "LL"]
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#topicsInfo#mainlineDutyPilot",
    id: "mainlineDutyPilot",
    name: "Duty pilot",
    canSend: false,
    offlineRoleCodes: ["MP"],
    toRoles: ["PL", "MP"]
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#topicsInfo#occFlightControl",
    id: "occFlightControl",
    name: "OCC Flight Control",
    canSend: true,
    offlineRoleCodes: [],
    toRoles: ["PL", "SC"]
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#topicsInfo#cateringCSR",
    id: "cateringCSR",
    name: "Catering CSR",
    canSend: true,
    offlineRoleCodes: [],
    toRoles: ["SR", "CO", "CT"]
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#presence"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#presence#AC",
    roleCode: "AC",
    roleName: "ACSOCC"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#presence#AC#Users#8065",
    employeeId: "8065",
    positionCode: "CR",
    positionName: "Catering Region Leadership"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#presence#AC#Users#8067",
    employeeId: "8067",
    positionCode: "AG",
    positionName: "AOG Desk"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#presence#GT",
    roleCode: "GT",
    roleName: "Galley Truck Driver"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#presence#GT#Users#8065",
    employeeId: "8065",
    positionCode: "CR",
    positionName: "Catering Region Leadership"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#presence#GT#Users#8067",
    employeeId: "8067",
    positionCode: "AG",
    positionName: "AOG Desk"
  },
  {
    PK: "Flight#DL-8933-2024-05-15-DEN-MSP",
    SK: "Flight#DL-8933-2024-05-15-DEN-MSP#presence#SR",
    roleCode: "SR",
    roleName: "Catering CSR"
  },
];

data.forEach(item => {
    const params = {
        TableName: 'HierarchicalTable',
        Item: item
    };
    
    docClient.put(params, (err, data) => {
        if (err) {
            console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
        } else {
            console.log('Added item:', JSON.stringify(item, null, 2));
        }
    });
});