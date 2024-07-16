const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

const data = [
    { PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', SK: 'Flight#DL-8933-2024-05-15-DEN-MSP', 
                                                                flightTypeCode: 'charter', 
                                                                flightScheduledId: 'flightScheduledId',  
                                                                flightOperationalId: 'DL-8933-2024-05-15-DEN-MSP'},
    { PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#flightInfo'},
    { PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#flightInfo#scheduledInfo', carrierCode: 'DL', 
                                                                          flightNum: '8933', 
                                                                          flightOriginDate: '2024-05-15',
                                                                          departureAirportCode: 'DEN',
                                                                          arrivalAirportCode: 'MSP'},
    { PK: 'Flight#DL-8933-2024-05-15-DEN-MSP', SK: 'Flight#DL-8933-2024-05-15-DEN-MSP#flightInfo#operationalInfo', carrierCode: 'DL', 
                                                                              flightNum: '8933', 
                                                                              flightOriginDate: '2024-05-15',
                                                                              departureAirportCode: 'DEN',
                                                                              arrivalAirportCode: 'MSP'},

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