<!doctype html>
<html lang="en">
  <?php
    $title = "Photo Gallery - Caddo Lake Bayou Tours";
    $canonical = "/photo-gallery";
    include("templates/_head.php");
  ?>
  <body>
   <div class="container body-content">
    <?php include("templates/_navigation.php"); ?>
    <section class="hero">
      <div class="container">
        <h1>Photo Gallery</h1>
        <p>Here are some photos of Caddo Lake and the surrounding area so you can get an idea of what it's going to be like. You get the best views of the lake while out on the guided boat
        tours so the views are spectacular.</p>
        <p>Of course, like most things, it's even more beautiful in person. You don't have to take our word for it though, you can come and see for yourself. Call us today!</p>
        <div class="image-gallery-container">
          <div class="image-gallery">
            <?php
              $count = 11;

              include("templates/gallery/_slide.php");
            ?>
          </div>
          <div class="gallery-navigation clearfix">
            <button class="btn btn-default prev pull-left">Previous</button>
            <button class="btn btn-default next pull-right">Next</button>
          </div>
          <div class="modal fade" id="gallery-lightbox" tabindex="-1" role="dialog" aria-labelledby="gallery-lightbox">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title" id="myModalLabel">Lightbox</h4>
                </div>
                <div class="modal-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <?php include("templates/_footer.php"); ?>
   </div>
   <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>
