<!doctype html>
<html lang="en">
  <?php
    $title = "Thank You - Caddo Lake Bayou Tours";
    $canonical = "/thank-you";
    include("templates/_head.php");
  ?>
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9HT2T6"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="fb-root"></div>
    <script>
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
    <div class="container body-content">
      <?php include("templates/_navigation.php"); ?>
      <section class="hero">
        <img class="img-responsive" src="images/sunset-20-banner.jpg" alt="sun set" />
      </section>
      <section>
        <div class="container">
          <h1>Thank You</h1>
          <p>Your message has been received and we wanted to let you know we appreciate you reaching out to us.</p>
          <p>We will get back to you as soon as possible with the information you requested.</p>
          <p>Don't forget to check out the photo gallery before you leave!</p>
          <p>
            <a class="btn btn-info" href="/photo-gallery">Photo Gallery</a>
          </p>
        </div>
      </section>
      <?php include("templates/_footer.php"); ?>
    </div>
  </body>
</html>