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

        </div>
    </div>
    <div class="row-fluid show" id="app">

    </div>
</div>


<script data-main="js/app/app.js" src="js/lib/require.js"></script>

<script type="text/javascript">

    window.ticketsLoad = <?php echo $tickets;?>;
</script>
<script type="text/template" id="js-registration-form">
    <div class="span12" id="registration-form">
        <form>
            <label for="login">Login:</label><input type="text" name="login" id="login"/>
            <label for="name">Name:</label><input type="text" name="name" id="name"/>
            <label for="email">Email:</label><input type="text" name="email" id="email"/>
            <label for="pass">Password:</label><input type="password" name="pass" id="pass"/>
            <label for="pass_repeat">Repeat password:</label><input type="password" name="pass_repeat" id="pass_repeat"/>
            <br/>
            <input type="button" value="Register" id="register-btn" class="btn"/>
        </form>
    </div>
</script>

</body>
</html>