import pickle


def load():
    current = pickle.load(open("history.p", "rb"))
    return current


def send(message):
    current = pickle.load(open("history.p", "rb"))
    tcu = current
    tcu.append(message)
    pickle.dump(tcu, open("history.p", "wb"))


def main(mailed):
    send(mailed)
    rain = load()
    return rain
