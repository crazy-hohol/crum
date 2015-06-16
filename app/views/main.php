<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <title></title>

    <link type="text/css" rel="stylesheet" href="/css/ui_themes/base/jquery-ui.css"/>
    <link type="text/css" rel="stylesheet" href="/css/bootstrap.css"/>
    <link type="text/css" rel="stylesheet" href="/css/bootstrap-responsive.css"/>
    <link type="text/css" rel="stylesheet" href="/css/main.css"/>



</head>
<body>
<div class="container-fluid" id="main">
    <div class="row-fluid show">
        <div class="span12 show" id="top">
            <a href="#ticket-add"><button id="js-add-ticket" class="btn btn-large btn-info">New Ticket</button></a>
            <button class="btn btn-large btn-danger delete">New Story</button>
            <div class="btn-group">
                <button class="btn btn-large btn-success">Project</button>
                <button class="btn btn-large btn-success dropdown-toggle" data-toggle="dropdown">
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <!-- dropdown menu links -->
                </ul>
            </div>
            <button class="btn btn-large btn-warning">Profile</button>
        </div>
    </div>
    <div class="row-fluid show" id="app">

    </div>
</div>


<script data-main="js/app/app.js" src="js/lib/require.js"></script>

<script type="text/javascript">

    window.ticketsLoad = <?php echo $tickets;?>;
</script>

</body>
</html>