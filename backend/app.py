from flask import Flask,jsonify,request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# @app.route('/') # 'https://www.google.com/'
# def home():
	# return "Hello, world!"

@app.route("/")
def home():
    return "ReCapify Home"

@app.route('/signup', methods=['POST'])
def signUp():
    email=request.json['email']
    password=request.json['password']
    if email == 'admin' and password == 'admin':
        return jsonify({'message': 'Login successful'}),200
    else:
        return jsonify({'message': 'Login failed'}), 401
    #if Already exists
    #return jsonify({'message':'User already exists'}),401
    #else Add user
    #return jsonify({'message':'Signup successful'})
    #return "Signup"


@app.route('/signin', methods=['POST'])
def logIn():
    email=request.json['email']
    password=request.json['password']
    if email == 'admin' and password == 'admin':
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Login failed'}), 401
    



app.run(port=5000)