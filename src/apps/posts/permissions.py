from rest_framework import permissions


class IsPostAuthor(permissions.BasePermission):
    """Post Author Permission Check

    This is a check to ensure that only the author of a post may create, edit,
    or delete said post.
    """

    def has_object_permission(self, request, view, post):
        if request.user:
            return post.user == request.user
        return False
