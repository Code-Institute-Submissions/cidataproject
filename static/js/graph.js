queue()
    .defer(d3.csv, "data/easy.csv")
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
    show_age_to_vote_correlation(ndx);

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

    dc.barChart('#gender')
        .width(150)
        .height(300)
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
        .height(300)
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
        .height(300)
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

function show_age_to_vote_correlation(ndx) {
   var voteColors = d3.scale.ordinal()
       .domain(["Y", "N", "A", "U", "NA"])
       .range(["red", "blue", "yellow", "purple", "pink"]);

   var eDim = ndx.dimension(dc.pluck("age"));
   var ageDim = ndx.dimension(function(d){
       return [d.age];
   });
   var age = ageDim.group();

   var minAge = eDim.bottom(1)[0].age;
   var maxAge = eDim.top(1)[0].age;

 dc.scatterPlot("#age_to_vote_correlation")
       .width(800)
       .height(400)
       .x(d3.scale.linear().domain([minAge,maxAge]))
       .brushOn(false)
       .symbolSize(8)
       .clipPadding(10)
       .yAxisLabel("Vote")
       .xAxisLabel("Age")
       .title(function (d) {
           return d.key[2] + " earned " + d.key[1];
       })
       .colorAccessor(function (d) {
           return d.key[3];
       })
       .colors(voteColors)
       .dimension(ageDim)
       .group(age)
       .margins({top: 10, right: 50, bottom: 75, left: 75});
}
/**
var chart1 = dc.scatterPlot("#test1");
var chart2 = dc.scatterPlot("#test2");
var data = "x,y,z\n" +
    "1,1,3\n" +
    "5,2,11\n" +
    "13,13,13\n"+
    "5,3,20\n"+
    "12,12,10\n"+
    "3,6,8\n"+
    "15,2,9\n"+
    "8,6,14\n"+
    "1,4,9\n"+
    "8,8,12\n";
var data = d3.csvParse(data);
data.forEach(function (x) {
    x.x = +x.x;
    x.y = +x.y;
    x.z = +x.z;
});
var ndx = crossfilter(data),
    dim1 = ndx.dimension(function (d) {
        return [+d.x, +d.y];
    }),
    dim2 = ndx.dimension(function (d) {
        return [+d.y, +d.z];
    }),
    group1 = dim1.group(),
    group2 = dim2.group();
chart1.width(300)
    .height(300)
    .x(d3.scaleLinear().domain([0, 20]))
    .yAxisLabel("y")
    .xAxisLabel("x")
    .clipPadding(10)
    .dimension(dim1)
    .excludedOpacity(0.5)
    .group(group1);
chart2.width(300)
    .height(300)
    .x(d3.scaleLinear().domain([0, 20]))
    .yAxisLabel("z")
    .xAxisLabel("y")
    .clipPadding(10)
    .dimension(dim2)
    .excludedColor('#ddd')
    .group(group2);
dc.renderAll();
**/