# Django React Blog

This is an example blogging platform written using Django 1.8, React 0.13, and
Flux 2.0.

**Notice: This is still in active development**

## Developing with this Application

Check out the [wiki](https://github.com/codezeus/django-react-blog/wiki) for
information about [installing the dependencies](https://github.com/codezeus/django-react-blog/wiki/Installing-Dependencies)
and [running the development environment](https://github.com/codezeus/django-react-blog/wiki/Running-the-Development-Environment).

## My Vision

I want this to be a collaborative platform at the core. The following features are what I see available in version 1 of the platform:

- Ability for admin users to invite new authors to the platform as well as manage their rights.
- Authors have personal profile information to be used with each post they create as well as a author-specific post page.
- When creating a post, markdown will be used to make the writing streamlined.
- The post editor will have buttons which allow the author to insert markdown items into their document to make remembering syntax easier.
- An author can save a post with a **review** status meaning that it will be available in the review queue for other authors to preview. Authors can be notified of new posts in review.
- When a post is in the review queue, authors can make notes about the post for others to see.
- Ultimately, an author has authority to choose when to post but the review features make the platform good for collaborating and instill confidence in authors.
- Rights would include **can_manage_users**, **can_review_posts**, **can_create_posts**.
