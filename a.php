<html>
<head>
<title>hola, mundo</title>
<script src="http://code.jquery.com/jquery-1.12.4.js"></script>

<script type="text/javascript">

    function doPrint()
    {
        var txt = $("#ta").val();
        alert("VAMOS!: " + txt);
        // llamada ajax para imprimir
        $.ajax({
            url: "http://192.168.67.21:9090/print?callback=asdfasdf&lines=" + encodeURIComponent(txt)
        });
    }

</script>



</head>
<body>
Prefiero Windows
<div class="row">
    <div class="col-md-4">
        <h2>Imprimir con AJAX</h2>
        <p>
            <input type="button" value="IMPRIMIME" onclick="doPrint()"/><br />
            <textarea id="ta" rows="20" cols="150">Texto de prueba...
            Para imprimir</textarea>
        </p>
    </div>
</div>
        <hr />
        <footer>
            <p>&copy; 2017 - My ASP.NET Application</p>
        </footer>
    </div>
</body>
</html>
