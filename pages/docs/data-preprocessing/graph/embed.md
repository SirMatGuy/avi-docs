# Module: embed.py

## Functions

```python
import networkx as nx
import np
from sklearn.decomposition import PCA

def graph_embedding(graph):
    """
    Embed a graph using PCA for simplicity.

    Parameters:
        graph (networkx.Graph): NetworkX graph.

    Returns:
        np.array: PCA-reduced node feature matrix.
    """
