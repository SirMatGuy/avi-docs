# Module: deployment/serving/flask_deployment.py

## Flask Deployment for Machine Learning Model

This script demonstrates how to deploy a machine learning model using Flask. It sets up a Flask application that loads a trained model from a pickle file and provides an endpoint for making predictions.

### Functions

```python
from flask import Flask, request, jsonify
import pickle

# Load a model from a pickle file
with open("trained_model.pkl", "rb") as file:
    model = pickle.load(file)

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    features = [[data["feature1"], data["feature2"], data["feature3"]]]
    prediction = model.predict(features)
    return jsonify({"prediction": prediction[0]})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
