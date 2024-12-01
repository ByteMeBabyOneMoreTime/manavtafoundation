# Generated by Django 5.1.3 on 2024-12-01 20:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_product_botanical_name_product_plant_size'),
        ('user', '0003_session_key'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orders',
            old_name='address',
            new_name='address_line_1',
        ),
        migrations.AddField(
            model_name='orders',
            name='Phone_number',
            field=models.CharField(default=0, max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orders',
            name='address_line_2',
            field=models.TextField(blank=True, default='Not filled', max_length=10000),
        ),
        migrations.AddField(
            model_name='orders',
            name='city',
            field=models.CharField(default=0, max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orders',
            name='email',
            field=models.EmailField(default=0, max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orders',
            name='payment_method',
            field=models.CharField(choices=[('Cash On Delivery', 'Cash On Delivery'), ('Online Via Qr', 'Online Via Qr')], default='Cash On Delivery', max_length=300),
        ),
        migrations.AddField(
            model_name='orders',
            name='pincode',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orders',
            name='state',
            field=models.CharField(default=0, max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orders',
            name='transaction_id',
            field=models.CharField(blank=True, default='Cash On Delivery', max_length=200),
        ),
        migrations.AlterField(
            model_name='orders',
            name='status',
            field=models.CharField(choices=[('Unverified', 'Unverified'), ('Placed', 'Placed'), ('Completed', 'Completed')], default='Placed', max_length=200),
        ),
        migrations.AlterField(
            model_name='orders',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='user.user'),
        ),
    ]