queue()
    .defer(d3.csv, "data/Chile.csv")
    .await(makeGraphs);
    
function makeGraphs(error, ChileData) {
    var ndx = crossfilter(ChileData);
    
    show_gender_selector(ndx);    
    show_vote(ndx);
        
    dc.renderAll();
    
}

function show_gender_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group();
    
    dc.selectMenu("#gender_selector")
        .dimension(dim)
        .group(group);
}

function show_vote(ndx) {
    var dim = ndx.dimension(dc.pluck('vote'));
    var group = dim.group();
    
    dc.barChart("#vote")
        .width(400)
        .height(500)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(300)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Vote")
        .yAxis().ticks(20);
}