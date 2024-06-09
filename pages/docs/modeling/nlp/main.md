# Module: main.py

## Example of an NLP Pipeline

This script demonstrates the complete modeling pipeline for NLP, from data loading and preparation to model training and evaluation.

### Functions

```python
from config import MODEL_TYPE, EPOCHS, BATCH_SIZE
from data_preparation import load_and_prepare_data
from model_factory import get_nlp_model
from train_and_evaluate import train_and_evaluate_keras_model, train_and_evaluate_huggingface_model

def main():
    """
    Main function to run the NLP pipeline.
    """
    # Load data
    (X_train, X_test, y_train, y_test), tokenizer = load_and_prepare_data()

    # Get the model
    model, huggingface_tokenizer = get_nlp_model(MODEL_TYPE, num_classes=y_train.shape[1])

    if MODEL_TYPE == "HuggingFace":
        train_and_evaluate_huggingface_model(model, huggingface_tokenizer, X_train, y_train, EPOCHS, BATCH_SIZE)
    else:
        train_and_evaluate_keras_model(model, X_train, X_test, y_train, y_test, EPOCHS, BATCH_SIZE)

    print("Training and evaluation complete.")

if __name__ == "__main__":
    main()
