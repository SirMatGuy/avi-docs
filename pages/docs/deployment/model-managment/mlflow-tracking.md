# Module: deployment/model_management/mlflow_tracking.py

## Functions

```python
import mlflow
import mlflow.sklearn

def setup_mlflow_experiment(experiment_name: str):
    """
    Set up an MLflow experiment.

    Parameters:
        experiment_name (str): Name of the MLflow experiment to use or create.
    """

def log_params_and_metrics(params: dict, metrics: dict):
    """
    Log model parameters and evaluation metrics to MLflow.

    Parameters:
        params (dict): Dictionary of parameters to log.
        metrics (dict): Dictionary of evaluation metrics to log.
    """

def log_model(model, model_name: str):
    """
    Log a trained model to MLflow.

    Parameters:
        model: Trained model instance to log.
        model_name (str): Name to use for saving the model.
    """
