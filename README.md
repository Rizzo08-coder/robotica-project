# Set environment 

## create virtual environment (move to ros2_ws directory)
```bash
virtualenv .venv --system-site-packages
```

## start environment
```bash
source .venv/bin/activate

source /opt/ros/humble/setup.bash

source install/setup.bash
```

## import ROS library in PyCharm
Linux
```bash
vim /home/{name}/.local/JetBrains/Toolbox/apps/{pycharm_version}/bin/pycharm.sh
```

WSL
```bash
vim /home/{name}/.cache/JetBrains/RemoteDev/dist/{cached_pycharm_version}/bin/pycharm.sh
```

insert the next line:
```bash
. /opt/ros/humble/setup.sh' 
```


# FLASK + REACT 

## client
node_modules directory
```bash
npm install
```

## flask-backend (set python virtual environment)

```bash
python3 -m venv venv
```

```bash
source venv/bin/activate 
```


```bash
pip install Flask
```

## On Windows 
Start the environment 
```bash
.\venv\Scripts\activate
```

# Start Environment

## start client (on localhost:3000)

```bash
npm start
```

## start flask-backend (on localhost:5000)

```bash
python3 server.py
```
