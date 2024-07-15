const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

const data = [
    { PK: 'Company#1', SK: 'Company#1', Name: 'Delta' },
    { PK: 'Company#1', SK: 'Department#1', Name: 'HR Department' },
    { PK: 'Company#1', SK: 'Department#1#Team#1', Name: 'Recruitment Team' },
    { PK: 'Company#1', SK: 'Department#1#Team#2', Name: 'Training Team' },
    { PK: 'Company#1', SK: 'Department#2', Name: 'IT Department' },
    { PK: 'Company#1', SK: 'Department#2#Team#1', Name: 'Development Team' },
    { PK: 'Company#1', SK: 'Department#2#Team#2', Name: 'Support Team' },
    
    { PK: 'Company#2', SK: 'Company#2', Name: 'Xebia' },
    { PK: 'Company#2', SK: 'Department#1', Name: 'HR Department' },
    { PK: 'Company#2', SK: 'Department#1#Team#1', Name: 'Recruitment Team' },
    { PK: 'Company#2', SK: 'Department#1#Team#2', Name: 'Training Team' },
    { PK: 'Company#2', SK: 'Department#2', Name: 'IT Department' },
    { PK: 'Company#2', SK: 'Department#2#Team#1', Name: 'Development Team' },
    { PK: 'Company#2', SK: 'Department#2#Team#2', Name: 'Support Team' },
    { PK: 'Flight#3', SK: 'Flight#3', flightTypeCode: 'charter', 
                                              flightScheduledId: 'flightScheduledId',  
                                              flightOperationalId: 'DL-8933-2024-05-15-DEN-MSP'},
    { PK: 'Flight#3', SK: 'flightInfo#3'},
    { PK: 'Flight#3', SK: 'flightInfo#3#scheduledInfo', carrierCode: 'DL', 
                                                        flightNum: '8933', 
                                                        flightOriginDate: '2024-05-15',
                                                        departureAirportCode: 'DEN',
                                                        arrivalAirportCode: 'MSP'},
    { PK: 'Flight#3', SK: 'flightInfo#3#operationalInfo', carrierCode: 'DL', 
                                                            flightNum: '8933', 
                                                            flightOriginDate: '2024-05-15',
                                                            departureAirportCode: 'DEN',
                                                            arrivalAirportCode: 'MSP'},
    { PK: 'Flight#3', SK: 'Flight#3', flightTypeCode: 'charter', 
                                              flightScheduledId: 'flightScheduledId',  
                                              flightOperationalId: 'DL-8933-2024-05-15-DEN-MSP'},
    { PK: 'Flight#3', SK: 'flightInfo#3'},
    { PK: 'Flight#3', SK: 'flightInfo#3#scheduledInfo', carrierCode: 'DL', 
                                                        flightNum: '8933', 
                                                        flightOriginDate: '2024-05-15',
                                                        departureAirportCode: 'DEN',
                                                        arrivalAirportCode: 'MSP'},
    { PK: 'Flight#3', SK: 'flightInfo#3#operationalInfo', carrierCode: 'DL', 
                                                            flightNum: '8933', 
                                                            flightOriginDate: '2024-05-15',
                                                            departureAirportCode: 'DEN',
                                                            arrivalAirportCode: 'MSP'},

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
