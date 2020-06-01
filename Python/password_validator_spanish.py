pw = input('Elige una contraseña:')

def validate(password):
    if len(pw) < 6:
        print('La contraseña debe tener 6 caracteres como mínimo.')  
    elif len(pw) > 12:
        print('La contraseña no debe tener más de 12 caracteres.')
    elif not pw.isalnum:
        print('La contraseña debe ser alfanumérica.')
    else:
        print('Tu contraseña se ha guardado.')
        return True

validate(pw)