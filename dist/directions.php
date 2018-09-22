<!doctype html>
<html lang="en">
  <?php
    $title = "Directions - Caddo Lake Bayou Tours";
    $canonical = "/directions";
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
      <style>
        .hero {
          background-image: url('images/june/large/10.jpg');
          background-repeat: no-repeat;
          background-position: -780px -360px;
          height: 300px;
        }

        @media( min-width: 768px) {
          .hero {
            background-position: -112px -351px;
          }
        }

        @media( min-width: 992px) {
          .hero {
            background-position: 0 -368px;
          }
        }
      </style>
      <section class="hero"></section>
       <section>
         <div class="container">
           <div class="row">
            <div class="col-xs-12 col-sm-6">
              <h1>Directions</h1>
              <p>Knowing how to get somewhere is half the battle. Let me help you out because Caddo Lake is a gem that can be hard to find. Rest assured, once you make it to Caddo Lake you will find that it was well worth it.</p>
              <p>All trips take off from Shady Glade Resort at their marina.</p>
              <h2>Specific Directions</h2>
              <p>Caddo Lake is located between Marshall, Texas and Shreveport, Louisiana in Uncertain, Texas.</p>
              <p>Bayou Tours is located at Shady Glade Resort, five miles from Caddo Lake State Park. <strong>Guide Boat tours are available daily</strong>.</p>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="map-container">
                <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
         </div>
       </section>
       <section>
         <div class="container">
          <div class="row">
           <div class="col-xs-12 col-sm-6">
             <div class="img-container">
               <img class="img-responsive" src="images/sunset/lake-sunset-xl.jpg" alt="Sunset" />
             </div>
           </div>
           <div class="col-xs-12 col-sm-6">
             <h3>Take in the beauty</h3>
             <p>Still not convinced that Caddo Lake is worth the visit? Check out our photo gallery to get a glimpse of what awaits you.</p>
             <p><a class="btn btn-info" href="/photo-gallery">Photo Gallery</a></p>
             <p>Let us make your next trip out to the lake a the most memorable one! We can take you on the best guided fishing trips, to the hidden spots for sunrises and sunsets or even
             just on a relaxing boat ride around the lake soaking in it's rich history.</p>
             <p><a class="btn btn-info" href="/contact">Book a Tour</a></p>
           </div>
         </div>
         </div>
       </section>
       <?php include("templates/_footer.php"); ?>
      </div>
    </div>
  </body>
</html>
