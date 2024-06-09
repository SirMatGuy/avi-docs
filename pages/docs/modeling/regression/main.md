# Module: main.py

## Example of a Modeling Pipeline

This script demonstrates the complete modeling pipeline, from data loading and preparation to model training and evaluation.

### Functions

```python
from config import MODEL_TYPE
from data_preparation import load_and_prepare_data
from model_factory import get_regression_model
from train_and_evaluate import train_and_evaluate

def main():
    """
    Main function to run the modeling pipeline.
    """
    # Load data
    filepath = "your_data.csv"  # Adjust this path accordingly
    X_train, X_test, y_train, y_test = load_and_prepare_data(filepath)

    # Get and compile the model
    model = get_regression_model(MODEL_TYPE)

    # Train and evaluate the model
    trained_model, evaluation_results = train_and_evaluate(model, X_train, X_test, y_train, y_test)

    print("Training and evaluation complete.")

if __name__ == "__main__":
    main()
