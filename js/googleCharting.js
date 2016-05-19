function initialize () {}

google.charts.load("current", {packages:["corechart","timeline","geochart"]});
google.charts.setOnLoadCallback(initialize);

function drawChart_educationDonut() 
{
    var data = google.visualization.arrayToDataTable
    ([
          ['Subject', 'Number of Courses'],
          ['Business', 7],
          ['Computational Science and Engineering',  4],
          ['Design and Manufacturing',  7],
          ['Fluid Mechanics and Aerodynamics',     12],
          ['Physics',    4],
          ['Psychology',    3],
          ['Thermodynamics and Heat Transfer',      5]

    ]);

    var options = 
    {
        title: 'Subject Knowledge by Education',
        pieHole: 0.3,
    };

    var chart = new google.visualization.PieChart(document.getElementById('plottingArea'));
    chart.draw(data, options);
}

function drawChart_experienceTimeline() 
{
    var container = document.getElementById('plottingArea');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Skill' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
        [ 'Skills\\Experience', 'Analysis Tools Development Engineer (Cummins)', new Date('2015-8-15'), new Date() ],
        [ 'Fluid Mechanics', '', new Date('2015-8-15'), new Date() ],
        [ 'Heat Transfer', '', new Date('2015-8-15'), new Date() ],
        [ 'Data Analysis', '', new Date('2015-8-15'), new Date() ],
        [ 'Optimization', '', new Date('2015-8-15'), new Date() ],
        [ 'MATLAB', '', new Date('2015-8-15'), new Date() ],
        [ 'Excel VBA', '', new Date('2015-8-15'), new Date() ],
        [ 'Engine Performance', '', new Date('2015-8-15'), new Date() ],
        [ 'Skills\\Experience', 'Graduate Research Assistant (Purdue University)', new Date('2015-1-1'), new Date('2015-8-15') ],
        [ 'Fluid Mechanics', '', new Date('2015-1-1'), new Date('2015-8-15') ],
        [ 'CFD', '', new Date('2015-1-1'), new Date('2015-8-15') ],
        [ 'FORTRAN', '', new Date('2015-1-1'), new Date('2015-8-15') ],
        [ 'Skills\\Experience', 'CFD Research Intern (Cummins)', new Date('2014-6-1'), new Date('2014-12-31') ],
        [ 'Fluid Mechanics', '', new Date('2014-6-1'), new Date('2014-12-31') ],
        [ 'Heat Transfer', '', new Date('2014-6-1'), new Date('2014-12-31') ],
        [ 'CFD', '', new Date('2014-6-1'), new Date('2014-12-31') ],
        [ 'C/C++', '', new Date('2014-6-1'), new Date('2014-12-31') ],
        [ 'MATLAB', '', new Date('2014-6-1'), new Date('2014-12-31') ],
        [ 'Excel VBA', '', new Date('2014-6-1'), new Date('2014-12-31') ],
        [ 'Product Design', '', new Date('2014-6-1'), new Date('2014-12-31') ],
        [ 'ANSYS', '', new Date('2014-6-1'), new Date('2014-12-31') ],
        [ 'Skills\\Experience', 'Student Data Analyst (Purdue University)', new Date('2014-3-15'), new Date('2014-5-15') ],
        [ 'Data Analysis', '', new Date('2014-3-15'), new Date('2014-5-15') ], 
        [ 'R', '', new Date('2014-3-15'), new Date('2014-5-15') ], 
        [ 'Skills\\Experience', 'Student Desktop Assistant (Purdue University)', new Date('2013-10-1'), new Date('2014-3-15') ],
        [ 'Technical Support', '', new Date('2013-10-1'), new Date('2014-3-15') ],
        [ 'Skills\\Experience', 'CFD Intern (Wesmarty Infotech)', new Date('2013-6-1'), new Date('2013-7-31') ],
        [ 'CFD', '', new Date('2013-6-1'), new Date('2013-7-31') ],
        [ 'C/C++', '', new Date('2013-6-1'), new Date('2013-7-31') ],
        [ 'Skills\\Experience', 'Summer Research Intern (IIT Hyderabad)', new Date('2012-6-1'), new Date('2012-7-31') ],
        [ 'Fluid Mechanics', '' , new Date('2012-6-1'), new Date('2012-7-31') ],
        [ 'CFD', '', new Date('2012-6-1'), new Date('2012-7-31') ],
        [ 'C/C++', '', new Date('2012-6-1'), new Date('2012-7-31') ],
        ]);
        

    chart.draw(dataTable);
}

function drawChart_experienceBar() 
{
    var cfdDuration=new Date('2015-8-15')-new Date('2011-8-1');
    cfdDuration=0.5*Math.round(2*cfdDuration/31556952000);
    var analysisDuration=new Date() - new Date('2014-3-15');
    analysisDuration=0.5*Math.round(2*analysisDuration/31556952000);
    var optimDuration=new Date() - new Date('2014-6-15');
    optimDuration=0.5*Math.round(2*optimDuration/31556952000);
    var data = google.visualization.arrayToDataTable
    ([
          ['Skill', 'Number of years', { role: 'style' }, { role: 'annotation' }],
          ['Thermal-fluid Sciences and CFD', cfdDuration, '#3366CC', cfdDuration ],
          ['Data Analysis', analysisDuration, '#DC3912', analysisDuration],
          ['Optimization', optimDuration, '#FF9900', optimDuration]
    ]);

    var options = 
    {
        title: 'Skillset Utilization in Professional and Academic Projects',
        legend: {position: 'none'},
        hAxis: {title: 'Umbrella Skillset'},
        vAxis: {title: 'Skillset Utilization (years)'}
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('plottingArea'));
    chart.draw(data, options);
}

function drawChart_worldConquest() 
{
    var data = google.visualization.arrayToDataTable
    ([
          ['Country', 'Visited'],
          ['United States', 1],
          ['India', 1],
          ['Nepal', 1],
          ['Singapore', 1],
          ['Thailand', 1],
          ['Malaysia', 1]
    ]);

    var options = 
    {
        title:'Countries that I have visited',
        legend: 'none'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('plottingArea'));

    chart.draw(data, options);
}
