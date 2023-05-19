from allauth.account.adapter import DefaultAccountAdapter

class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=True):
        user = super().save_user(request, user, form, commit=False)
        nickname =  form.cleaned_data.get("nickname")
        birth =  form.cleaned_data.get("birth")
        print('1111111111'*10)

        if nickname:
            user.nickname = nickname
        if birth:
            user.birth = birth
        # user.nickname = form.cleaned_data.get('nickname')
        # user.birth = form.cleaned_data.get('birth')
        user.save()

        return user        