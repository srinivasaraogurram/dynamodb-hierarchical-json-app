const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

const data = [
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
                    flightTypeCode: 'charter', 
                    flightScheduledId: 'flightScheduledId',  
                    flightOperationalId: 'DL-8933-2024-05-15-DEN-MSP'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#flightInfo'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#flightInfo#scheduledInfo', 
                    carrierCode: 'DL', 
                    flightNum: '8933', 
                    flightOriginDate: '2024-05-15',
                    departureAirportCode: 'DEN',
                    arrivalAirportCode: 'MSP'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#flightInfo#scheduledInfo', 
                    carrierCode: 'DL', 
                    flightNum: '8934', 
                    flightOriginDate: '2024-05-16',
                    departureAirportCode: 'ATL',
                    arrivalAirportCode: 'DAL'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#flightInfo#operationalInfo', 
                    carrierCode: 'DL', 
                    flightNum: '8933', 
                    flightOriginDate: '2024-05-15',
                    departureAirportCode: 'DEN',
                    arrivalAirportCode: 'MSP'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence',
                    roleCode: 'AC', 
                    roleName: 'ACSOCC'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#Users#8062',
                    employeeId: '8062',
                    positionCode: 'CR',
                    positionName: 'Catering Region Leadership'
                    
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#Users#8063',
                    employeeId: '8063',
                    positionCode: 'CR',
                    positionName: 'Catering Region Leadership'
                    
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#Users#8064',
                    employeeId: '8064',
                    positionCode: 'CR',
                    positionName: 'Catering Region Leadership'
                    
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#Users#installApp',
                    employeeId: 'installApp'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#0',
                    roleCode: 'AC',
                    roleCode: 'ACSOCC'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#0#Users#0',
                    employeeId: '042184'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#0#Users#2',
                    employeeId: 'installapp'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#0#Users#3',
                    employeeId: '630889'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#0#Users#4',
                    employeeId: '067636'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#1',
                    roleCode: 'FC',
                    roleCode: 'OCC Flight Control'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#1#Users#0',
                    employeeId: '042184'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#1#Users#2',
                    employeeId: 'installapp'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#2#Users#3',
                    employeeId: '630889'
    },
    { 
        PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
        SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#presence#3#Users#4',
                    employeeId: '067636'
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