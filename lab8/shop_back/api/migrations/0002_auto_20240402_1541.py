from django.db import migrations
from api.models import Product, Category

def seed_data(apps, schema_editor):
    Category.objects.create(name='Category 1')
    Category.objects.create(name='Category 2')

    Product.objects.create(name='Product 1', price=10.99, description='Description 1', count=5, is_active=True)
    Product.objects.create(name='Product 2', price=20.99, description='Description 2', count=10, is_active=False)

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_data),
    ]
