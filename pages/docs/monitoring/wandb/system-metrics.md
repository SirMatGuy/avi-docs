# Module: monitoring_logging/wandb/system_metrics.py

## Functions

```python
import wandb
import psutil
import time

def log_system_metrics():
    """
    Log system resource metrics to Weights & Biases.

    This function initializes a W&B run for system monitoring and logs
    CPU usage, memory usage percentage, and available memory in GB at
    regular intervals.

    Parameters:
        None

    Returns:
        None
    """
