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
            <div class="span-5">
                <button id="js-add-ticket" class="btn btn-large btn-info" href="#ticket-add">New Ticket</button>
                <button class="btn btn-large btn-danger delete">New Category</button>
            </div>
            <div class="span-7"></div>
            <div class="row-fluid show" id="app">

            </div>
        </div>
    </div>
</div>


<div id="js-add-ticket-form" style="display: none;">
    <label for="title">Заголовок</label><input type="text" id="title" />
    <label for="story">Категория</label><select id="story"></select>
    <label for="text">Текст</label><textarea id="text"></textarea>
</div>
<script data-main="js/app/app.js" src="js/lib/require.js"></script>

<script type="text/javascript">

    window.ticketsLoad = <?php echo $tickets;?>;
</script>

</body>
</html>