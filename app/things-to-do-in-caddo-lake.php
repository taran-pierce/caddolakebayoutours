<!doctype html>
<html lang="en">
  <?php
    $title = "Things to do in Caddo Lake - Caddo Lake Bayou Tours";
    $canonical = "/things-to-do-in-caddo-lake";
    include("templates/_head.php");
  ?>
  <body>
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
          <h1>Things to do in Caddo Lake</h1>
          <p>There are plenty of things to do in Caddo Lake if you are looking for something interesting and fun.</p>
          <p>Here are a few of the great places to visit while you are in Caddo Lake. Whether you are looking to book lodging for your travel so you can have a place to stay, looking for
          access to the lake, a place to refuel your boat, a place to get some food and drinks, or just some places to check out to have a good time. These are a few of the local attractions
          in the Uncertain, Texas area of Caddo Lake.</p>
          <div class="listing">
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <img class="img-responsive" src="/images/june/large/1.jpg" alt="Shady Glade" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <h3>Shady Glade</h3>
                <p>Shade Glade is an amazing place that has it all. Marina, Boat Ramp, Fishing Pier, Cabins, Motel, Storage, Pavilion, RV Park & Cafe. Specializing in families, couples, fishing enthusiasts, duck hunters, bird watchers, family reunions, photographers, artists & so much more.</p>
                <p>If you come and visit Caddo Lake, you have to go to Shady Glade.</p>
                <p><a href="http://shadygladeresort.com/" target="_blank" rel="noopener">Visit their website for more information</a></p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <h3>Johnson's Ranch</h3>
                <p>Johnson's Ranch is a full service marina, supplying the sportsmen of today with boat fuel, live bait, artificial lures, snacks, soft drinks, beer, tee shirts and other souvenirs. Canoe, kayak and boat (with or without motors) are available.</p>
                <p><a href="http://johnsonsranch.net/index.htm" target="_blank" rel="noopener">Visit their website for more information</a></p>
              </div>
              <div class="col-xs-12 col-sm-6">
                <img class="img-responsive" src="/images/johnsons-ranch.jpg" alt="Johnson's Ranch Marina" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <img class="img-responsive" src="/images/june/large/3.jpg" alt="Moonglow Lodge" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <h3>Moonglow Lodge</h3>
                <p>Moonglow Lodge is a warm, whimsical retreat on mysterious Caddo Lake. Our three cottages are on Taylor Island, on the west side of the lake in Uncertain, Texas.</p>
                <p><a href="http://www.moonglowlodge.com/" target="_blank" rel="noopener">Visit their website for more information</a></p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <h3>Hodge Podge Cottages</h3>
                <p>Come and feel time slow down in this busy world and experience everything this area has to offer. If all your questions are not answered on our website, please feel free to contact us and we will be happy to assist you.</p>
                <p><a href="http://www.hodgepodgecottages.com/" target="_blank" rel="noopener">Visit their website for more information</a></p>
              </div>
              <div class="col-xs-12 col-sm-6">
                <img class="img-responsive" src="/images/june/large/4.jpg" alt="Hodge Podge Cottages" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <img class="img-responsive" src="/images/june/large/5.jpg" alt="Caddo Lake State Park" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <h3>Caddo Lake State Park</h3>
                <p>Be sure to check out Caddo Lake State Park with it's Bald cypress trees draped with Span­ish moss tower over the maze of bayous, sloughs and ponds of Caddo Lake. Paddle these waterways, stay in a historic cabin, or try your luck fishing. Discover an East Texas treasure!</p>
                <p><a href="https://tpwd.texas.gov/state-parks/caddo-lake" target="_blank" rel="noopener">Visit their website for more information</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <?php include("templates/_footer.php"); ?>
    </div>
  </body>
</html>
