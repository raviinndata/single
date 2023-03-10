cube(`RAWHosts`, {
  sql: `SELECT * FROM "RAW"."RAW_HOSTS"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `${CUBE}."ID"`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    isSuperhost: {
      sql: `${CUBE}."IS_SUPERHOST"`,
      type: `string`
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
