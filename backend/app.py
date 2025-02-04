from flask import Flask,request,jsonify;
from flask_cors import CORS;

app = Flask(__name__)
CORS(app)

@app.route('/',methods=['GET'])
def hello():
    return 'Hello, World!'

@app.route('/analyze_sentiment',methods=['GET'])
def analyse_sentiment():
    return 'Analyse Sentiment'
 
if __name__ == '__main__':
    app.run(debug=True)








# from flask import Flask, request, jsonify;
# from flask_cors import CORS;

# app = Flask(__name__)
# CORS(app)

# @app.route('/get_data', methods=['GET'])
# def get_data():
#     data = {
#         'name': 'John Doe',
#         'age': 30,
#         'city': 'New York'
#     }
#     return jsonify(data)

# @app.route('/post_data', methods=['POST'])
# def post_data():
#     data = request.get_json()
#     return jsonify(data)

# if __name__ == '__main__':
#     app.run(debug=True)