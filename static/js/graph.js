queue()
    .defer(d3.csv, 'data/Chile.csv')
    .await(makeGraphs);

function makeGraphs(error, ChileData) {
    var ndx = crossfilter(ChileData);

    show_vote_selector(ndx);
    show_vote(ndx);
    show_gender(ndx);
    show_income(ndx);
    show_region(ndx);
    show_education(ndx);
    show_age(ndx);
    
    dc.renderAll();

}

function show_vote_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('vote'));
    var group = dim.group();
    dc.selectMenu('#vote_selector')
        .dimension(dim)
        .group(group);
}

function show_vote(ndx) {
    var dim = ndx.dimension(dc.pluck('vote'));
    var group = dim.group();

    dc.barChart('#vote')
        .width(600)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 40, left: 50 })
        .dimension(dim)
        .group(group)
        .ordinalColors(['#7AC0F0'])
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .ordering(function(d) { return -d.value })
        .elasticY(true)
        .xAxisLabel('Vote')
        .yAxisLabel('Count')
        .renderHorizontalGridLines(true)
        .yAxis().ticks(20);
}

function show_income(ndx) {
    var dim = ndx.dimension(dc.pluck('income'));
    var group = dim.group();

    dc.barChart('#income')
        .width(480)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 40, left: 50 })
        .dimension(dim)
        .group(group)
        .colors(['#CACAE3', '#6BAED6', '#9ecae1', '#1F77B4', '#7AC0F0'])
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .ordering(function(d) { return d.value })
        .elasticY(true)
        .xAxisLabel('Monthly income in CLP')
        .yAxisLabel('Count')
        .yAxis().ticks(20);
}

function show_gender(ndx) {
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group();
    dc.pieChart('#gender')
        .height(300)
        .radius(90)
        .transitionDuration(500)
        .dimension(dim)
        .group(group);
}

function show_region(ndx) {
    var dim = ndx.dimension(dc.pluck('region'));
    var group = dim.group();

    dc.rowChart('#region')
        .width(300)
        .height(250)
        .margins({ top: 30, right: 50, bottom: 20, left: 50 })
        .dimension(dim)
        .group(group)
        .ordinalColors(['#CACAE3', '#6BAED6', '#9ecae1', '#1F77B4', '#7AC0F0'])
        .transitionDuration(500)
        .elasticX(true);
}

function show_education(ndx) {
    var dim = ndx.dimension(dc.pluck('education'));
    var group = dim.group();

    dc.pieChart('#education')
        .height(300)
        .radius(90)
        .transitionDuration(500)
        .dimension(dim)
        .group(group);

}

function show_age(ndx) {
    var dim = ndx.dimension(dc.pluck('age'));
    var group = dim.group();

    dc.barChart('#age')
        .width(600)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 40, left: 50 })
        .dimension(dim)
        .group(group)
        .ordinalColors(['#9393C4'])
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxisLabel('Count')
        .xAxisLabel('Age')
        .elasticY(true)
        .elasticX(true);

}
