# Kubectl Commands

## Pods

### Create a Pod
```sh
kubectl run my-pod --image=nginx
```
Creates a pod named `my-pod` using the `nginx` image.

### Delete a Pod
```sh
kubectl delete pod my-pod
```
Deletes the pod named `my-pod`.

### Edit a Pod
```sh
kubectl edit pod my-pod
```
Edits the configuration of the pod named `my-pod`.

### Describe a Pod
```sh
kubectl describe pod my-pod
```
Displays detailed information about the pod named `my-pod`.

### Inspect a Pod
```sh
kubectl get pod my-pod -o yaml
```
Outputs the pod configuration in YAML format.

### Replace a Pod
```sh
kubectl replace -f pod.yaml
```
Replaces the pod using the configuration in `pod.yaml`.

## ReplicaSets

### Create a ReplicaSet
```sh
kubectl apply -f replicaset.yaml
```
Creates a ReplicaSet using the configuration in `replicaset.yaml`.

### Delete a ReplicaSet
```sh
kubectl delete replicaset my-replicaset
```
Deletes the ReplicaSet named `my-replicaset`.

### Edit a ReplicaSet
```sh
kubectl edit replicaset my-replicaset
```
Edits the configuration of the ReplicaSet named `my-replicaset`.

### Describe a ReplicaSet
```sh
kubectl describe replicaset my-replicaset
```
Displays detailed information about the ReplicaSet named `my-replicaset`.

### Inspect a ReplicaSet
```sh
kubectl get replicaset my-replicaset -o yaml
```
Outputs the ReplicaSet configuration in YAML format.

### Replace a ReplicaSet
```sh
kubectl replace -f replicaset.yaml
```
Replaces the ReplicaSet using the configuration in `replicaset.yaml`.

### Scale a ReplicaSet
```sh
kubectl scale --replicas=3 replicaset my-replicaset
```
Scales the ReplicaSet named `my-replicaset` to 3 replicas.

## Deployments

### Create a Deployment
```sh
kubectl apply -f deployment.yaml --record=true
```
Creates a Deployment using the configuration in `deployment.yaml` and records the command in the resource's annotation.

### Delete a Deployment
```sh
kubectl delete deployment my-deployment
```
Deletes the Deployment named `my-deployment`.

### Edit a Deployment
```sh
kubectl edit deployment my-deployment
```
Edits the configuration of the Deployment named `my-deployment`.

### Describe a Deployment
```sh
kubectl describe deployment my-deployment
```
Displays detailed information about the Deployment named `my-deployment`.

### Inspect a Deployment
```sh
kubectl get deployment my-deployment -o yaml
```
Outputs the Deployment configuration in YAML format.

### Replace a Deployment
```sh
kubectl replace -f deployment.yaml --record=true
```
Replaces the Deployment using the configuration in `deployment.yaml` and records the command in the resource's annotation.

### Scale a Deployment
```sh
kubectl scale --replicas=3 deployment my-deployment --record=true
```
Scales the Deployment named `my-deployment` to 3 replicas and records the command in the resource's annotation.

### Rollout History of a Deployment
```sh
kubectl rollout history deployment my-deployment
```
Displays the rollout history of the Deployment named `my-deployment`.

### Rollback a Deployment
```sh
kubectl rollout undo deployment my-deployment --record=true
```
Rolls back the Deployment named `my-deployment` to the previous revision and records the command in the resource's annotation.

### Update a Deployment
```sh
kubectl set image deployment/my-deployment nginx=nginx:1.16.1 --record=true
```
Updates the image of the Deployment named `my-deployment` to `nginx:1.16.1` and records the command in the resource's annotation.


## Services

### Create a Service
```sh
kubectl apply -f service.yaml
```
Creates a Service using the configuration in `service.yaml`.

### Delete a Service
```sh
kubectl delete service my-service
```
Deletes the Service named `my-service`.

### Edit a Service
```sh
kubectl edit service my-service
```
Edits the configuration of the Service named `my-service`.

### Describe a Service
```sh
kubectl describe service my-service
```
Displays detailed information about the Service named `my-service`.

### Inspect a Service
```sh
kubectl get service my-service -o yaml
```
Outputs the Service configuration in YAML format.

### Replace a Service
```sh
kubectl replace -f service.yaml
```
Replaces the Service using the configuration in `service.yaml`.

### Get a running service URL
This command retrieves the URL for the specified Kubernetes service (my-service) running in Minikube.
It is useful for accessing the service from outside the Minikube cluster.

```sh
minikube service my-service --url 
```

## ConfigMaps

### Create a ConfigMap
```sh
kubectl create configmap my-config --from-file=config-file.conf
```
Creates a ConfigMap named `my-config` from a file.

### Delete a ConfigMap
```sh
kubectl delete configmap my-config
```
Deletes the ConfigMap named `my-config`.

### Edit a ConfigMap
```sh
kubectl edit configmap my-config
```
Edits the configuration of the ConfigMap named `my-config`.

### Describe a ConfigMap
```sh
kubectl describe configmap my-config
```
Displays detailed information about the ConfigMap named `my-config`.

### Inspect a ConfigMap
```sh
kubectl get configmap my-config -o yaml
```
Outputs the ConfigMap configuration in YAML format.

### Replace a ConfigMap
```sh
kubectl replace -f configmap.yaml
```
Replaces the ConfigMap using the configuration in `configmap.yaml`.

## Secrets

### Create a Secret
```sh
kubectl create secret generic my-secret --from-literal=password=my-password
```
Creates a Secret named `my-secret` with a literal value.

### Delete a Secret
```sh
kubectl delete secret my-secret
```
Deletes the Secret named `my-secret`.

### Edit a Secret
```sh
kubectl edit secret my-secret
```
Edits the configuration of the Secret named `my-secret`.

### Describe a Secret
```sh
kubectl describe secret my-secret
```
Displays detailed information about the Secret named `my-secret`.

### Inspect a Secret
```sh
kubectl get secret my-secret -o yaml
```
Outputs the Secret configuration in YAML format.

### Replace a Secret
```sh
kubectl replace -f secret.yaml
```
Replaces the Secret using the configuration in `secret.yaml`.
