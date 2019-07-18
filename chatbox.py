# --- Define your functions below! ---
def intro():
    print("Hey! I am a chatbot. Just wanted to say that you have a lovely smile:)")


def process_input(answer):
    if answer == "thanks" or "thankyou" or "ty" or "thankyou!" or "thanks!" or "Hi" or "hi!":
        say_response(answer)

def say_response (answer):
    print("How are you feeling today?")
    if answer == ("ok") or answer == ("good") or answer == ("great") or answer == ("amazing"):
        def say_greeting (answer):
                if answer == ("yes") or ("sure") or ("ok") or ("yea"):
            say_game()
    elif answer == ("bad") or answer == ("not good"):
            say_greeting2()

def say_hello(name):
    print("Hello " + name)

def main():
    user = "process_input()"
    say_hello(user)

def say_greeting():
    print("KEEP THAT ENERGY! Want to play a game?")

def say_greeting2():
    print("Girl c'mon smile, its a bad day, not a bad life:) Wanna play a game to make you feel better?")

def say_default ():
    print("aw:( , feel better <3)")

def say_game ():
        print("Yay! Let's play rock, paper, sciccors!")


# --- Put your main program below! ---

def main():
    intro()
    answer = input("What is your name?")
    say_hello(" beautiful person!")

    while True:
        answer = input("(What will you say?)")
        answer = answer.lower()
        process_input(answer)











# DON'T TOUCH! Setup code that runs your main() function.

if __name__ == "__main__":

  main()
