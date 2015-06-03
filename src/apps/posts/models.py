import uuid
from datetime import datetime

from django.db import models
from django.db.models import Q
from django.conf import settings
from django.template.defaultfilters import slugify

from markdown2 import markdown
from taggit.managers import TaggableManager


class PostManager(models.Manager):
    """Custom Manager for Post Operations"""
    def get_active_published(self):
        """Convenience method for all active published posts"""
        return self.filter(deleted=False, status='published')

    def get_by_user(self, user):
        """Get for user"""
        return self.get_active_published().filter(user=user)

    def get_draft_posts(self):
        """Get all draft posts"""
        return self.filter(deleted=False, status='draft')

    def get_review_posts(self):
        """Get all review posts"""
        return self.filter(deleted=False, status='review')

    def get_published_posts(self):
        """Get all published posts"""
        return self.get_active_published()

    def get_by_tag(self, tag):
        """Get all posts for a tag"""
        return self.get_active_published().filter(tags__name__in[tag])

    def get_by_hash_or_id(self, identifier):
        """Get post by hash or id"""
        return self.get_active_published().get(
            Q(hash=identifier) | Q(id=identifier)
        )

    def search(self, query):
        """Check title and content for a query match"""
        return self.get_active_published().filter(
            Q(title__icontains=query) | Q(content__icontains=query)
        )


class Post(models.Model):
    """A representation of a Post object"""
    statuses = (
        ('draft', 'Draft'),
        ('review', 'Review'),
        ('published', 'Published'),
    )

    hash = models.UUIDField(default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)
    content = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    status = models.CharField(
        max_length='10',
        choices=statuses,
        default='draft'
    )
    deleted = models.BooleanField(default=False)
    deleted_at = models.DateField(null=True)
    published_at = models.DateField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    tags = TaggableManager()
    objects = PostManager()

    class Meta:
        ordering = ('-published_at',)

    def __unicode__(self):
        """Print the title as the representation of a post"""
        return self.title

    @property
    def parsed_content(self):
        """Return parsed markdown content"""
        extras = ['code-friendly', 'fenced-code-blocks']
        return markdown(self.content, extras=extras)

    def save(self, *args, **kwargs):
        """Override the default save method"""
        if self.title and not self.slug:
            self.slug = slugify(self.title)

        if self.status == 'published' and not self.published_at:
            self.published_at = datetime.now()

        super(Post, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        """Override the default delete method"""
        self.deleted = True
        self.deleted_at = datetime.now()

        super(Post, self).save(*args, **kwargs)

    def get_tags(self):
        """Return all tags"""
        return self.tags.all()

    def add_tag(self, *tags):
        """Add a tag"""
        for t in tags:
            self.tags.add(t)

    def remove_tag(self, *tags):
        """Remove a tag"""
        for t in tags:
            self.tags.remove(t)
