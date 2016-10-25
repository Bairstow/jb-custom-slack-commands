BUILD_VERSION=$1
VER=1.0.${BUILD_VERSION}
IMAGE=jb_custom_slack_commands:$VER

docker build -t $IMAGE .
