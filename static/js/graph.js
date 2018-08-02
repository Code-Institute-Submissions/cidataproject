queue()
    .defer(d3.csv, "data/Chile.csv")
    .await(makeGraphs);
    
function makeGraphs(error, ChileData) {
    var ndx = crossfilter(ChileData);
    
    show_gender_selector(ndx);    
    show_vote(ndx);
    show_income(ndx);
    show_region(ndx);
    // show_statusquo(ndx);
        
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

function show_income(ndx) {
    var dim = ndx.dimension(dc.pluck('income'));
    var group = dim.group();

    dc.barChart('#income')
        .width(400)
        .height(500)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(300)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel('Income')
        .yAxis().ticks(20);
}

function show_region(ndx) {
    var dim = ndx.dimension(dc.pluck('region'));
    var group = dim.group();
    
    dc.barChart("#region")
        .width(400)
        .height(500)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(300)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Region")
        .yAxis().ticks(20);
}
function show_statusquo(ndx) {
    var dim = ndx.dimension(dc.pluck('statusquo'));
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
        .xAxisLabel("Support level of statusquo")
        .yAxis().ticks(20);
}
