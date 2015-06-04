from django.conf import settings


def get_pagination(posts, page):
    """Generate Pagination Variables

    This function will give us the pagination variables we need in order to
    handle the initial pagination load of posts in the React components.
    """
    prev_page = False
    next_page = False
    posts_start = 0
    posts_end = settings.POSTS_PER_PAGE

    # If we don't have pages set but we have more posts than shown, we need a
    # next page button to be shown
    if posts.count() > settings.POSTS_PER_PAGE:
        next_page = True

    if page:
        if int(page) > 1:
            posts_start = (int(page) * settings.POSTS_PER_PAGE) - 1

        posts_end = posts_start + settings.POSTS_PER_PAGE

        # If our last post output is less than the total posts then we have
        # more posts to show on later pages
        if posts_end < posts.count():
            next_page = True
        else:
            next_page = False

        # If we're on a page past the first then we can go backwards
        if int(page) > 1:
            prev_page = True

    posts = posts[posts_start:posts_end]

    pagination_vars = {
        'next_page': next_page,
        'prev_page': prev_page,
        'current_page': 1 if not page else int(page),
    }

    return pagination_vars, posts
