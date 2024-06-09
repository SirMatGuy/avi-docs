# Module: normalize.py

## Functions

```python
import networkx as nx

def normalize_graph(graph):
    """
    Normalize graph adjacency matrix to ensure all values are between 0 and 1.

    Parameters:
        graph (networkx.Graph): NetworkX graph.

    Returns:
        np.matrix: Normalized adjacency matrix.
    """
