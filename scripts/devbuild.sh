#!/usr/bin/env bash

# Don't run if other instances are already running
lockrun -L=devbuild.lock -q -- node onfilechanged.js -- $1