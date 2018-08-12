queue()
    .defer(d3.csv, "data/Chile.csv")
    .await(makeGraphs);

function makeGraphs(error, ChileData) {
    var ndx = crossfilter(ChileData);

    // show_gender_selector(ndx);
    // show_vote_selector(ndx);
    show_vote(ndx);
    show_gender(ndx);
    show_income(ndx);
    show_region(ndx);
    show_education(ndx);
    show_age(ndx);

    dc.renderAll();

}

/** function show_gender_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group();

    dc.selectMenu("#gender_selector")
        .dimension(dim)
        .group(group);
} 

function show_vote_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('vote'));
    var group = dim.group();

    dc.selectMenu("#vote_selector")
        .dimension(dim)
        .group(group);
} **/

function show_vote(ndx) {
    var dim = ndx.dimension(dc.pluck('vote'));
    var group = dim.group();

    dc.barChart("#vote")
        .width(800)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
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
        .width(380)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(300)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel('Monthly income in CLP')
        .yAxis().ticks(20);
}

function show_gender(ndx) {
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group();
    dc.pieChart('#gender')
        .height(330)
        .radius(90)
        .transitionDuration(300)
        .dimension(dim)
        .group(group);
}

function show_region(ndx) {
    var dim = ndx.dimension(dc.pluck('region'));
    var group = dim.group();

    dc.rowChart("#region")
        .width(300)
        .height(250)
        .margins({ top: 30, right: 50, bottom: 20, left: 50 })
        .dimension(dim)
        .group(group)
        .ordinalColors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
        .transitionDuration(300)
        .elasticX(true)
}

function show_education(ndx) {
    var dim = ndx.dimension(dc.pluck('education'));
    var group = dim.group();

    dc.pieChart('#education')
        .height(330)
        .radius(90)
        .transitionDuration(300)
        .dimension(dim)
        .group(group);
        
}

function show_age(ndx) {
    var dim = ndx.dimension(dc.pluck('age'));
    var group = dim.group();

    dc.barChart("#age")
        .width(1000)
        .height(200)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(300)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxisLabel("Count")
        .xAxisLabel("Age")
        .elasticY(true)
        .elasticX(true);

}