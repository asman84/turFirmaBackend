from django.db import models

class Nav(models.Model):
    title = models.CharField(max_length=50)
    url = models.CharField(max_length=250)
    dropDown = models.CharField(max_length=100)


    def __str__(self):
        return self.title

class NavDropdown(models.Model):
    title = models.CharField(max_length=50)
    category = models.ForeignKey(Nav, on_delete=models.CASCADE)


    def __str__(self):
        return self.title
