from django.shortcuts import render

from src.core.utils import react_render


def index(request):
    """
    Main Index Loader for React Application

    This function stands as the entrypoint for the React Application. It
    should hit the node server and get the rendered string back. Then we can
    return the string and load it on initial page load for a full SSR website.
    """

    props = { 'initialName': 'Dan' }
    blog_component = react_render('Blog', props)

    context = {
        'blog_component': blog_component,
        'props': props,
    }

    return render(request, 'index.html', context)
