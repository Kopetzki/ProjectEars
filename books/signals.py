from django.db.models.signals import pre_save
from django.contrib.auth.models import User
#function will fire off when there is a signal of user created, will allow email and user name to match

def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != '':
        user.username = user.email

pre_save.connect(updateUser, sender = User)