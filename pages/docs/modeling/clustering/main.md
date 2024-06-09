# Module: main.py

## Example of a Clustering Pipeline

This script demonstrates the complete modeling pipeline for clustering, from data loading and preparation to model training and evaluation.

### Functions

```python
from config import MODEL_TYPE, N_CLUSTERS
from data_preparation import load_and_prepare_data
from model_factory import get_clustering_model
from train_and_evaluate import train_and_evaluate

def main():
    """
    Main function to run the clustering pipeline.
    """
    # Load data
    filepath = "your_data.csv"  # Adjust this path accordingly
    X = load_and_prepare_data(filepath)

    # Get and compile the model
    model = get_clustering_model(MODEL_TYPE, N_CLUSTERS)

    # Train and evaluate the model
    trained_model, evaluation_results = train_and_evaluate(model, X)

    print("Training and evaluation complete.")

if __name__ == "__main__":
    main()
