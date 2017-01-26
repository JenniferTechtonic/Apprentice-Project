
function addNewPost() {
  if (!$('.post-new-blog').hasClass('disabled')) {
    var $blogWrapper = $('.blog-wrapper-article');
    var userName = $('#user_name').val();
    var blogTitle = $('#blog_title').val();
    var blogContent = $('#blog_content').val();

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var yyyy = today.getFullYear();
    var months = new Array(12);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    today = months[month] + ' ' + day + ', ' + yyyy;

  var newPost = $('.blog-wrapper:first').clone();
  newPost.find('.author-name').text(userName);
  newPost.find('.article-title-large').text(blogTitle);
  newPost.find('.blog-content').text(blogContent);
  newPost.find('.blog-date').html(today);
  $(".blog-wrapper-article").prepend(newPost);

    $('#new-blog-form').children('#user_name, #user_email, #blog_title, textarea').val('')
  }
};
