# Generated by Django 3.0.8 on 2020-07-25 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatbot', '0003_auto_20200725_1653'),
    ]

    operations = [
        migrations.AlterField(
            model_name='help',
            name='Country',
            field=models.TextField(default=True, max_length=3000, null=True),
        ),
        migrations.AlterField(
            model_name='help',
            name='State',
            field=models.TextField(default=True, max_length=300, null=True),
        ),
    ]