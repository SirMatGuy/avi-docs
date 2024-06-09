# Boston Housing Price Prediction with Fast ML

## Objective
This notebook demonstrates an end-to-end machine learning pipeline using the Fast ML library. Our objective is to predict the median value of homes in various areas around Boston, which is a classic example of a regression problem. This project covers all major steps from data ingestion to deployment, providing a comprehensive example suitable for educational purposes and practical deployments.

## Problem Definition
We are dealing with a regression problem where the goal is to predict a continuous outcome variable (median house value) based on various explanatory variables. This type of problem is common in real estate economics where predictions of property values are needed for investment analyses, policy making, and valuation services.

## Pipeline Overview
1. **Data Ingestion**: Load data using custom connectors from the Fast ML library.
2. **Data Preprocessing**: Clean, normalize, and select features to prepare data for modeling.
3. **Exploratory Data Analysis (EDA)**: Analyze data to uncover patterns and insights that may help in improving the model's performance.
4. **Model Training**: Train a regression model to predict housing prices.
5. **Model Evaluation**: Evaluate the model using regression metrics like RMSE (Root Mean Squared Error) and MAE (Mean Absolute Error).
6. **Model Deployment**: Deploy the model using Docker and MLflow for easy scalability and reproducibility.
7. **Experiment Tracking**: Track experiments and model performance using MLflow.

## Tools and Technologies
- **Data Ingestion**: CSVConnector from Fast ML's data ingestion module.
- **Data Preprocessing**: Utilize Fast ML's preprocessing functions like normalize and feature_selection.
- **Model Training and Evaluation**: Use scikit-learn for modeling and evaluating performance.
- **Deployment**: Docker for containerization and MLflow for managing the model's lifecycle.
- **Experiment Tracking**: MLflow for logging experiments, model parameters, and metrics.

## Detailed Steps and Functions
1. **Data Loading**: `CSVConnector.fetch_data()`
2. **Data Cleaning**: Handling missing values, removing outliers.
3. **Data Normalization**: `normalize()` for feature scaling.
4. **Feature Engineering**: `feature_selection()` to identify the most relevant features.
5. **Model Training**: Use `train_regression_model()` from Fast ML's modeling module.
6. **Model Evaluation**: Calculate RMSE, MAE, and R² to assess performance.
7. **Deployment Preparation**: Create a Dockerfile to containerize the model, and configure MLflow for deployment.
8. **Model Hosting**: Set up a cloud instance (e.g., AWS EC2) to host the Docker container and serve the model via MLflow.

## Deployment and Usage
### Local Testing
Instructions on running the Docker container locally for testing.

### Cloud Deployment
Steps to deploy the model on a cloud platform, ensuring it's accessible via an API.

### Model Monitoring
Set up MLflow to monitor the model in production, tracking any drift or performance issues.

## Conclusion
This notebook aims not only to demonstrate the use of the Fast ML library but also to ensure that users can replicate and scale their machine learning solutions efficiently using modern tools and practices.
