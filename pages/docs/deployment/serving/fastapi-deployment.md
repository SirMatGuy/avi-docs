# Module: deployment/serving/fastapi_deployment.py

## FastAPI Deployment for Machine Learning Model

This script demonstrates how to deploy a machine learning model using FastAPI. It sets up a FastAPI application that loads a trained model from a pickle file and provides an endpoint for making predictions.

### Functions

```python
from fastapi import FastAPI
from pydantic import BaseModel
import pickle

class InputData(BaseModel):
    feature1: float
    feature2: float
    feature3: float

# Load a model from a pickle file
with open("trained_model.pkl", "rb") as file:
    model = pickle.load(file)

app = FastAPI()

@app.post("/predict/")
def predict(data: InputData):
    features = [[data.feature1, data.feature2, data.feature3]]
    prediction = model.predict(features)
    return {"prediction": prediction[0]}
