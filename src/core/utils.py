import json

import requests

from django.conf import settings
from django.utils.safestring import mark_safe


def react_render(ctx=None):
    """
    Create a ReactJS string for return.

    We hit the Node instance running and attempt to get the rendered string
    back to give us SEO and faster initial page loads.
    """

    params = { 'data': json.dumps(ctx or {}) }

    try:
        response = requests.get(settings.NODE_SERVER, params=params)

        if response.status_code == requests.codes.ok:
            return mark_safe(response.text)
    except Exception as e:
        pass

    return ''
