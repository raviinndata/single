cube(`RAWListings`, {
  sql: `SELECT * FROM "RAW"."RAW_LISTINGS"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, id, createdAt, updatedAt]
    },
    
    minimumNights: {
      sql: `${CUBE}."MINIMUM_NIGHTS"`,
      type: `sum`
    }
  },
  
  dimensions: {
    hostId: {
      sql: `${CUBE}."HOST_ID"`,
      type: `number`
    },
    
    roomType: {
      sql: `${CUBE}."ROOM_TYPE"`,
      type: `string`
    },
    
    listingUrl: {
      sql: `${CUBE}."LISTING_URL"`,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    price: {
      sql: `${CUBE}."PRICE"`,
      type: `string`
    },
    
    id: {
      sql: `${CUBE}."ID"`,
      type: `number`,
      primaryKey: true
    },
    
    createdAt: {
      sql: `${CUBE}."CREATED_AT"`,
      type: `time`
    },
    
    updatedAt: {
      sql: `${CUBE}."UPDATED_AT"`,
      type: `time`
    }
  }
});
