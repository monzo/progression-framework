SHELL				:= /bin/bash
VERSION				?= 0.0.1
BUILD				:= $(shell date -u +%FT%T%z)
GIT_HASH			:= $(shell git rev-parse HEAD)
GIT_REPO			:= $(shell git config --get remote.origin.url)
BUILDKITE_COMMIT		?= $(GIT_HASH)
AWS_ACCOUNT			?= 896069866492
AWS_REGION			?= eu-west-1
APP_NAME			:= progression-framework
IMAGE_REPOSITORY		:= quay.io/reevoo/progression-framework

ifneq (,$(wildcard env/${K8S_NAMESPACE}_app.yaml))
	ENV_SPECIFIC_CONFIG := -f env/${K8S_NAMESPACE}_app.yaml
endif

export APP_NAME
export IMAGE_REPOSITORY
export BUILDKITE_COMMIT

.PHONY: build
build:
	docker build -t ${IMAGE_REPOSITORY}:${BUILDKITE_COMMIT} .

.PHONY: publish
publish: build
	docker push ${IMAGE_REPOSITORY}:${BUILDKITE_COMMIT}

.PHONY: kubeconfig
kubeconfig:
	aws eks update-kubeconfig \
		--region $(AWS_REGION) \
		--name ${K8S_CLUSTER} \
		--role-arn arn:aws:iam::$(AWS_ACCOUNT):role/${K8S_CLUSTER}-admin

.PHONY: deploy
deploy: kubeconfig
	helm upgrade --install \
		--kube-context=arn:aws:eks:$(AWS_REGION):$(AWS_ACCOUNT):cluster/${K8S_CLUSTER} \
		--namespace=${K8S_NAMESPACE} \
		-f app.yaml \
		$(ENV_SPECIFIC_CONFIG) \
		--set image.repository=${IMAGE_REPOSITORY},image.tag=${BUILDKITE_COMMIT} \
		${APP_NAME}-${K8S_NAMESPACE} \
		charts/reevooapp

.PHONY: clean
clean: down
