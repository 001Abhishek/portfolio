import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, CheckCircle2, Shield, Zap, Layers, RefreshCw } from 'lucide-react';

export default function ArchitectureVisualizer() {
  const [mode, setMode] = useState('after'); // 'before' | 'after'

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 p-5 sm:p-6 space-y-5">
      {/* Visualizer Header & Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Interactive System Topology
          </div>
          <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-50 mt-0.5">
            Serverless Fan-Out: Payload Bottleneck vs. Claim-Check Engine
          </h4>
        </div>

        {/* Toggle */}
        <div className="inline-flex rounded-lg p-1 bg-zinc-200/80 dark:bg-zinc-900 border border-zinc-300/80 dark:border-zinc-800 self-start sm:self-auto">
          <button
            onClick={() => setMode('before')}
            className={`px-3 py-1 rounded text-xs font-mono font-medium transition-colors ${
              mode === 'before'
                ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 font-semibold shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Before (Bottleneck)
          </button>
          <button
            onClick={() => setMode('after')}
            className={`px-3 py-1 rounded text-xs font-mono font-medium transition-colors ${
              mode === 'after'
                ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300 font-semibold shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            After (Claim-Check Engine)
          </button>
        </div>
      </div>

      {/* Interactive Topology Graph */}
      {mode === 'before' ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
            {/* Step 1 */}
            <div className="p-3.5 rounded-lg border border-amber-300/70 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/20">
              <div className="text-zinc-500 text-[10px] uppercase">Step 1: Producer</div>
              <div className="font-bold text-zinc-900 dark:text-zinc-100 mt-1">Multi-MB Payload</div>
              <div className="text-amber-700 dark:text-amber-400 mt-2 text-[11px] leading-relaxed">
                Raw payloads &gt;256KB attempted directly on message queue.
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-3.5 rounded-lg border border-red-300/80 dark:border-red-900/60 bg-red-50/70 dark:bg-red-950/20">
              <div className="text-zinc-500 text-[10px] uppercase">Step 2: SQS Queue</div>
              <div className="font-bold text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Hard Size Ceiling</span>
              </div>
              <div className="text-red-700 dark:text-red-300 mt-2 text-[11px] leading-relaxed">
                Rejections on large messages. Throttle bursts overflow queue capacity.
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-3.5 rounded-lg border border-amber-300/70 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/20">
              <div className="text-zinc-500 text-[10px] uppercase">Step 3: JVM Lambda</div>
              <div className="font-bold text-zinc-900 dark:text-zinc-100 mt-1">8–11s Cold Starts</div>
              <div className="text-amber-700 dark:text-amber-400 mt-2 text-[11px] leading-relaxed">
                Unoptimized initialization leaks into user-facing latency tiers.
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-3.5 rounded-lg border border-red-300/80 dark:border-red-900/60 bg-red-50/70 dark:bg-red-950/20">
              <div className="text-zinc-500 text-[10px] uppercase">Step 4: Downstream</div>
              <div className="font-bold text-red-600 dark:text-red-400 mt-1">Thundering Herd</div>
              <div className="text-red-700 dark:text-red-300 mt-2 text-[11px] leading-relaxed">
                Unbudgeted retries cascade against rate-limited dependencies.
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-800 dark:text-amber-300 font-mono">
            <strong>Bottleneck Symptoms:</strong> P99 latency spikes, frequent operational paging, payload drops on large documents, and dependency quota pressure.
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
            {/* Step 1 */}
            <div className="p-3.5 rounded-lg border border-emerald-300/70 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/20">
              <div className="text-zinc-500 text-[10px] uppercase">Step 1: S3 Offload</div>
              <div className="font-bold text-zinc-900 dark:text-zinc-100 mt-1">Claim-Check Pointer</div>
              <div className="text-emerald-700 dark:text-emerald-300 mt-2 text-[11px] leading-relaxed">
                Payload written to S3 with KMS context. Only pointer token sent to queue.
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-3.5 rounded-lg border border-emerald-300/70 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/20">
              <div className="text-zinc-500 text-[10px] uppercase">Step 2: SQS Fan-Out</div>
              <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Payload Limit</span>
              </div>
              <div className="text-emerald-700 dark:text-emerald-300 mt-2 text-[11px] leading-relaxed">
                High-throughput queue handles unlimited message volume without size ceiling.
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-3.5 rounded-lg border border-emerald-300/70 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/20">
              <div className="text-zinc-500 text-[10px] uppercase">Step 3: Tuned Lambda</div>
              <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-1">~1.5s Warm Latency</div>
              <div className="text-emerald-700 dark:text-emerald-300 mt-2 text-[11px] leading-relaxed">
                Provisioned concurrency & initialization tuning cuts P99 latency by 70%.
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-3.5 rounded-lg border border-emerald-300/70 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/20">
              <div className="text-zinc-500 text-[10px] uppercase">Step 4: Safe Delivery</div>
              <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-1">Token Bucket Budget</div>
              <div className="text-emerald-700 dark:text-emerald-300 mt-2 text-[11px] leading-relaxed">
                Retries sized to rate limiters with jitter. CodeDeploy canary auto-rollback.
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 text-xs text-emerald-800 dark:text-emerald-300 font-mono">
            <strong>Verified Production Outcome:</strong> Cold starts reduced from 8–11s to ~1.5s (P99 −70%), throttle bursts absorbed without quota increases, and zero payload dropouts.
          </div>
        </div>
      )}
    </div>
  );
}
