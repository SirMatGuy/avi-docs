# Module: deployment/containerization/docker-compose.yaml

## Docker Compose for ML Model Deployment

This `docker-compose.yaml` file is used to define and run multi-container Docker applications for deploying machine learning models using both FastAPI and Flask. It specifies the services, build configurations, commands, and port mappings for the deployment.

### docker-compose.yaml Content

```yaml
version: "3"
services:
  fastapi:
    build:
      context: .
      dockerfile: Dockerfile
    command: ["uvicorn", "fastapi_deployment:app", "--host", "0.0.0.0", "--port", "8000"]
    ports:
      - "8000:8000"

  flask:
    build:
      context: .
      dockerfile: Dockerfile
    command: ["python", "flask_deployment.py"]
    ports:
      - "5000:5000"
