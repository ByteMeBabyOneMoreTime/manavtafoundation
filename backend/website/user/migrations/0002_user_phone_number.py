# Generated by Django 5.1.3 on 2024-11-21 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(default=123456789, max_length=15, unique=True),
            preserve_default=False,
        ),
    ]
