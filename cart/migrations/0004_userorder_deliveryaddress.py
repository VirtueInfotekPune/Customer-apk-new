# Generated by Django 3.2.9 on 2023-07-21 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0003_userorder_totalprice'),
    ]

    operations = [
        migrations.AddField(
            model_name='userorder',
            name='deliveryAddress',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
