BUILD_VERSION=$1
VER=1.0.${BUILD_VERSION}
IMAGE=jb_custom_slack_commands:$VER
CONTAINER=custom_slack_container

docker stop $CONTAINER && docker rm $CONTAINER || true
docker run --name $CONTAINER -p=3200:3200 --restart=always -d $IMAGE
