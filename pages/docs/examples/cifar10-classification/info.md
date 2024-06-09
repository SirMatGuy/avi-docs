# CIFAR-10 Classification with Fast ML

## Objective
This notebook demonstrates the end-to-end process of building and deploying a machine learning model for image classification on the CIFAR-10 dataset using the Fast ML library. The notebook covers data ingestion, preprocessing, model training, evaluation, and deployment.

## Problem Definition
We are dealing with an image classification problem where the goal is to classify images into one of the ten classes in the CIFAR-10 dataset. This type of problem is common in computer vision applications.

## Pipeline Overview
1. **Data Ingestion**: Load data from a MongoDB database using the `MongoDBConnector`.
2. **Data Preprocessing**: Perform image augmentation, normalization, and resizing.
3. **Model Training**: Train a deep learning model using TensorFlow/Keras.
4. **Model Evaluation**: Evaluate the model using accuracy and other relevant metrics.
5. **Model Deployment**: Deploy the trained model using Docker and MLflow.
6. **Experiment Tracking**: Track experiments and model performance using MLflow.

## Tools and Technologies
- **Data Ingestion**: `MongoDBConnector` from Fast ML's data ingestion module.
- **Data Preprocessing**: Utilize Fast ML's preprocessing functions for images.
- **Model Training and Evaluation**: Use TensorFlow/Keras for modeling and evaluating performance.
- **Deployment**: Docker for containerization and MLflow for managing the model's lifecycle.
- **Experiment Tracking**: MLflow for logging experiments, model parameters, and metrics.
