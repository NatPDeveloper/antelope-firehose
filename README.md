# antelope-firehose
Example repo for bootstrapping antelope based Firehose API

Run in separate windows

```
dfuseeos purge -f; nodeos --disable-replay-opts | dfuseeos start -c mindreader.yaml
dfuseeos start
```