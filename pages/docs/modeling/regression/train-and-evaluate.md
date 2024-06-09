# Module: train_and_evaluate.py

## Functions

```python
import importlib
from modeling.regression.config import EVALUATION_METRICS

def train_and_evaluate(model, X_train, X_test, y_train, y_test):
    """
    Train and evaluate a regression model.

    Parameters:
        model: The instantiated model instance.
        X_train (pd.DataFrame): Training feature set.
        X_test (pd.DataFrame): Testing feature set.
        y_train (pd.Series): Training target set.
        y_test (pd.Series): Testing target set.

    Returns:
        model: Trained model instance.
        dict: Evaluation metrics based on configuration.
    """
