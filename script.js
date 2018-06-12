
/*DataTables*/
/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return '<div class="slider">' +
        '<table class="expand" transition: 0.4s;">' +
        '<tr>' +
        '<td class="description">Description:</td>' +
        '<td>' + d.Description + '</td>' +
        '</tr>' +
        '</table>' +
        '</div>';
}

function show(tr, row) {
    if (row.child.isShown()) {
        // This row is already open - close it
        $('div.slider', row.child()).slideUp(function () {
            row.child.hide();
            tr.removeClass('shown');
        });
    }
    else {
        // Open this row
        row.child(format(row.data())).show();
        tr.addClass('shown');
        $('div.slider', row.child()).slideDown();
    }
}
//languages
function testch(id) {
    localStorage.setItem('language', id);
    language = id

    $.ajax({
        url: 'translations/' + language + '.xml',
        success: function(xml) {
            $(xml).find('translation').each(function(){
                var id = $(this).attr('id');
                var text = $(this).text();
                $("." + id).html(text);
            });
        }
    });

    walletsjson = "data/wallets-" + language + ".json"
    var tablewallets = $('#datatable-wallets').DataTable()
    tablewallets.ajax.url(walletsjson).load();

    infrastructurejson = "data/infrastructure-" + language + ".json"
    var tableinfrastructure = $('#datatable-infrastructure').DataTable()
    tableinfrastructure.ajax.url(infrastructurejson).load();

    exchangesjson = "data/exchanges-" + language + ".json"
    var tableexchanges = $('#datatable-exchanges').DataTable()
    tableexchanges.ajax.url(exchangesjson).load();

    miningpoolsjson = "data/miningpools-" + language + ".json"
    var tableminingpools = $('#datatable-miningpools').DataTable()
    tableminingpools.ajax.url(miningpoolsjson).load();

    youtubejson = "data/youtube-" + language + ".json"
    var tableyoutube = $('#datatable-youtube').DataTable()
    tableyoutube.ajax.url(youtubejson).load();
};
$(document).ready(function () {

    //languages
    if(localStorage.getItem('language') != null) {
        language = localStorage.getItem('language');
        walletsjson = "data/wallets-" + language + ".json"
        infrastructurejson = "data/infrastructure-" + language + ".json"
        exchangesjson = "data/exchanges-" + language + ".json"
        miningpoolsjson = "data/miningpools-" + language + ".json"
        youtubejson = "data/youtube-" + language + ".json"
        $.ajax({
            url: 'translations/' + language + '.xml',
            success: function(xml) {
                $(xml).find('translation').each(function(){
                    var id = $(this).attr('id');
                    var text = $(this).text();
                    $("." + id).html(text);
                });
            }
        });
    } else {
        walletsjson = "data/wallets-english.json"
        infrastructurejson = "data/infrastructure-english.json"
        exchangesjson = "data/exchanges-english.json"
        miningpoolsjson = "data/miningpools-english.json"
        youtubejson = "data/youtube-english.json"
    }

    $("#myInput").keyup(function () {
        $('.dataTable').DataTable().search(this.value).draw();
    });
    
    $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    $("a[href='#infrastructure']").click(function () {
        $("html, body").animate({ scrollTop: $("#infrastructure").offset().top }, 800);
        return false;
    });

    $("a[href='#wallets']").click(function () {
        $("html, body").animate({ scrollTop: $("#wallets").offset().top }, 800);
        return false;
    });

    $("a[href='#exchanges']").click(function () {
        $("html, body").animate({ scrollTop: $("#exchanges").offset().top }, 800);
        return false;
    });

    $("a[href='#miningpools']").click(function () {
        $("html, body").animate({ scrollTop: $("#miningpools").offset().top }, 800);
        return false;
    });
    
    $("a[href='#youtube']").click(function () {
        $("html, body").animate({ scrollTop: $("#youtube").offset().top }, 800);
        return false;
    });

    var tablewallets = $('#datatable-wallets').DataTable({
        "ajax": walletsjson,
        //"lengthMenu": [[-1, 20, 50, 100], ["All", 20, 50, 100]],
        "paging": false,
        "info": false,
        "orderable": false,
        "sorting": false,
        "columns": [
            { "data": "Id" },
            { "data": "Name" },
            { "data": "Type" },
            { "data": "Platforms" },
            { "data": "Link" },
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "Description", "visible": false }  
        ],
        "order": [[0, 'asc']]

    });

    var tableinfrasctructure = $('#datatable-infrastructure').DataTable({
        "ajax": infrastructurejson,
        //"lengthMenu": [[-1, 20, 50, 100], ["All", 20, 50, 100]],
        "paging": false,
        "info": false,
        "orderable": false,
        "sorting": false,
        "columns": [
            { "data": "Id" },
            { "data": "Name" },
            { "data": "Link" },
            { "data": "Status" },
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "Description", "visible": false }  
        ],
        "order": [[0, 'asc']]
    });

    var tableexchanges = $('#datatable-exchanges').DataTable({
        "ajax": exchangesjson,
        //"lengthMenu": [[-1, 20, 50, 100], ["All", 20, 50, 100]],
        "paging": false,
        "info": false,
        "orderable": false,
        "sorting": false,
        "columns": [
            { "data": "Id" },
            { "data": "Name" },
            { "data": "Link" },
            { "data": "Status" },
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "Description", "visible": false }  
        ],
        "order": [[0, 'asc']]
    });

    var tableminingpools = $('#datatable-miningpools').DataTable({
        "ajax": miningpoolsjson,
        //"lengthMenu": [[-1, 20, 50, 100], ["All", 20, 50, 100]],
        "paging": false,
        "info": false,
        "orderable": false,
        "sorting": false,
        "columns": [
            { "data": "Id" },
            { "data": "Name" },
            { "data": "Link" },
            { "data": "Status" },
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "Description", "visible": false }  
        ],
        "order": [[0, 'asc']]
    });

    var tableyoutube = $('#datatable-youtube').DataTable({
        "ajax": youtubejson,
        //"lengthMenu": [[-1, 20, 50, 100], ["All", 20, 50, 100]],
        "paging": false,
        "info": false,
        "orderable": false,
        "sorting": false,
        "columns": [
            { "data": "Id" },
            { "data": "Name" },
            { "data": "Link" },
            { "data": "Uploader" },
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "Description", "visible": false }  
        ],
        "order": [[0, 'asc']]
    });



    // Add event listener for opening and closing details
    $('#datatable-wallets tbody').on('click', 'tr', function () {
        var tr = $(this).closest('tr');
        var row = tablewallets.row(tr);
        show(tr, row);
    });

    $('#datatable-infrastructure tbody').on('click', 'tr', function () {
        var tr = $(this).closest('tr');
        var row = tableinfrasctructure.row(tr);
        show(tr, row);
    });

    $('#datatable-exchanges tbody').on('click', 'tr', function () {
        var tr = $(this).closest('tr');
        var row = tableexchanges.row(tr);
        show(tr, row);
    });

    $('#datatable-miningpools tbody').on('click', 'tr', function () {
        var tr = $(this).closest('tr');
        var row = tableminingpools.row(tr);
        show(tr, row);
    });

    $('#datatable-youtube tbody').on('click', 'tr', function () {
        var tr = $(this).closest('tr');
        var row = tableyoutube.row(tr);
        show(tr, row);
    });
});
