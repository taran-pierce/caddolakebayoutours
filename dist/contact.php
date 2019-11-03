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
      <style>
        .hero {
          background-image: url('images/sunset-new.jpg');
          background-repeat: no-repeat;
          background-position: 28% 47%;
          height: 300px;
        }

        @media( min-width: 768px) {
          .hero {
            background-position: 0% 45%;
          }
        }

        @media( min-width: 992px) {
          .hero {
            background-position: 0% 45%;
          }
        }
      </style>
      <section class="hero"></section>
      <section>
        <div class="container">
          <h1>Contact</h1>
          <p>If you have any questions please give us a call or you can contact us via email and we will get back to you as soon as possible. We will answer any questions you may have about
          what kind of guided boat tours we have available, what you can expect to encounter while on the tour and of course what you can and can not do on while on the tour of the lake.</p>
          <p>Come and enjoy the wonderful experience that is Caddo Lake. We can't wait to share it with you!</p>
          <h3>Types of Tours for Caddo Lake</h3>
          <ul class="list-unstyled">
            <li>
              <h4>Guided photography tour</h4>
              <p>Whether you are looking to take some photography of the abundant wildlife here at Caddo Lake or some of the breath taking nature, we can show you all the best places on the lake amidst the maze of bayous and Bald Cypress trees.</p>
            </li>
            <li>
              <h4>Sunrise or sunset tours</h4>
              <p>Who can resist seeing a gorgeous sunset or sunrise over a lake? Caddo Lake is picturesque in every way, shape and form. Book a tour today and find out for yourself!</p>
            </li>
            <li>
              <h4>Fishing trips</h4>
              <p>With vast amounts of experience and knowledge of Caddo Lake, we can take you to all the best fishing spots to ensure you will have a great time and a great catch.</p>
            </li>
            <li>
              <h4>Sightseeing trips</h4>
              <p>If taking pictures isn't quite your thing then just taking a relaxing ride on Caddo Lake and getting to see the bayous and how they all intertwine first hand is worth the experience alone. Come and check out the wonders of Caddo Lake today!</p>
            </li>
            <li>
              <h4>and more!</h4>
              <p>There are so many things available to do and see on the lake that we couldn't list them all. If you think of something that you would like to do or see and you wonder if we can accommodate those plans, just send us a message and let us know! We will get back to you as soon as possible to let you know if we can help out.</p>
            </li>
          </ul>
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <h3>Rich McFarland <small>Tour Guide</small></h3>
              <p>Tours available 7 days a week, any time of the day from sunrise to sunset.</p>
              <p>Boat tours last approximately one hour.</p>
              <p>Make sure to like us on <a href="https://www.facebook.com/caddotours/" target="_blank">FaceBook</a>.</p>
              <div class="fb-like" data-href="https://www.facebook.com/caddotours/" data-width="260px" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
              <h3>Address</h3>
              <ul class="list-unstyled">
                <li><strong>449 Cypress Drive</strong></li>
                <li>Uncertain TX 75661</li>
                <li><strong>Phone: </strong>903-570-2169</li>
              </ul>
              <h4>Book a boat tour or send a message</h4>
              <p>Ask about boat tour reservations, fishing trips, availability of dates or times, or any other general questions.</p>
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
              <img class="img-responsive" src="images/june/medium/5-compressor.jpg" alt="Another park" />

            </div>
          </div>
        </div>
      </section>
      <?php include("templates/_footer.php"); ?>
    </div>
  </body>
</html>
