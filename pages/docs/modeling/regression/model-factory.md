# Module: model_factory.py

## Functions

```python
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from xgboost import XGBRegressor

def get_regression_model(model_type: str):
    """
    Get a specific regression model.

    Parameters:
        model_type (str): Type of model architecture to use (e.g., "LinearRegression", "RandomForestRegressor", "XGBoost").

    Returns:
        model: Instantiated regression model.
    """
