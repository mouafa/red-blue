launch servers:
- node index

launch haproxy
- haproxy -f haproxy.cfg

launch haproxy with map
- COOKIE_NAME=VDCID haproxy -f haproxy.map.cfg -d

* -d : debug options
