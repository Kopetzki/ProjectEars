from django.apps import AppConfig


class BooksConfig(AppConfig):
    name = 'books'
#configuration to use the django signals for user modification/update
    def ready(self):
        import books.signals
