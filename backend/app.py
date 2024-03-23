from flask import Flask,jsonify,request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://root:root@cluster0.663wj70.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client['cluster0']
users_collection =db['users']

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

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
    if users_collection.find_one({'email': email}):
        #flash('User already exists.', 'danger')
        return jsonify({'message': 'Signup failed'}), 401
    else:
        user = {'email': email, 'password': password}
        users_collection.insert_one(user)
        # flash('Registration successful. You can now log in.', 'success')
        return jsonify({'message': 'Signup successful'}),200


@app.route('/signin', methods=['POST'])
def logIn():
    email=request.json['email']
    password=request.json['password']
    user= users_collection.find_one({'email': email,'password':password})
    if user:
        return jsonify({'message':'Login successful','user':str(user['_id'])}),201    
        #flash('User already exists.', 'danger')
    else:
        return jsonify({'message': 'Login failed- incorrect email/password'}), 401
    

# app.run(port=5000)

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run(debug=True)