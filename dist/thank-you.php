<!doctype html>
<html lang="en">
  <?php
    $title = "Thank You - Caddo Lake Bayou Tours";
    $canonical = "/thank-you";
    include("templates/_head.php");
  ?>
  <body>
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