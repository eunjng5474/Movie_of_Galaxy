from allauth.account.adapter import DefaultAccountAdapter
from django.conf import settings

class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=False):
        user = super().save_user(request, user, form, commit)
        # data = form.cleaned_data

        # nickname =  form.cleaned_data.get("nickname")
        # birth =  form.cleaned_data.get("birth")
        nickname =  request.data.get("nickname")
        birth =  request.data.get("birth")
        if nickname:
            user.nickname = nickname
        if birth:
            user.birth = birth
        # user.nickname = data.get('nickname')
        # user.birth = data.get('birth')
        # print(form)
        # print(form.is_valid())
        # print('-'*30)
        # print(request.POST)
        # print('-'*30)
        # print(request.data)
        user.save()
        # print('11111111'*30)
        # print(user)
        # print(nickname)
        # print(user[nickname])/
        return user        