// PSUEDO Code

// Phase 1 (Need to figure out / Focus on Data structure sent to Firebase)
    // User can enter a name for their own named list (sent to firebase as an empty object)
    // User can add nested budget
        // a Min budget value
        // a Max budget value for their list (which will be added to firebase under their named object) 

// Phase 2 
    // User can search for a show X

// Phase 3
    // Search results displayed with relevant info X

// Phase 4
    // User can add shows to their list (functionality present)

// Phase 5
    // What user added to their list will be displayed (getDatabase method)
    // Min / max values will be subtracted by their budget, difference shown
    // when minimum budget is met an alert (NEED to figure out)

// Phase 6
    // User list will not be routed, but showed on same page
    // User can remove shows from their list (getDatabase/ref/remove method)

// Phase 7
    // User's list can have the option / button to be published

// Phase 8
    // User's published list will be routed to a public published pages section
    // lists broken down by price (ex. $100, $200)

// Phase 9
    // error handle for:
        // if user search input is not an event
        // if no price range is included
        // if budget limit is reached
        // if api is down 


// STRETCH GOALS:
// Profanity API to allow appropriate names for the list
// Sorting and filtering search results
// Add a chart to show cost trends across multiple lists
// Pagination for search results
// Allow for the private list to be authenticated through google
