//To see a demo of Infinite Scroll in Webflow CMS Collection Lists, visit: https://bestbuds.cool

<!-- Start Infinite Scroll -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script src="https://unpkg.com/infinite-scroll@3/dist/infinite-scroll.pkgd.min.js"></script>
<script>
  
$.noConflict();
jQuery(document).ready(function($){
$('.collection-list').infiniteScroll({     // selector for the CMS collection list
      path: '.w-pagination-next',     // selector for the paged navigation
      append: '.collection-item',     // selector for all items you'll retrieve
      animate      : true,
      loadingText  : "", 
      maxPage:undefined,
      });
});
</script>
<!-- End Infinite Scroll -->
