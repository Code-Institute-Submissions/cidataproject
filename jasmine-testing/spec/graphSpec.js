describe("Vote Select Changing Value", function() {
  var voteSelect = $('#vote_selector select');

  it("select showing all votes", function() {
    voteSelect.val(null);

    $('#vote rect.bar').each((key, bar) => {
        expect(bar.height()).toBeGreaterThan(0);
    });
  });

  it("select abstain votes", function() {
    voteSelect.val('Abstain');

    $('#vote rect.bar').each((key, bar) => {
      bar = $(bar);
      if (bar.children().text().indexOf('Abstain') !== -1) {
        expect(bar.height()).toBeGreaterThan(0);
      } else {
        expect(bar.height()).toBe(0);
      }
    });
  });

  it("select N/A votes", function() {
    voteSelect.val('NA');

    $('#vote rect.bar').each((key, bar) => {
      bar = $(bar);
      if (bar.children().text().indexOf('NA') !== -1) {
        expect(bar.height()).toBeGreaterThan(0);
      } else {
        expect(bar.height()).toBe(0);
      }
    });
  });

  it("select no votes", function() {
    voteSelect.val('No');

    $('#vote rect.bar').each((key, bar) => {
      bar = $(bar);
      if (bar.children().text().indexOf('No') !== -1) {
        expect(bar.height()).toBeGreaterThan(0);
      } else {
        expect(bar.height()).toBe(0);
      }
    });
  });

  it("select undecided votes", function() {
    voteSelect.val('Undecided');

    $('#vote rect.bar').each((key, bar) => {
      bar = $(bar);
      if (bar.children().text().indexOf('Undecided') !== -1) {
        expect(bar.height()).toBeGreaterThan(0);
      } else {
        expect(bar.height()).toBe(0);
      }
    });
  });

  it("select yes votes", function() {
    voteSelect.val('Yes');

    $('#vote rect.bar').each((key, bar) => {
      bar = $(bar);
      if (bar.children().text().indexOf('Yes') !== -1) {
        expect(bar.height()).toBeGreaterThan(0);
      } else {
        expect(bar.height()).toBe(0);
      }
    });
  });
});




describe("Gender Select Changing Value", function() {

  it("select showing all genders", function() {
    voteSelect.val(null);

    $('#gender pieChart').each((key, pie-slice) => {
        expect(pie-slice()).toBeGreaterThan(0);
    });
  });

  it("select female votes", function() {
    voteSelect.val('Female');

    $('#gender pieChart').each((key, pie-slice) => {
      pie-slice = $(pie-slice);
      if (pie.children().text().indexOf('Female') !== -1) {
        expect(pie-slice()).toBeGreaterThan(0);
      } else {
        expect(pie-slice()).toBe(0);
      }
    });
  });
});
it("select male votes", function() {
    voteSelect.val('Male');

    $('#gender pieChart').each((key, pie-slice) => {
      pie-slice = $(pie-slice);
      if (pie.children().text().indexOf('Male') !== -1) {
        expect(pie-slice()).toBeGreaterThan(0);
      } else {
        expect(pie-slice()).toBe(0);
      }
    });
  });


describe("Region Select Changing Value", function() {
  var voteSelect = $('#region select');

  it("select showing all votes", function() {
    regionSelect.val(null);

    $('#region rect.row').each((key, row) => {
        expect(row.height()).toBeGreaterThan(0);
    });
  });

  it("select abstain votes", function() {
    voteSelect.val('Santiago');

    $('#vote rect.row').each((key, row) => {
      row = $(row);
      if (bar.children().text().indexOf('Abstain') !== -1) {
        expect(row.height()).toBeGreaterThan(0);
      } else {
        expect(row.height()).toBe(0);
      }
    });
  });

  it("select N/A votes", function() {
    voteSelect.val('South');

    $('#vote rect.row').each((key, bar) => {
      bar = $(bar);
      if (bar.children().text().indexOf('NA') !== -1) {
        expect(bar.height()).toBeGreaterThan(0);
      } else {
        expect(bar.height()).toBe(0);
      }
    });
  });

  it("select no votes", function() {
    voteSelect.val('Centre');

    $('#vote rect.row').each((key, bar) => {
      bar = $(bar);
      if (bar.children().text().indexOf('No') !== -1) {
        expect(bar.height()).toBeGreaterThan(0);
      } else {
        expect(bar.height()).toBe(0);
      }
    });
  });

  it("select undecided votes", function() {
    voteSelect.val('North');

    $('#vote rect.row').each((key, bar) => {
      bar = $(bar);
      if (bar.children().text().indexOf('Undecided') !== -1) {
        expect(bar.height()).toBeGreaterThan(0);
      } else {
        expect(bar.height()).toBe(0);
      }
    });
  });

  it("select yes votes", function() {
    voteSelect.val('Metropolitan Region');

    $('#vote rect.row').each((key, bar) => {
      bar = $(bar);
      if (bar.children().text().indexOf('Yes') !== -1) {
        expect(bar.height()).toBeGreaterThan(0);
      } else {
        expect(bar.height()).toBe(0);
      }
    });
  });
});
