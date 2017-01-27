function addNewPost() {
    var $blogWrapper = $('.blog-wrapper-article');
    var userName = $('#user_name').val();
    var blogTitle = $('#blog_title').val();
    var blogContent = $('#blog_content').val();

    var today = new Date().toLocaleString('en-us', {month: 'long', day: 'numeric', year: 'numeric'});

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
