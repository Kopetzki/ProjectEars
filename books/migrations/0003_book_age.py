# Generated by Django 3.1.7 on 2021-04-09 01:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_library_librarybook_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='age',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
