const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: 'HierarchicalTable',
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: {
        ':pk': 'Company#1'
    }
};

docClient.query(params, (err, data) => {
    if (err) {
        console.error('Unable to query. Error:', JSON.stringify(err, null, 2));
    } else {
        console.log('Query succeeded.');

        const items = data.Items;

        // Transforming the flat list to hierarchical JSON
        const buildHierarchy = items => {
            const hierarchy = {};
            items.forEach(item => {
                const parts = item.SK.split('#');
                let currentLevel = hierarchy;
                parts.forEach(part => {
                    if (!currentLevel[part]) {
                        currentLevel[part] = {};
                    }
                    currentLevel = currentLevel[part];
                });
                currentLevel.Name = item.Name;
            });
            return hierarchy;
        };

        const hierarchy = buildHierarchy(items);
        console.log(JSON.stringify(hierarchy, null, 2));
    }
});
