# Generated by Django 3.0.8 on 2020-07-26 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatbot', '0005_auto_20200726_0124'),
    ]

    operations = [
        migrations.CreateModel(
            name='Emails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Email', models.EmailField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
