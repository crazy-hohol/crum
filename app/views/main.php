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
    <div id="registration-form">
        <form class="form-horizontal">
            <legend>Registration</legend>
            <div class="control-group">
                <label for="login" class="control-label">Login:</label>
                <div class="controls"><input type="text" name="login" id="login"/></div>
            </div>
            <div class="control-group">
                <label for="name" class="control-label">Name:</label>
                <div class="controls"><input type="text" name="name" id="name"/></div>
            </div>
            <div class="control-group">
                <label for="email" class="control-label">Email:</label>
                <div class="controls"><input type="text" name="email" id="email"/></div>
            </div>
            <div class="control-group">
                <label for="pass" class="control-label">Password:</label>
                <div class="controls"><input type="password" name="pass" id="pass"/></div>
            </div>
            <div class="control-group">
                <label for="pass_repeat" class="control-label">Repeat password:</label>
                <div class="controls"><input type="password" name="pass_repeat" id="pass_repeat"/></div>

            </div>
            <div class="control-group">
                <div class="controls"><input type="button" value="Register" id="register-btn" class="btn btn-primary"/></div>
            </div>
        </form>
    </div>
</script>
<script type="text/template" id="js-login-form">
    <form class="form-horizontal">
        <div class="control-group">
            <label for="login" class="control-label">Login:</label>
            <div class="controls"><input type="text" name="login" id="auth-login"/></div>
        </div>
        <div class="control-group">
            <label for="pass" class="control-label">Password:</label>
            <div class="controls"><input type="password" name="pass" id="auth-pass"/></div>
        </div>
        <div class="control-group">
            <div class="controls">
                <a href="#registration"><input type="button" value="Register"/></a>
                <input type="button" value="Log-in" id="log"/>
            </div>
        </div>
    </form>
</script>

</body>
</html>