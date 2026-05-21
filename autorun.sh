#!/bin/bash

# Get the OS type
OS_TYPE=$(uname)

if [ "$OS_TYPE" == "Linux" ]; then
    sudo /opt/lampp/lampp start
    java -jar backend/noteapp/target/noteapp-0.0.1-SNAPSHOT.jar
    xdg-open http://localhost:8080
elif [ "$OS_TYPE" == "Darwin" ]; then
    sudo /Applications/XAMPP/xamppfiles/xampp start
    java -jar backend/noteapp/target/noteapp-0.0.1-SNAPSHOT.jar
    open http://localhost:8080
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    cd C:\xampp\
    apache_start.bat
    java -jar backend/noteapp/target/noteapp-0.0.1-SNAPSHOT.jar
    start http://localhost:8080
fi



