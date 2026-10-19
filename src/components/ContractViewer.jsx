import React, { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';

export default function ContractViewer() {
  const [activeTab, setActiveTab] = useState('smithy');
  const [copied, setCopied] = useState(false);

  const snippets = {
    smithy: {
      title: 'Smithy API: Cursor Pagination Contract',
      language: 'smithy',
      code: `/// Backward-compatible cursor pagination contract with sort tie-breakers
@paginated(
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "limit",
    items: "executions"
)
@readonly
@http(method: "GET", uri: "/v2/workflows/{workflowId}/history")
operation GetWorkflowHistory {
    input: GetWorkflowHistoryInput,
    output: GetWorkflowHistoryOutput,
    errors: [ResourceNotFoundException, AccessDeniedException, ThrottlingException]
}

structure GetWorkflowHistoryInput {
    @required
    @httpLabel
    workflowId: String,

    @httpQuery("limit")
    limit: Integer = 50,

    /// Cursor generated using OpenSearch search_after tie-breakers
    @httpQuery("nextToken")
    nextToken: String
}`
    },
    kotlin: {
      title: 'Kotlin: Jittered Backoff with Time Budget',
      language: 'kotlin',
      code: `// Single retry owner per failure class with strict deadline budget
class BoundedRetryExecutor(
    private val maxBudget: Duration = 30.seconds,
    private val tokenBucket: TokenBucketRateLimiter
) {
    suspend fun <T> executeWithBudget(
        operationName: String,
        block: suspend () -> T
    ): T {
        val deadline = System.currentTimeMillis() + maxBudget.inWholeMilliseconds
        var attempt = 0

        while (true) {
            val remaining = deadline - System.currentTimeMillis()
            if (remaining <= 0) throw TimeoutException("Exceeded retry budget for $operationName")

            try {
                tokenBucket.acquirePermit()
                return block()
            } catch (ex: DependencyThrottlingException) {
                attempt++
                val sleepTime = calculateFullJitter(attempt, remaining)
                delay(sleepTime)
            }
        }
    }
}`
    },
    cdk: {
      title: 'AWS CDK: Composite Alarms & Safe Deployment',
      language: 'typescript',
      code: `// Progressive delivery with bake time and automated canary rollback
const canaryDeployment = new codedeploy.LambdaDeploymentGroup(this, 'CanaryGroup', {
  alias: liveAlias,
  deploymentConfig: codedeploy.LambdaDeploymentConfig.CANARY_10PERCENT_15MINUTES,
  alarms: [
    // Composite alarm combining stall alarms, P99 latency & synthetic canaries
    compositeAlarm,
    syntheticCanaryFailureAlarm
  ],
  autoRollback: {
    failedDeployment: true,
    stoppedDeployment: true,
    deploymentError: true,
  },
});`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100 overflow-hidden font-mono text-xs shadow-sm">
      {/* Tab bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('smithy')}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              activeTab === 'smithy'
                ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Smithy API Contract
          </button>
          <button
            onClick={() => setActiveTab('kotlin')}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              activeTab === 'kotlin'
                ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Kotlin Backoff & Budgets
          </button>
          <button
            onClick={() => setActiveTab('cdk')}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              activeTab === 'cdk'
                ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            AWS CDK Composite Rollback
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-200 transition-colors p-1"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Snippet Code Box */}
      <div className="p-4 sm:p-5 overflow-x-auto text-xs leading-relaxed text-zinc-300 bg-zinc-950">
        <pre>
          <code>{snippets[activeTab].code}</code>
        </pre>
      </div>
    </div>
  );
}
