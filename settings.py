import os

LOCAL_PRODUCTION = False
PRODUCTION = False
try:
    if os.environ['ENV_PRODUCTION'] == '1' or os.environ['ENV_PRODUCTION'] == 1:
        PRODUCTION = True
except:
    print('environment variable ENV_PRODUCTION was not found, settings environment to development')

# set parameters for env: db, debug, ...
if PRODUCTION:
    DEBUG = False
    DB_URI = ""
elif LOCAL_PRODUCTION:
    DB_URI = ""
    DEBUG = True
else:
    DB_URI = "postgresql://postgres:intmail123@intmail.ct1oswtpoac8.eu-west-1.rds.amazonaws.com"
    DEBUG = True