cube(`RAWReviews`, {
  sql: `SELECT * FROM "RAW"."RAW_REVIEWS"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [reviewerName, date]
    }
  },
  
  dimensions: {
    listingId: {
      sql: `${CUBE}."LISTING_ID"`,
      type: `number`,
      primaryKey: true
    },
    
    sentiment: {
      sql: `${CUBE}."SENTIMENT"`,
      type: `string`
    },
    
    reviewerName: {
      sql: `${CUBE}."REVIEWER_NAME"`,
      type: `string`
    },
    
    comments: {
      sql: `${CUBE}."COMMENTS"`,
      type: `string`
    },
    
    date: {
      sql: `${CUBE}."DATE"`,
      type: `time`
    }
  }
});
