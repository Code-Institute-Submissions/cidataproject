queue()
    .defer(d3.csv, "data/victims.csv")
    .await(makeGraphs);
    
function makeGraphs(error, victimsData) {

    
}