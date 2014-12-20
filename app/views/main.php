<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <title></title>
    <script type="text/javascript" src="/js/jquery-2.0.0.js"></script>
    <script type="text/javascript" src="/js/require.js"></script>
    <script type="text/javascript" src="/js/underscore.js"></script>
    <script type="text/javascript" src="/js/backbone.js"></script>
    <script type="text/javascript" src="/js/bootstrap/js"></script>
    <script type="text/javascript" src="/scripts/handlebars.js"></script>


    <link type="text/css" rel="stylesheet" href="/css/bootstrap.css"/>
    <link type="text/css" rel="stylesheet" href="/css/bootstrap-responsive.css"/>
    <link type="text/css" rel="stylesheet" href="/css/main.css"/>

</head>
<body>
<div class="container-fluid" id="main">
    <div class="row-fluid show">
        <div class="span12 show" id="top">
            <div class="span-5">
                <button class="btn btn-large btn-info">New Ticket</button>
                <button class="btn btn-large btn-danger delete">New Category</button>
            </div>
            <div class="span-7"></div>
            <div class="row-fluid show" id="statuses">
                <div class="status-column">
                    <div class="ticket"></div>
                    <div class="ticket"></div>

                </div>
                <div class="status-column"></div>
                <div class="status-column"></div>
                <div class="status-column"></div>
                <div class="status-column"></div>
            </div>
        </div>
    </div>
</div>
</body>
</html>