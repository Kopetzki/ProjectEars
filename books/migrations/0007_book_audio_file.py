# Generated by Django 3.2 on 2021-04-17 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0006_book_heyzine_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='audio_file',
            field=models.FileField(blank=True, upload_to=''),
        ),
    ]
