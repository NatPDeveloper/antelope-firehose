# antelope-firehose
Example repo for bootstrapping antelope based Firehose API

Run in separate windows

```bash
dfuseeos purge -f; nodeos --disable-replay-opts | dfuseeos start -c mindreader.yaml
dfuseeos start
```

Test

```bash
cd test
npm i
# update start/stop blocks in index.js
FIREHOSE_API_ADDR=kylin-firehose.liquidapps.io:443 node index.js
```