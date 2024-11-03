sudo docker buildx build . -t javascripting
sudo docker run -p 8080:80 javascripting
