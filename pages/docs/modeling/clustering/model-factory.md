# Module: model_factory.py

## Functions

```python
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering

def get_clustering_model(model_type: str, n_clusters: int):
    """
    Get a specific clustering model.

    Parameters:
        model_type (str): Type of clustering model to use (e.g., "KMeans", "DBSCAN", "AgglomerativeClustering").
        n_clusters (int): Number of clusters for clustering models that use it.

    Returns:
        model: Instantiated clustering model.
    """
