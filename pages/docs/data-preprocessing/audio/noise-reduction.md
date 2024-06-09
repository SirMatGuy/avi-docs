# Module: noise_reduction.py

## Functions

```python
import np
import librosa
import noisereduce as nr

def reduce_noise(audio, sample_rate):
    """
    Enhanced noise reduction that first identifies non-silent intervals.

    Parameters:
        audio (np.array): Audio time series.
        sample_rate (int): Sample rate of `audio`.

    Returns:
        np.array: Noise-reduced audio, focusing on non-silent intervals.
    """
