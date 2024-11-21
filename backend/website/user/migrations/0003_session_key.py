# Generated by Django 5.1.3 on 2024-11-21 16:31

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_user_phone_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='session_key',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='user.user')),
            ],
        ),
    ]