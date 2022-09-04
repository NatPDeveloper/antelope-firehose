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

Check health of services

```bash
# merger
grpcurl -plaintext localhost:13012 grpc.health.v1.Health/Check
{
  "status": "SERVING"
}

# relayer
grpcurl -plaintext localhost:13011 grpc.health.v1.Health/Check
{
  "status": "SERVING"
}

# firehose
grpcurl -insecure localhost:13035 grpc.health.v1.Health/Check
{
  "status": "SERVING"
}
```

Prometheus checks

```bash
curl -X POST localhost:9102
```

<details>

```bash
# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 4.7707e-05
go_gc_duration_seconds{quantile="0.25"} 6.1503e-05
go_gc_duration_seconds{quantile="0.5"} 7.1837e-05
go_gc_duration_seconds{quantile="0.75"} 0.000103864
go_gc_duration_seconds{quantile="1"} 0.000310967
go_gc_duration_seconds_sum 2.752477196
go_gc_duration_seconds_count 28392
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 77
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.18.4"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 1.15560536e+08
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 2.701237788264e+12
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 1.802375e+06
# HELP go_memstats_frees_total Total number of frees.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 8.25844782e+08
# HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
# TYPE go_memstats_gc_cpu_fraction gauge
go_memstats_gc_cpu_fraction 0.002075403725101534
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 3.9589128e+07
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 1.15560536e+08
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 9.25425664e+08
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 1.34684672e+08
# HELP go_memstats_heap_objects Number of allocated objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 798272
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 8.2235392e+08
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 1.060110336e+09
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.6623190007045805e+09
# HELP go_memstats_lookups_total Total number of pointer lookups.
# TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
# HELP go_memstats_mallocs_total Total number of mallocs.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 8.26643054e+08
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 2400
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 15600
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 908752
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 1.35456e+06
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 2.30306112e+08
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 719673
# HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 983040
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 983040
# HELP go_memstats_sys_bytes Number of bytes obtained from system.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 1.104574712e+09
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 11
# HELP grpc_server_handled_total Total number of RPCs completed on the server, regardless of success or failure.
# TYPE grpc_server_handled_total counter
grpc_server_handled_total{grpc_code="OK",grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary"} 515244
# HELP grpc_server_handling_seconds Histogram of response latency (seconds) of gRPC that had been application-level handled by the server.
# TYPE grpc_server_handling_seconds histogram
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="0"} 0
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="0.5"} 515244
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="1"} 515244
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="2"} 515244
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="3"} 515244
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="5"} 515244
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="8"} 515244
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="10"} 515244
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="20"} 515244
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="30"} 515244
grpc_server_handling_seconds_bucket{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary",le="+Inf"} 515244
grpc_server_handling_seconds_sum{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary"} 44.760398886000075
grpc_server_handling_seconds_count{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary"} 515244
# HELP grpc_server_msg_received_total Total number of RPC stream messages received on the server.
# TYPE grpc_server_msg_received_total counter
grpc_server_msg_received_total{grpc_method="Blocks",grpc_service="dfuse.bstream.v1.BlockStream",grpc_type="server_stream"} 1
grpc_server_msg_received_total{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary"} 515244
# HELP grpc_server_msg_sent_total Total number of gRPC stream messages sent by the server.
# TYPE grpc_server_msg_sent_total counter
grpc_server_msg_sent_total{grpc_method="Blocks",grpc_service="dfuse.bstream.v1.BlockStream",grpc_type="server_stream"} 1186
grpc_server_msg_sent_total{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary"} 515244
# HELP grpc_server_started_total Total number of RPCs started on the server.
# TYPE grpc_server_started_total counter
grpc_server_started_total{grpc_method="Blocks",grpc_service="dfuse.bstream.v1.BlockStream",grpc_type="server_stream"} 1
grpc_server_started_total{grpc_method="GetHeadInfo",grpc_service="dfuse.headinfo.v1.HeadInfo",grpc_type="unary"} 515244
# HELP head_block_number 
# TYPE head_block_number gauge
head_block_number{app="mindreader-stdin"} 2.47709449e+08
# HELP head_block_time_drift Number of seconds away from real-time
# TYPE head_block_time_drift gauge
head_block_time_drift{app="mindreader-stdin"} -0.271975197
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 2599.06
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1e+06
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 20
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 3.1809536e+08
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.66221477931e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 2.498727936e+09
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes 1.8446744073709552e+19
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 0
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0
# HELP tidb_tikvclient_local_latch_wait_seconds Wait time of a get local latch.
# TYPE tidb_tikvclient_local_latch_wait_seconds histogram
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.0005"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.001"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.002"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.004"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.008"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.016"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.032"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.064"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.128"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.256"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="0.512"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="1.024"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="2.048"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="4.096"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="8.192"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="16.384"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="32.768"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="65.536"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="131.072"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="262.144"} 0
tidb_tikvclient_local_latch_wait_seconds_bucket{le="+Inf"} 0
tidb_tikvclient_local_latch_wait_seconds_sum 0
tidb_tikvclient_local_latch_wait_seconds_count 0
# HELP tikv_client_go_backoff_seconds total backoff seconds of a single backoffer.
# TYPE tikv_client_go_backoff_seconds histogram
tikv_client_go_backoff_seconds_bucket{le="0.0005"} 0
tikv_client_go_backoff_seconds_bucket{le="0.001"} 0
tikv_client_go_backoff_seconds_bucket{le="0.002"} 0
tikv_client_go_backoff_seconds_bucket{le="0.004"} 0
tikv_client_go_backoff_seconds_bucket{le="0.008"} 0
tikv_client_go_backoff_seconds_bucket{le="0.016"} 0
tikv_client_go_backoff_seconds_bucket{le="0.032"} 0
tikv_client_go_backoff_seconds_bucket{le="0.064"} 0
tikv_client_go_backoff_seconds_bucket{le="0.128"} 0
tikv_client_go_backoff_seconds_bucket{le="0.256"} 0
tikv_client_go_backoff_seconds_bucket{le="0.512"} 0
tikv_client_go_backoff_seconds_bucket{le="1.024"} 0
tikv_client_go_backoff_seconds_bucket{le="2.048"} 0
tikv_client_go_backoff_seconds_bucket{le="4.096"} 0
tikv_client_go_backoff_seconds_bucket{le="8.192"} 0
tikv_client_go_backoff_seconds_bucket{le="16.384"} 0
tikv_client_go_backoff_seconds_bucket{le="32.768"} 0
tikv_client_go_backoff_seconds_bucket{le="65.536"} 0
tikv_client_go_backoff_seconds_bucket{le="131.072"} 0
tikv_client_go_backoff_seconds_bucket{le="262.144"} 0
tikv_client_go_backoff_seconds_bucket{le="+Inf"} 0
tikv_client_go_backoff_seconds_sum 0
tikv_client_go_backoff_seconds_count 0
# HELP tikv_client_go_batch_wait_duration batch wait duration
# TYPE tikv_client_go_batch_wait_duration histogram
tikv_client_go_batch_wait_duration_bucket{le="1"} 0
tikv_client_go_batch_wait_duration_bucket{le="2"} 0
tikv_client_go_batch_wait_duration_bucket{le="4"} 0
tikv_client_go_batch_wait_duration_bucket{le="8"} 0
tikv_client_go_batch_wait_duration_bucket{le="16"} 0
tikv_client_go_batch_wait_duration_bucket{le="32"} 0
tikv_client_go_batch_wait_duration_bucket{le="64"} 0
tikv_client_go_batch_wait_duration_bucket{le="128"} 0
tikv_client_go_batch_wait_duration_bucket{le="256"} 0
tikv_client_go_batch_wait_duration_bucket{le="512"} 0
tikv_client_go_batch_wait_duration_bucket{le="1024"} 0
tikv_client_go_batch_wait_duration_bucket{le="2048"} 0
tikv_client_go_batch_wait_duration_bucket{le="4096"} 0
tikv_client_go_batch_wait_duration_bucket{le="8192"} 0
tikv_client_go_batch_wait_duration_bucket{le="16384"} 0
tikv_client_go_batch_wait_duration_bucket{le="32768"} 0
tikv_client_go_batch_wait_duration_bucket{le="65536"} 0
tikv_client_go_batch_wait_duration_bucket{le="131072"} 0
tikv_client_go_batch_wait_duration_bucket{le="262144"} 0
tikv_client_go_batch_wait_duration_bucket{le="524288"} 0
tikv_client_go_batch_wait_duration_bucket{le="1.048576e+06"} 0
tikv_client_go_batch_wait_duration_bucket{le="2.097152e+06"} 0
tikv_client_go_batch_wait_duration_bucket{le="4.194304e+06"} 0
tikv_client_go_batch_wait_duration_bucket{le="8.388608e+06"} 0
tikv_client_go_batch_wait_duration_bucket{le="1.6777216e+07"} 0
tikv_client_go_batch_wait_duration_bucket{le="3.3554432e+07"} 0
tikv_client_go_batch_wait_duration_bucket{le="6.7108864e+07"} 0
tikv_client_go_batch_wait_duration_bucket{le="1.34217728e+08"} 0
tikv_client_go_batch_wait_duration_bucket{le="2.68435456e+08"} 0
tikv_client_go_batch_wait_duration_bucket{le="5.36870912e+08"} 0
tikv_client_go_batch_wait_duration_bucket{le="+Inf"} 0
tikv_client_go_batch_wait_duration_sum 0
tikv_client_go_batch_wait_duration_count 0
# HELP tikv_client_go_pending_batch_requests Pending batch requests
# TYPE tikv_client_go_pending_batch_requests gauge
tikv_client_go_pending_batch_requests 0
# HELP tikv_client_go_snapshot_total Counter of snapshots.
# TYPE tikv_client_go_snapshot_total counter
tikv_client_go_snapshot_total 0
# HELP tikv_client_go_txn_durations_seconds Bucketed histogram of processing txn
# TYPE tikv_client_go_txn_durations_seconds histogram
tikv_client_go_txn_durations_seconds_bucket{le="0.0005"} 0
tikv_client_go_txn_durations_seconds_bucket{le="0.001"} 0
tikv_client_go_txn_durations_seconds_bucket{le="0.002"} 0
tikv_client_go_txn_durations_seconds_bucket{le="0.004"} 0
tikv_client_go_txn_durations_seconds_bucket{le="0.008"} 0
tikv_client_go_txn_durations_seconds_bucket{le="0.016"} 0
tikv_client_go_txn_durations_seconds_bucket{le="0.032"} 0
tikv_client_go_txn_durations_seconds_bucket{le="0.064"} 0
tikv_client_go_txn_durations_seconds_bucket{le="0.128"} 0
tikv_client_go_txn_durations_seconds_bucket{le="0.256"} 0
tikv_client_go_txn_durations_seconds_bucket{le="0.512"} 0
tikv_client_go_txn_durations_seconds_bucket{le="1.024"} 0
tikv_client_go_txn_durations_seconds_bucket{le="2.048"} 0
tikv_client_go_txn_durations_seconds_bucket{le="4.096"} 0
tikv_client_go_txn_durations_seconds_bucket{le="8.192"} 0
tikv_client_go_txn_durations_seconds_bucket{le="16.384"} 0
tikv_client_go_txn_durations_seconds_bucket{le="32.768"} 0
tikv_client_go_txn_durations_seconds_bucket{le="65.536"} 0
tikv_client_go_txn_durations_seconds_bucket{le="131.072"} 0
tikv_client_go_txn_durations_seconds_bucket{le="262.144"} 0
tikv_client_go_txn_durations_seconds_bucket{le="+Inf"} 0
tikv_client_go_txn_durations_seconds_sum 0
tikv_client_go_txn_durations_seconds_count 0
# HELP tikv_client_go_txn_total Counter of created txns.
# TYPE tikv_client_go_txn_total counter
tikv_client_go_txn_total 0
# HELP tikv_client_go_txn_write_kv_num Count of kv pairs to write in a transaction.
# TYPE tikv_client_go_txn_write_kv_num histogram
tikv_client_go_txn_write_kv_num_bucket{le="1"} 0
tikv_client_go_txn_write_kv_num_bucket{le="2"} 0
tikv_client_go_txn_write_kv_num_bucket{le="4"} 0
tikv_client_go_txn_write_kv_num_bucket{le="8"} 0
tikv_client_go_txn_write_kv_num_bucket{le="16"} 0
tikv_client_go_txn_write_kv_num_bucket{le="32"} 0
tikv_client_go_txn_write_kv_num_bucket{le="64"} 0
tikv_client_go_txn_write_kv_num_bucket{le="128"} 0
tikv_client_go_txn_write_kv_num_bucket{le="256"} 0
tikv_client_go_txn_write_kv_num_bucket{le="512"} 0
tikv_client_go_txn_write_kv_num_bucket{le="1024"} 0
tikv_client_go_txn_write_kv_num_bucket{le="2048"} 0
tikv_client_go_txn_write_kv_num_bucket{le="4096"} 0
tikv_client_go_txn_write_kv_num_bucket{le="8192"} 0
tikv_client_go_txn_write_kv_num_bucket{le="16384"} 0
tikv_client_go_txn_write_kv_num_bucket{le="32768"} 0
tikv_client_go_txn_write_kv_num_bucket{le="65536"} 0
tikv_client_go_txn_write_kv_num_bucket{le="131072"} 0
tikv_client_go_txn_write_kv_num_bucket{le="262144"} 0
tikv_client_go_txn_write_kv_num_bucket{le="524288"} 0
tikv_client_go_txn_write_kv_num_bucket{le="1.048576e+06"} 0
tikv_client_go_txn_write_kv_num_bucket{le="+Inf"} 0
tikv_client_go_txn_write_kv_num_sum 0
tikv_client_go_txn_write_kv_num_count 0
# HELP tikv_client_go_txn_write_size_bytes Size of kv pairs to write in a transaction.
# TYPE tikv_client_go_txn_write_size_bytes histogram
tikv_client_go_txn_write_size_bytes_bucket{le="1"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="2"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="4"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="8"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="16"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="32"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="64"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="128"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="256"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="512"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="1024"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="2048"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="4096"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="8192"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="16384"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="32768"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="65536"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="131072"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="262144"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="524288"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="1.048576e+06"} 0
tikv_client_go_txn_write_size_bytes_bucket{le="+Inf"} 0
tikv_client_go_txn_write_size_bytes_sum 0
tikv_client_go_txn_write_size_bytes_count 0
# HELP tikv_pdclient_ts_future_wait_seconds Bucketed histogram of seconds cost for waiting timestamp future.
# TYPE tikv_pdclient_ts_future_wait_seconds histogram
tikv_pdclient_ts_future_wait_seconds_bucket{le="5e-06"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="1e-05"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="2e-05"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="4e-05"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="8e-05"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.00016"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.00032"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.00064"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.00128"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.00256"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.00512"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.01024"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.02048"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.04096"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.08192"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.16384"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.32768"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="0.65536"} 0
tikv_pdclient_ts_future_wait_seconds_bucket{le="+Inf"} 0
tikv_pdclient_ts_future_wait_seconds_sum 0
tikv_pdclient_ts_future_wait_seconds_count 0
```
</details>