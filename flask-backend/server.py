from flask import Flask

app = Flask(__name__)

#API route

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True, host="localhost")