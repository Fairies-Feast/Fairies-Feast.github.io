import pickle


def load():
    current = pickle.load(open("history.p", "rb"))
    return current


def send(message):
    current = pickle.load(open("history.p", "wb"))
    current.append(message)
    pickle.dump(current, open("history.p", "wb"))
