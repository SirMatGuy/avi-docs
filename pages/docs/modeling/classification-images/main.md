# Module: main.py

## Example of an Image Classification Pipeline

This script demonstrates the complete modeling pipeline for image classification, from data loading and preparation to model training and evaluation.

### Functions

```python
from config import MODEL_TYPE, IMAGE_SIZE, EPOCHS
from data_preparation import prepare_image_data
from model_factory import get_image_model
from train_and_evaluate import train_and_evaluate

def main():
    """
    Main function to run the image classification pipeline.
    """
    # Prepare data
    train_generator, validation_generator = prepare_image_data()

    # Get and compile the model
    model = get_image_model(MODEL_TYPE, input_shape=(IMAGE_SIZE[0], IMAGE_SIZE[1], 3))

    # Train and evaluate the model
    train_and_evaluate(model, train_generator, validation_generator, epochs=EPOCHS)

    print("Training and evaluation complete.")

if __name__ == "__main__":
    main()
