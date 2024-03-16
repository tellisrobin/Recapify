from flask import Flask

app = Flask(__name__)

# @app.route('/') # 'https://www.google.com/'
# def home():
	# return "Hello, world!"

@app.route("/")
def home():
    return "ReCapify Home"

@app.route('/signup', methods=['POST','GET'])
def signUp():
    return "Signup"


@app.route('/signin', methods=['POST','GET'])
def logIn():
    return "SignIn"




app.run(port=5000)