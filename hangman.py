import random

# A list of words that
potential_words = ["secret", "words", "python"]

# pick a word randomly


#Use to test your code
#print(word)
print("The word is", len(word) , "letters long.")


# Converts the word to lowercase
word = word.lower()

# Make it a list of letters for someone to guess
for let in word:
    blank.append("__")



guesses = 10
maxfails = 5
fails = 0
win = 0


while fails < maxfails:
#while guess not in guesses
    #guesses.append(guess)
	guess = input("Guess a letter: ")

for i in range():
    letter = input ("Guess a letter:")
    if letter in word:
        print("Yes, this word contains:", letter)
    else:
        print ("No, it doesn't contain:", letter)



print(current_word)

if guess == word + len(word):
    print("Yes!The secret word is + ", secret word, ",Congratulations")
else:
    print("Sorry, that's not the word")




	fails = fails+1

	print("You have " + str(maxfails - fails) + " tries left!")
