queue()
    .defer(d3.csv, "data/victims.csv")
    .await(makeGraphs);
    
function makeGraphs(error, victimsData) {
    var ndx = crossfilter(victimsData);
        
    show_gender(ndx);
        
    dc.renderAll();
}
function show_gender(ndx) {
    var dim = ndx.dimension(dc.pluck('Sex'));
    var group = dim.group();
    
    dc.barChart("#gender")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Gender")
        .yAxis().ticks(20);
}