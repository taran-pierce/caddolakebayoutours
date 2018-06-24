<!doctype html>
<html lang="en">
  <?php
    $title = "Contact - Caddo Lake Bayou Tours";
    $canonical = "/contact";
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
          <h1>Contact</h1>
          <p>If you have any questions please give us a call or you can contact us via email and we will get back to you as soon as possible. We will answer any questions you may have about
          what kind of guided boat tours we have available, what you can expect to encounter while on the tour and of course what you can and can not do on while on the tour of the lake.</p>
          <p>Come and enjoy the wonderful experience that is Caddo Lake. We can't wait to share it with you!</p>
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <h3>Send a Message</h3>
              <p>Ask about tour reservations or general questions.</p>
              <form method="POST" action="helpers/form.php">
                <div class="form-group">
                  <label for="first_name">First Name</label>
                  <input class="form-control" type="text" name="first_name" id="first_name" />
                </div>
                <div class="form-group">
                  <label for="last_name">Last Name</label>
                  <input class="form-control" type="text" name="last_name" id="last_name" />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input class="form-control" type="email" name="email" id="email" />
                </div>
                <div class="form-group">
                  <label for="subject">Subject</label>
                 <input class="form-control" type="text" name="subject" id="subject" />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea class="form-control" name="message" id="message"></textarea>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-info">Submit</button>
                </div>
              </form>
            </div>
            <div class="col-xs-12 col-sm-6">
              <img class="img-responsive" src="images/aerial-1.jpg" alt="Another park" />
              <h3>Rich McFarland <small>Tour Guide</small></h3>
              <p>Tours available 7 days a week, sunrise or sunset.</p>
              <p>Boat tours last approximately one hour.</p>
              <h3>Address</h3>
              <ul class="list-unstyled">
                <li><strong>449 Cypress Drive</strong></li>
                <li>Uncertain TX 75661</li>
                <li><strong>Phone: </strong>903-570-2169</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <?php include("templates/_footer.php"); ?>
    </div>
  </body>
</html>