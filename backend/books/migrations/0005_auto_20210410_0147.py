# Generated by Django 3.1.7 on 2021-04-10 01:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0004_book_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='catergory',
            new_name='category',
        ),
    ]
