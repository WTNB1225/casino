FROM golang:1.23
WORKDIR /backend
COPY ./go.mod ./go.sum ./main.go ./
COPY . ./
EXPOSE 3030
CMD ["go", "run", "main.go"]