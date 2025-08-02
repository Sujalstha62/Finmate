// JavaScript Example: Reading Entities
// Filterable fields: current_balance, last_updated
async function fetchBalanceEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/688b7897251a08a739c80e47/entities/Balance`, {
        headers: {
            'api_key': 'af344fad200d4dd78c16c4bd600ff183', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

// JavaScript Example: Updating an Entity
// Filterable fields: current_balance, last_updated
async function updateBalanceEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/688b7897251a08a739c80e47/entities/Balance/${entityId}`, {
        method: 'PUT',
        headers: {
            'api_key': 'af344fad200d4dd78c16c4bd600ff183', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    const data = await response.json();
    console.log(data);
}