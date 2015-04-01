<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <title></title>
    <script type="text/javascript" src="/js/jquery-2.0.0.js"></script>
    <script type="text/javascript" src="/js/ui/jquery-ui.js"></script>

    <script type="text/javascript" src="/js/underscore.js"></script>
    <script type="text/javascript" src="/js/backbone.js"></script>
    <script type="text/javascript" src="/js/bootstrap.js"></script>
    <script type="text/javascript" src="/js/handlebars.js"></script>

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
                <button id="js-add-ticket" class="btn btn-large btn-info">New Ticket</button>
                <button class="btn btn-large btn-danger delete">New Category</button>
            </div>
            <div class="span-7"></div>
            <div class="row-fluid show" id="app">
                <div class="status-column" id="status2"></div>
                <div class="status-column" id="status3"></div>
                <div class="status-column" id="status4"></div>
                <div class="status-column" id="status5"></div>
                <div class="trash-block" id="status0"></div>
                <div class="archive-block" id="status1"></div>
            </div>
        </div>
    </div>
</div>


<div id="js-add-ticket-form" style="display: none;">
    <label for="title">Заголовок</label><input type="text" id="title" />
    <label for="story">Категория</label><select id="story"></select>
    <label for="text">Текст</label><textarea id="text"></textarea>
</div>
<script type="text/template" id="ticketTemplate">
    <div class="ticket" id="ticket<%= id%>">
        <span class="title"><%= title%></span>
    </div>
</script>


<script type="text/x-handlebars-template" id="ticket-main-template">
    <div>
        <div>
            <span>{{title}}</span>
            <input type="text" value="{{title}}">
        </div>
        <div>
            <span>{{text}}</span>
            <select></select>
        </div>
        <div>
            <span>{{text}}</span>
            <textarea>{{text}}</textarea>
        </div>
        <div></div>
        <div></div>
    </div>
</script>


<script type="text/javascript" src="/js/app/models/TicketModel.js"></script>
<script type="text/javascript" src="/js/app/collections/TicketsCollection.js"></script>
<script type="text/javascript" src="/js/app/views/TicketView.js"></script>
<script type="text/javascript" src="/js/app/views/TicketsListView.js"></script>
<script type="text/javascript" src="/js/app/views/TicketMainView.js"></script>
<script type="text/javascript" src="/js/app/views/MainView.js"></script>
<script type="text/javascript">
    var app = app || {};
    app.tickets = app.TicketsCollection(<?php echo $tickets;?>);
</script>
<script type="text/javascript" src="/js/app/app.js"></script>

</body>
</html>