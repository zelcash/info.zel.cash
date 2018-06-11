
/*DataTables*/
/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return '<div class="slider">' +
        '<table class="expand" transition: 0.4s;">' +
        '<tr>' +
        '<td class="type">Description:</td>' +
        '<td>' + d.Description + '</td>' +
        '</tr>' +
        '</table>' +
        '</div>';
}

$(document).ready(function () {
    $("a[href='#infrastructure']").click(function () {
        $("html, body").animate({ scrollTop: $("#infrastructure").offset().top }, 800);
        return false;
    });

    $("a[href='#wallets']").click(function () {
        $("html, body").animate({ scrollTop: $("#wallets").offset().top }, 800);
        return false;
    });
    
    $("#myInput").keyup(function () {
        $('.dataTable').DataTable().search(this.value).draw();
    });

    var tablewallets = $('#datatable-wallets').DataTable({
        "ajax": "wallets.json",
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
        "ajax": "infrastructure.json",
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


    // Add event listener for opening and closing details
    $('#datatable-wallets tbody').on('click', 'tr', function () {
        var tr = $(this).closest('tr');
        var row = tablewallets.row(tr);

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
    });
    
    $('#datatable-infrastructure tbody').on('click', 'tr', function () {
        var tr = $(this).closest('tr');
        var row = tableinfrasctructure.row(tr);

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
    });
});



