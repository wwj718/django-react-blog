import json

from django.shortcuts import render, redirect

from rest_framework.renderers import JSONRenderer

from src.core.utils import react_render, json_serialize
from posts.models import Post
from posts.serializers import PostSerializer
from posts.utils import get_pagination


def index(request):
    """
    Main Index Loader for React Application

    This function stands as the entry point for the React Application. It
    should hit the node server and get the rendered string back. Then we can
    return the string and load it on initial page load for a full SSR website.
    """

    # Find out if we have pagination
    page = None
    if 'page' in request.path.split('/'):
        page = int(request.path.split('/')[2])

    # Gather initial DB data
    posts = Post.objects.get_published_posts()
    initial_pagination, posts = get_pagination(posts, page)

    # If we're on an out of range page, protect against it
    if not posts and int(page) != 1:
        return redirect('index')

    # Build props response for initial frontend load
    props = {
        'initialPosts': json_serialize(PostSerializer, posts, True),
        'initialPagination': json.dumps(initial_pagination),
    }

    # Build Components
    blog_component = react_render(request.get_full_path(), props)

    context = {
        'blog_component': blog_component,
        'props': props,
    }

    return render(request, 'index.html', context)
