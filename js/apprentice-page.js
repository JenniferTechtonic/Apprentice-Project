function addNewPost() {
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

    var newPost = `
            <div class="blog-wrapper">
                <div class="article-title-large">
                  ${blogTitle}
                </div>
                <p class="blog-date">
                  ${today} by <a href="javascript:void();">${userName}</a>
              </p>
              <div class="user-thumbnail" id="mikkelsen"></div>
              <div class="blog-content">
                  ${blogContent}...
                  <a href="javascript:void();">Read More</a>
                </div>
            </div>`;

    $blogWrapper.prepend(newPost);
    $('#new-blog-form').children('#user_name, #user_email, #blog_title, textarea').val('')
};
