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
    //    show_statusquo(ndx);

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
        .width(700)
        .height(500)
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
        .width(300)
        .height(400)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(300)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel('Income')
        .yAxis().ticks(20);
}

function show_gender(ndx) {
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group();

    dc.barChart('#gender')
        .width(200)
        .height(400)
        .margins({ top: 20, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(300)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel('Gender')
        .yAxis().ticks(20);
}

function show_region(ndx) {
    var dim = ndx.dimension(dc.pluck('region'));
    var group = dim.group();

    dc.barChart("#region")
        .width(250)
        .height(400)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(300)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Region")
        .yAxis().ticks(20);
}

function show_education(ndx) {
    var dim = ndx.dimension(dc.pluck('education'));
    var group = dim.group();

    dc.barChart("#education")
        .width(250)
        .height(400)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(300)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Education")
        .yAxis().ticks(20);
}
