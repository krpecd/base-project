<!doctype html>
<!-- Set correct language -->
<html lang="cs">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <!-- Fill title and Description -->
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Use favicon generator to generate all favicons and application theme. https://realfavicongenerator.net/ -->

  <link rel="stylesheet" href="css/main.css">

  <!-- Critical css
    To enable Critical CSS uncomment "import './criticalCss';" in /src/js/main.js file.
    After first page load js/criticalCss sets fullCss cookie to true.
    Critical CSS is used only when stylesheet is not in browsers cache.
  -->
  <?php
    if (isset($_COOKIE['fullCss'])) {
      echo '<style>';
      echo file_get_contents('/css/critical.css');
      echo '</style>';
    } else {
      echo '<link rel="stylesheet" href="/css/main.css" type="text/css">';
    }
  ?>

</head>

<body>

  <!-- Add your site or application content here -->
  <p>Hello world! This is HTML5 Boilerplate.</p>

  <!-- Critical CSS
    If the site loads for first time the site loads the main stylesheet with async js.
  -->
  <?php
    if (!isset($_COOKIE['fullCss'])) {
      echo '<script type="text/javascript" async>';
      // make a stylesheet link
      echo 'var myCSS = document.createElement( "link" );';
      echo 'myCSS.rel = "stylesheet";';
      echo 'myCSS.href = "css/main.css";';
      // insert it at the end of the head in a legacy-friendly manner
      echo 'document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );';
      echo '</script>';
    }
  ?>

  <!-- If it is possible - make loading of this script asynchronous with async attribute -->
  <script src="js/main.min.js"></script>

  <!--[if lt IE 9]>
    <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

</body>

</html>
