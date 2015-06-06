"""
Base Settings
"""
import os, sys

###############################################################################
## Path Settings
###############################################################################

SETTINGS_DIR = os.path.dirname(__file__)  # src/core/settings/
CORE_DIR = os.path.dirname(SETTINGS_DIR)  # src/core/
SRC_DIR = os.path.dirname(CORE_DIR)  # src/
REPO_DIR = os.path.dirname(SRC_DIR)  # /

sys.path.insert(0, os.path.join(SRC_DIR, 'apps'))

###############################################################################
## Global Settings
###############################################################################

DEBUG = False
TEMPLATE_DEBUG = False
ALLOWED_HOSTS = ['*']
INTERNAL_IPS = ('127.0.0.1',)
ROOT_URLCONF = 'src.core.urls'
WSGI_APPLICATION = 'src.core.wsgi.application'
# AUTH_USER_MODEL = 'authentication.Account'

###############################################################################
## App Definitions
###############################################################################

DJANGO_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)

THIRD_PARTY_APPS = (
    'taggit',
    'rest_framework',
)

LOCAL_APPS = (
    'posts',
)

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

###############################################################################
## Middleware
###############################################################################

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

###############################################################################
## I18N Settings
###############################################################################

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

###############################################################################
## Static and Media
###############################################################################

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(REPO_DIR, 'var', 'www')
STATICFILES_DIRS = (
    os.path.join(SRC_DIR, 'static'),
)

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(REPO_DIR, 'var', 'www', 'media')

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(SRC_DIR, 'templates')
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

###############################################################################
## Application Specific Settings
###############################################################################

NODE_SERVER = 'http://0.0.0.0:4000'
POSTS_PER_PAGE = 1

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': POSTS_PER_PAGE
}
