# Clustering Example with Iris Dataset

This example demonstrates how to perform clustering on the Iris dataset using the Fast-ML library. It includes data ingestion, preprocessing, model training, evaluation, and deployment.

## Prerequisites

Ensure you have the following installed:

- Python 3.x
- Required libraries: `pandas`, `numpy`, `scikit-learn`, `joblib`, `matplotlib`, `seaborn`, `mlflow`
- Fast-ML library (ensure it's correctly installed and accessible in your environment)

## Steps

### Setup

Adjust the path to include the project root directory.

### Data Ingestion

Use the CSV connector to load the Iris dataset.

### Preliminary Exploratory Data Analysis (EDA)

Perform initial analysis and visualize the dataset.

### Data Cleaning

Clean the dataset by filling missing values, removing duplicates, and correcting data types.

### Data Normalization

Normalize the feature columns.

### Load and Prepare Data

Load and prepare the data for clustering.

### Model Selection and Training

Select and instantiate the clustering model using the factory design pattern, then train and evaluate it.

### Model Management and Deployment

Set up MLflow for experiment tracking, log parameters and metrics, and log the trained model.

## Conclusion

We have successfully clustered the Iris dataset and evaluated the model using the silhouette score. This example demonstrates the end-to-end process of building a clustering pipeline using the Fast-ML library.
