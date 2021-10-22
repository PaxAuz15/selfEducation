try:
    message_original:str = input("Write a sentece: ")
    try:
        word_to_replace:str = input(f"Write a word to replace from next sentence: {message_original}\nWord to replace: ")
        try:
            new_word:str = input(f"Write a new word to replace the word: {word_to_replace}\nNew word: ")
            try:
                message_original = message_original.replace(word_to_replace,new_word)
                print(f"The new message: {message_original}")
            except Exception as e:
                print(f"Error happened while replacing a word: {e}")
        except Exception as e:
            print(f"Error happened while insertin a new word: {e}")
    except Exception as e:
        print("Error happened while inserting a word to replace: {e}")
except Exception as e:
    print(f"Error happened while writing a sentence: {e}")