from browser import document, console

def show(e):
    document['My-Brudda'] <= 'Hi there! '
    console.log("Hi")

document['Cool-Button'].bind('click', show)
