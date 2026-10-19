import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, ShieldCheck, Check, CornerDownLeft } from 'lucide-react';

export default function InteractiveCli() {
  const [activeCommand, setActiveCommand] = useState('dry-run');
  const [customInput, setCustomInput] = useState('');
  const [history, setHistory] = useState([
    {
      cmd: 'recovery-cli redrive --workflow-id wf-step-9821 --dry-run',
      output: [
        '[14:02:19.412] INFO  Connecting to AWS Step Functions in region [eu-west-1]...',
        '[14:02:19.680] INFO  Execution state inspect: Execution halted at state [BatchIngestionWorker]',
        '[14:02:19.821] INFO  Evaluating failure domain: ErrorCode [DependencyRateExceeded] -> Single Owner [TokenBucketRetryOwner]',
        '[14:02:20.104] INFO  Checking side-effect ledger in DynamoDB: 0 side-effects committed.',
        '[14:02:20.315] INFO  Validating downstream rate limit: Token bucket available capacity: 84.6%',
        '[14:02:20.482] OK    [DRY-RUN PASSED] Safe to redrive execution without duplicate processing.',
        '[14:02:20.483] HINT  Run with --execute to commit state restart from failed step.'
      ]
    }
  ]);

  const commandPresets = [
    {
      id: 'dry-run',
      label: '1. Dry-Run Recovery',
      cmd: 'recovery-cli redrive --workflow-id wf-step-9821 --dry-run',
      output: [
        '[14:02:19.412] INFO  Connecting to AWS Step Functions in region [eu-west-1]...',
        '[14:02:19.680] INFO  Execution state inspect: Execution halted at state [BatchIngestionWorker]',
        '[14:02:19.821] INFO  Evaluating failure domain: ErrorCode [DependencyRateExceeded] -> Single Owner [TokenBucketRetryOwner]',
        '[14:02:20.104] INFO  Checking side-effect ledger in DynamoDB: 0 side-effects committed.',
        '[14:02:20.315] INFO  Validating downstream rate limit: Token bucket available capacity: 84.6%',
        '[14:02:20.482] OK    [DRY-RUN PASSED] Safe to redrive execution without duplicate processing.',
        '[14:02:20.483] HINT  Run with --execute to commit state restart from failed step.'
      ]
    },
    {
      id: 'execute',
      label: '2. Execute State Redrive',
      cmd: 'recovery-cli redrive --workflow-id wf-step-9821 --execute',
      output: [
        '[14:05:01.109] WARN  Execution lock acquired on DynamoDB lease: [lease_owner_sde_abhishek]',
        '[14:05:01.320] INFO  Injecting retry token with jittered exponential backoff budget (max: 45s)...',
        '[14:05:01.642] INFO  Resuming Step Functions execution from step [BatchIngestionWorker] (Restarting only failed branch)...',
        '[14:05:03.208] INFO  Worker task dispatched to EC2 Spot fleet with memory caps active.',
        '[14:05:05.894] OK    Execution completed successfully. 1,420 items processed. 0 duplicates.',
        '[14:05:05.910] METRIC Recovery elapsed time: 4.8s (Previous manual outage runbook: 6.5 hours).'
      ]
    },
    {
      id: 'canary',
      label: '3. Synthetic Canary Health',
      cmd: 'canary-eval --fleet multi-region --composite-alarms',
      output: [
        '[14:08:12.004] INFO  Probing cross-account synthetic canaries across 3 AWS regions...',
        '[14:08:12.450] PASS  us-east-1: Synthetic OIDC auth cycle: 18ms (Threshold: <150ms)',
        '[14:08:12.610] PASS  eu-west-1: Claim-check payload offload cycle: 42ms (Threshold: <200ms)',
        '[14:08:12.780] PASS  ap-south-1: OpenSearch cursor pagination query: 29ms (Threshold: <100ms)',
        '[14:08:12.910] OK    Composite alarms healthy. Continuous deployment pipelines clear for staged promotion.'
      ]
    }
  ];

  const runCommand = (preset) => {
    setActiveCommand(preset.id);
    setHistory((prev) => [
      ...prev.slice(-3),
      { cmd: preset.cmd, output: preset.output }
    ]);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const input = customInput.trim();
    let output = [];

    if (input.includes('status') || input.includes('health')) {
      output = [
        '[CLI] Fleet Status: All multi-region cells operational.',
        '[CLI] Bounded concurrency pools: 18/64 active permits.',
        '[CLI] Zero unhandled stall alarms in last 24h.'
      ];
    } else if (input.includes('help')) {
      output = [
        '[CLI] Available commands:',
        '  - recovery-cli redrive --dry-run',
        '  - recovery-cli redrive --execute',
        '  - canary-eval --composite-alarms',
        '  - status'
      ];
    } else {
      output = [
        `[CLI] Executing: ${input}`,
        '[CLI] Command validated against production safety guardrails.',
        '[CLI] OK. Completed with return code 0.'
      ];
    }

    setHistory((prev) => [
      ...prev.slice(-3),
      { cmd: input, output }
    ]);
    setCustomInput('');
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100 overflow-hidden font-mono shadow-sm">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="ml-2 font-medium text-zinc-300">recovery-cli & canary inspection</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-zinc-500">
          <span>cell: prod-eu-west-1a</span>
          <span>•</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            online
          </span>
        </div>
      </div>

      {/* Preset Action Buttons Bar */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-2.5 bg-zinc-900/60 border-b border-zinc-850 text-xs border-zinc-800/80">
        <span className="text-zinc-500 text-[11px] uppercase tracking-wider mr-1">Quick Run:</span>
        {commandPresets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => runCommand(preset)}
            className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
              activeCommand === preset.id
                ? 'bg-zinc-800 text-emerald-400 border border-emerald-500/30'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
            }`}
          >
            <Play className="w-2.5 h-2.5 text-zinc-400" />
            <span>{preset.label}</span>
          </button>
        ))}
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 sm:p-5 max-h-72 overflow-y-auto space-y-4 text-xs leading-relaxed select-text">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-400 font-semibold">
              <span className="text-emerald-400">$</span>
              <span className="text-zinc-200">{item.cmd}</span>
            </div>
            <div className="pl-4 space-y-0.5 text-zinc-400">
              {item.output.map((line, lIdx) => (
                <div
                  key={lIdx}
                  className={`${
                    line.startsWith('OK') || line.includes('PASS')
                      ? 'text-emerald-400 font-medium'
                      : line.includes('WARN')
                      ? 'text-amber-300'
                      : line.includes('METRIC')
                      ? 'text-cyan-300 font-medium'
                      : 'text-zinc-400'
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Terminal Input Bar */}
      <form
        onSubmit={handleCustomSubmit}
        className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/80 border-t border-zinc-800 text-xs"
      >
        <span className="text-emerald-400 font-bold">$</span>
        <input
          type="text"
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          placeholder="Try: status, help, or click presets above..."
          className="flex-1 bg-transparent text-zinc-200 placeholder:text-zinc-600 focus:outline-none"
        />
        <button
          type="submit"
          className="text-zinc-500 hover:text-zinc-200 transition-colors"
          title="Send Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
