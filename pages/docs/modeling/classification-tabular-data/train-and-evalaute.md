# Module: train_and_evaluate.py

## Functions

```python
from sklearn.metrics import classification_report, confusion_matrix
from model_factory import get_model

def train_and_evaluate(X_train, X_test, y_train, y_test, model_type: str):
    """
    Train and evaluate a classification model.

    Parameters:
        X_train (pd.DataFrame): Training feature set.
        X_test (pd.DataFrame): Testing feature set.
        y_train (pd.Series): Training target set.
        y_test (pd.Series): Testing target set.
        model_type (str): Type of model to use.

    Returns:
        model: Trained model instance.
        dict: Classification report and confusion matrix results.
    """
