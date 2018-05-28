<!doctype html>
<html lang="en">
  <?php
    include("templates/_head.php");
  ?>
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9HT2T6"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class="container body-content">
      <?php include("templates/_navigation.php"); ?>
      <style>
        .hero {
          background-image: url('images/sunset/lake-sunset-xl.jpg');
          background-repeat: no-repeat;
          background-position: -590px -350px;
          height: 300px;
        }

        @media( min-width: 768px) {
          .hero {
            background-position: -182px -368px;
          }
        }

        @media( min-width: 992px) {
          .hero {
            background-position: 0 -368px;
          }
        }
      </style>
      <section class="hero">
        <!--<img class="img-responsive" src="images/sunset/lake-sunset-xl.jpg" alt="Cypress trees at Caddo Lake" />-->
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <h1>Boat Tour's of Caddo Lake!</h1>
              <p>Come take a boat tour on one of the most scenic and beautiful lakes in the South. Caddo Lake is approximately 26,000 acres of Bald Cypress trees, Spanish moss, abundant wildlife, and scenery that you will never forget. The lake has everything from swamps, bayous and river ways that create a one of a kind experience.</p>
              <p>Whether you are looking for a guided fishing trip, a sight&mdash;seeing tour of the wildlife or just wanting to have a relaxing day or evening on the boat on Caddo Lake then look no further. Book a tour today to see some of the beauty that awaits you.</p>
              <p>
                <a class="btn btn-info" href="contact">Book a Tour</a>
              </p>
            </div>
            <div class="col-xs-12 col-md-6">
              <style>
                .img-container.aerial .img {
                  background-image: url('images/aerial-1.jpg');
                  background-position: -170px -230px;
                }
                @media(min-width: 992px) {
                  .img-container.aerial .img {
                    background-position: -10px -140px;
                  }
                }
              </style>
              <div class="img-container aerial">
                <div class="img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <style>
                .img-container.aerial-1 .img {
                  background-image: url('images/aerial-2-md.jpg');
                  background-position: -170px -230px;
                }
                @media(min-width: 768px) {
                  .img-container.aerial-1 .img {
                    min-height: 526px;
                    background-position: -390px 0;
                  }
                }
                @media(min-width: 992px) {
                  .img-container.aerial-1 .img {
                    background-position: -240px 0;
                  }
                }
                @media(min-width: 1200px) {
                  .img-container.aerial-1 .img {
                    background-position: 0 0;
                  }
                }
              </style>
              <div class="img-container aerial-1">
                <div class="img"></div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <h2>A lake rich with history</h2>
              <p>Caddo Lake is steeped in history dating back to the early 1800's and one of the best ways to soak it in is with a guided boat tour. Sit back and relax while you take in the history which includes the Caddo Indian tribes that inhabited the area and the steamboat navigational trade from New Orleans to Jefferson, Texas are just some of the lakes rich history.</p>
              <p>The names of certain areas of the lake such as Alligator Bayou, Starr Ditch, Ames Spring Basin, Potters Point, Britts Gap and Government Ditch among others give the lake a certain mystic created by the characters from it's past. It creates the perfect atomosphere for fishing, relaxing or watching the sunset.</p>
            </div>
          </div>
        </div>
      </section>
      <?php include("templates/_footer.php"); ?>
    </div>
  </body>
</html>
